import { useNavigate } from 'react-router-dom'
import { getDiorImage } from '../../utils/getDiorImage'
import './StaffTraining.css'

const sections = [
  {
    id: 1,
    title: '1. My first days',
    items: [
      {
        id: 11,
        label: 'Welcome at Parfums Christian Dior',
        img: getDiorImage(31),
        progress: 100,
        locked: false
      },
      {
        id: 12,
        label: 'Remote work @ Parfums Christian Dior',
        img: getDiorImage(32),
        progress: 60,
        locked: false
      },
      {
        id: 13,
        label: 'All about Parfums Christian Dior',
        img: getDiorImage(33),
        progress: 20,
        locked: false
      }
    ]
  },
  {
    id: 2,
    title: '2. Discover my environment',
    items: [
      {
        id: 21,
        label: 'Dior Heritage & Culture',
        img: getDiorImage(34),
        progress: 45,
        locked: false
      },
      {
        id: 22,
        label: 'The Dior Universe',
        img: getDiorImage(35),
        progress: 0,
        locked: false
      },
      {
        id: 23,
        label: 'Leadership at Dior',
        img: getDiorImage(36),
        progress: 0,
        locked: false
      }
    ]
  },
  {
    id: 3,
    title: '3. Build my expertise',
    items: [
      {
        id: 31,
        label: 'Product knowledge essentials',
        img: getDiorImage(37),
        progress: 0,
        locked: false
      },
      {
        id: 32,
        label: 'Digital tools & innovation',
        img: getDiorImage(38),
        progress: 0,
        locked: false
      }
    ]
  },
  {
    id: 4,
    title: '4. Manage a team',
    items: [
      {
        id: 41,
        label: 'What management style do you have?',
        img: getDiorImage(39),
        progress: 0,
        locked: true
      }
    ]
  }
]

function LockIcon() {
  return (
    <svg className="lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      width="36" height="36">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      width="18" height="18">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="check-overlay" viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <polyline points="10,26 20,36 40,14" stroke="#C4759B" strokeWidth="4"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function TrainingCard({ item }) {
  return (
    <div className="training-card">
      <div className="training-card-img-wrap">
        <img src={item.img} alt={item.label} className="training-card-img" />
        {item.locked && (
          <div className="card-locked-overlay">
            <LockIcon />
          </div>
        )}
        {item.progress === 100 && !item.locked && (
          <div className="card-check-overlay">
            <CheckIcon />
          </div>
        )}
      </div>
      <div className={`training-card-bar ${item.locked ? 'locked-bar' : ''}`}>
        <div
          className="training-card-fill"
          style={{ width: item.locked ? '0%' : `${item.progress}%` }}
        />
      </div>
      <p className="training-card-label">{item.label}</p>
      <InfoIcon />
    </div>
  )
}

function StaffTraining() {
  const navigate = useNavigate()

  return (
    <div className="staff-training-page">
      {/* ── Hero section ──────────────────────────────── */}
      <section className="st-hero">
        <button className="st-back-btn" onClick={() => navigate(-1)} aria-label="Go back">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <h1 className="st-hero-title">DIGITAL PATH</h1>

        <div className="st-hero-body">
          <div className="st-hero-img-wrap">
            <img
              src={getDiorImage(40)}
              alt="Digital Path"
              className="st-hero-img"
            />
            <div className="st-hero-img-bar">
              <div className="st-hero-img-fill" style={{ width: '20%' }} />
            </div>
            <div className="st-hero-meta">
              <span>Estimated time : 8h</span>
              <span>Points : 20/100</span>
            </div>
          </div>

          <p className="st-hero-desc">
            Start here to dive into the Maison Parfum Christian Dior. The essential
            information you need to start on the right track!
          </p>
        </div>
      </section>

      {/* ── Skill assessment ──────────────────────────── */}
      <section className="st-section">
        <h2 className="st-section-heading">Skill assessment</h2>
        <div className="st-cards-row st-cards-row--single">
          <TrainingCard item={{
            id: 0,
            label: 'Evaluate your DIGITAL SKILLS before starting your path!',
            img: getDiorImage(41),
            progress: 100,
            locked: false
          }} />
        </div>
      </section>

      {/* ── Numbered sections ─────────────────────────── */}
      {sections.map((section) => (
        <section key={section.id} className="st-section">
          <h2 className="st-section-heading">{section.title}</h2>
          <div className="st-cards-row">
            {section.items.map((item) => (
              <TrainingCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      ))}

      {/* ── Final skill assessment ─────────────────────── */}
      <section className="st-section">
        <h2 className="st-section-heading">Final skill assessment</h2>
        <div className="st-cards-row st-cards-row--single">
          <TrainingCard item={{
            id: 99,
            label: 'Validate all your DIGITAL SKILLS at the end of your path!',
            img: getDiorImage(42),
            progress: 0,
            locked: false
          }} />
        </div>
      </section>
    </div>
  )
}

export default StaffTraining
