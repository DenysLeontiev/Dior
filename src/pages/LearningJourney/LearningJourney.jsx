import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import './LearningJourney.css'

// ─── Quiz Data ────────────────────────────────────────────────────────────────
const QUESTIONS = [
  {
    id: 1,
    type: 'match',
    instruction: 'Do you know these definitions? Match each definition to its word.',
    items: [
      {
        word: 'ELEGANCE',
        definition: 'The art of refining every detail to achieve understated, timeless luxury.',
      },
      {
        word: 'HERITAGE',
        definition: 'A rich legacy of craftsmanship and vision passed through generations.',
      },
      {
        word: 'SAVOIR-FAIRE',
        definition: 'The exceptional know-how behind every Dior creation.',
      },
    ],
    funFact:
      'Christian Dior famously said: "Elegance is not about being noticed, it is about being remembered." True elegance lives in restraint and precision.',
  },
  {
    id: 2,
    type: 'multiselect',
    instruction: 'What are the pillars of exceptional client experience at Dior? Select all 5 correct answers. Avoid the others!',
    correctCount: 5,
    options: [
      { label: 'Personalisation', correct: true },
      { label: 'Active Listening', correct: true },
      { label: 'Storytelling', correct: true },
      { label: 'Product Knowledge', correct: true },
      { label: 'Discretion', correct: true },
      { label: 'Price Focus', correct: false },
      { label: 'Speed Above All', correct: false },
      { label: 'Upselling', correct: false },
    ],
    funFact:
      "At Dior, the client's experience is an art form. Every interaction is tailored to create a moment of beauty and connection worthy of the Maison.",
  },
  {
    id: 3,
    type: 'match',
    instruction: 'Match each Dior house rule to its guiding principle.',
    items: [
      {
        word: 'WELCOME',
        definition: 'Greet every guest as if entering your own home — warmly and without hesitation.',
      },
      {
        word: 'EXCELLENCE',
        definition: 'Every gesture, every word must reflect the highest standard of the Maison.',
      },
      {
        word: 'DISCRETION',
        definition: 'Preserve the intimacy and trust of every client at all times.',
      },
    ],
    funFact:
      'The house codes of Dior date back to 1947. These pillars have guided every Dior ambassador for nearly 80 years.',
  },
]

// ─── Progress Circle ──────────────────────────────────────────────────────────
function ProgressCircle({ percent }) {
  const r = 22
  const circ = 2 * Math.PI * r
  const offset = circ - (percent / 100) * circ

  return (
    <div className="lj-progress-circle" aria-label={`${percent}% complete`}>
      <svg width="56" height="56" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r={r} className="lj-circ-bg" />
        <circle
          cx="28" cy="28" r={r}
          className="lj-circ-fill"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          transform="rotate(-90 28 28)"
        />
      </svg>
      <span className="lj-circ-label">{percent}%</span>
    </div>
  )
}

// ─── Q1 / Q3 — Match component ────────────────────────────────────────────────
function MatchQuestion({ q, onScore }) {
  const [selected, setSelected] = useState(null) // definition index
  const [matches, setMatches] = useState({})     // wordIndex → { defIndex, correct }
  const [submitted, setSubmitted] = useState(false)

  const definitions = q.items.map((i) => i.definition)
  // Shuffle once (stable via key)
  const [shuffled] = useState(() => {
    const arr = definitions.map((d, i) => ({ d, origIdx: i }))
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  })

  const handleWordClick = (wordIdx) => {
    if (submitted || selected === null) return
    const defShuffledItem = shuffled[selected]
    const correct = defShuffledItem.origIdx === wordIdx
    setMatches((prev) => ({ ...prev, [wordIdx]: { defIndex: selected, correct } }))
    setSelected(null)
  }

  const allMatched = Object.keys(matches).length === q.items.length

  const handleSubmit = () => {
    setSubmitted(true)
    const correctCount = Object.values(matches).filter((m) => m.correct).length
    onScore(correctCount, q.items.length)
  }

  const handleReset = () => {
    setSelected(null)
    setMatches({})
    setSubmitted(false)
    onScore(0, q.items.length, true)
  }

  // Find which def text is assigned to a word slot
  const getDefForWord = (wordIdx) => {
    const m = matches[wordIdx]
    if (!m) return null
    return shuffled[m.defIndex]?.d
  }

  return (
    <div className="lj-match-grid">
      {/* ── Definition cards (top) ── */}
      <div className="lj-def-row">
        {shuffled.map((item, i) => {
          const isUsed = Object.values(matches).some((m) => m.defIndex === i)
          return (
            <button
              key={i}
              className={`lj-def-card ${selected === i ? 'selected' : ''} ${isUsed ? 'used' : ''}`}
              onClick={() => !submitted && !isUsed && setSelected(selected === i ? null : i)}
              disabled={submitted || isUsed}
            >
              <span>{item.d}</span>
            </button>
          )
        })}
      </div>

      {/* ── Word cards (bottom) ── */}
      <div className="lj-word-row">
        {q.items.map((item, i) => {
          const m = matches[i]
          const def = getDefForWord(i)
          return (
            <button
              key={i}
              className={`lj-word-card ${m ? (m.correct ? 'correct' : 'wrong') : ''} ${!m && selected !== null ? 'target' : ''}`}
              onClick={() => handleWordClick(i)}
              disabled={submitted || !!m}
            >
              {submitted && m && (
                <span className="lj-match-icon">{m.correct ? '✓' : '✗'}</span>
              )}
              <span className="lj-word-label">{item.word}</span>
              {def && <span className="lj-word-def-preview">{def.slice(0, 28)}…</span>}
            </button>
          )
        })}
      </div>

      {/* ── Action ── */}
      <div className="lj-match-actions">
        {!submitted ? (
          <button
            className="lj-action-btn"
            disabled={!allMatched}
            onClick={handleSubmit}
          >
            Check Answers
          </button>
        ) : (
          <button className="lj-action-btn lj-action-btn--ghost" onClick={handleReset}>
            Try Again
          </button>
        )}
      </div>
    </div>
  )
}

// ─── Q2 — Multi-select circles ────────────────────────────────────────────────
function MultiSelectQuestion({ q, onScore }) {
  const [picked, setPicked] = useState(new Set())
  const [submitted, setSubmitted] = useState(false)

  const toggle = (i) => {
    if (submitted) return
    setPicked((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  const handleSubmit = () => {
    setSubmitted(true)
    let correct = 0
    picked.forEach((i) => { if (q.options[i].correct) correct++ })
    // penalise wrong picks
    picked.forEach((i) => { if (!q.options[i].correct) correct-- })
    onScore(Math.max(0, correct), q.correctCount)
  }

  const handleReset = () => {
    setPicked(new Set())
    setSubmitted(false)
    onScore(0, q.correctCount, true)
  }

  return (
    <div className="lj-multi-wrap">
      <div className="lj-circles-grid">
        {q.options.map((opt, i) => {
          const sel = picked.has(i)
          let state = ''
          if (submitted) {
            if (sel && opt.correct) state = 'correct'
            else if (sel && !opt.correct) state = 'wrong'
            else if (!sel && opt.correct) state = 'missed'
          } else if (sel) {
            state = 'picked'
          }
          return (
            <button
              key={i}
              className={`lj-circle-btn ${state}`}
              onClick={() => toggle(i)}
            >
              <span>{opt.label}</span>
            </button>
          )
        })}
      </div>

      <div className="lj-match-actions">
        {!submitted ? (
          <button
            className="lj-action-btn"
            disabled={picked.size === 0}
            onClick={handleSubmit}
          >
            Check Answers
          </button>
        ) : (
          <button className="lj-action-btn lj-action-btn--ghost" onClick={handleReset}>
            Try Again
          </button>
        )}
      </div>
    </div>
  )
}

// ─── Result Screen ─────────────────────────────────────────────────────────────
function ResultScreen({ scores, navigate }) {
  const total = scores.reduce((a, b) => a + b.got, 0)
  const max = scores.reduce((a, b) => a + b.max, 0)
  const pct = Math.round((total / max) * 100)

  const message =
    pct === 100
      ? 'Perfect! A true Dior ambassador.'
      : pct >= 70
      ? 'Excellent! You have the spirit of the Maison.'
      : pct >= 40
      ? 'Good effort — keep exploring the Dior universe.'
      : 'Every journey begins with curiosity. Review and try again!'

  return (
    <div className="lj-result">
      <div className="lj-result-circle">
        <svg viewBox="0 0 120 120" width="160" height="160">
          <circle cx="60" cy="60" r="52" className="lj-res-bg" />
          <circle
            cx="60" cy="60" r="52"
            className="lj-res-fill"
            strokeDasharray={2 * Math.PI * 52}
            strokeDashoffset={2 * Math.PI * 52 * (1 - pct / 100)}
            transform="rotate(-90 60 60)"
          />
        </svg>
        <div className="lj-result-pct">{pct}%</div>
      </div>
      <h2 className="lj-result-title">QUIZ COMPLETE</h2>
      <p className="lj-result-message">{message}</p>
      <p className="lj-result-score">{total} / {max} correct</p>
      <div className="lj-result-actions">
        <button className="lj-action-btn" onClick={() => navigate('/staff-training')}>
          Back to Digital Path
        </button>
        <button className="lj-action-btn lj-action-btn--ghost" onClick={() => navigate('/home')}>
          Go Home
        </button>
      </div>
    </div>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function LearningJourney() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0) // 0-based question index; QUESTIONS.length = result
  const [scores, setScores] = useState(QUESTIONS.map(() => ({ got: 0, max: 0 })))

  const current = QUESTIONS[step]
  const isResult = step >= QUESTIONS.length

  const totalPercent = isResult
    ? Math.round(scores.reduce((a, b) => a + b.got, 0) / scores.reduce((a, b) => a + b.max, 1) * 100)
    : Math.round((scores.slice(0, step).reduce((a, b) => a + b.got, 0) /
        Math.max(1, scores.slice(0, step).reduce((a, b) => a + b.max, 0))) * 100) || 0

  const handleScore = useCallback((got, max, reset = false) => {
    setScores((prev) => {
      const next = [...prev]
      next[step] = reset ? { got: 0, max } : { got, max }
      return next
    })
  }, [step])

  const goNext = () => { if (step < QUESTIONS.length) setStep((s) => s + 1) }
  const goPrev = () => { if (step > 0) setStep((s) => s - 1) }

  return (
    <div className="lj-page">
      {/* ── Header ───────────────────────────────────────── */}
      <div className="lj-header">
        <ProgressCircle percent={isResult ? 100 : totalPercent} />
        <button className="lj-home-btn" onClick={() => navigate('/home')} aria-label="Go home">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </button>
      </div>

      {/* ── Content ──────────────────────────────────────── */}
      {isResult ? (
        <ResultScreen scores={scores} navigate={navigate} />
      ) : (
        <div className="lj-content">
          <h1 className="lj-main-title">WHAT DO YOU ALREADY KNOW?</h1>

          <div className="lj-counter">
            <span className="lj-counter-num">{step + 1}</span>
            <span className="lj-counter-total">/{QUESTIONS.length}</span>
          </div>

          <p className="lj-instruction">{current.instruction}</p>

          <div className="lj-question-area">
            {current.type === 'match' && (
              <MatchQuestion key={current.id} q={current} onScore={handleScore} />
            )}
            {current.type === 'multiselect' && (
              <MultiSelectQuestion key={current.id} q={current} onScore={handleScore} />
            )}
          </div>

          {/* ── Fun fact bar + nav ─────────────────────── */}
          <div className="lj-bottom-bar">
            <button
              className="lj-nav-btn"
              onClick={goPrev}
              disabled={step === 0}
              aria-label="Previous"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <p className="lj-fun-fact">{current.funFact}</p>

            <button
              className="lj-nav-btn"
              onClick={goNext}
              aria-label="Next"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
