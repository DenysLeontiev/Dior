import { useNavigate } from 'react-router-dom'
import './ScoreComponent.css'

function ScoreComponent() {
  const navigate = useNavigate()

  return (
    <div className="score-page">
      <button className="score-back-btn" onClick={() => navigate(-1)} aria-label="Go back">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <main className="score-main">
        <p className="score-you-are">You are</p>

        <div className="score-number-block">
          <span className="score-big-number">456</span>
        </div>

        <p className="score-points-label">Points</p>
        <p className="score-subtitle">Away from your next star</p>
        <p className="score-cta">Keep going</p>

        <div className="score-star-icon">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
      </main>
    </div>
  )
}

export default ScoreComponent
