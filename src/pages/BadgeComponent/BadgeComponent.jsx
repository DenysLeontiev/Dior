import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './BadgeComponent.css'

const allBadges = [
  {
    id: 1,
    name: 'Digital Pioneer',
    category: 'DIGITAL',
    earned: true,
    description: 'Awarded for completing your first digital training module and exploring the Dior digital universe.',
    date: 'Feb 2026',
    variant: 'badge-red-blue',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" stroke="url(#bg1)" strokeWidth="2.5" fill="#0d1535" />
        <defs>
          <linearGradient id="bg1" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e05" /><stop offset="1" stopColor="#30f" />
          </linearGradient>
        </defs>
        <rect x="16" y="12" width="16" height="24" rx="2" stroke="#e8a87c" strokeWidth="1.8" fill="none" />
        <circle cx="24" cy="31" r="1.5" fill="#e8a87c" />
        <line x1="20" y1="16" x2="28" y2="16" stroke="#e8a87c" strokeWidth="1.5" />
        <circle cx="32" cy="30" r="5" fill="none" stroke="#e8a87c" strokeWidth="1.5" />
        <line x1="30" y1="28" x2="34" y2="32" stroke="#e8a87c" strokeWidth="1.2" />
      </svg>
    )
  },
  {
    id: 2,
    name: 'Star Collector',
    category: 'HERITAGE',
    earned: true,
    description: 'Earned by collecting 5 achievement stars across the Dior & I learning platform.',
    date: 'Jan 2026',
    variant: 'badge-navy-gold',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="#0a1245" />
        {[0,1,2,3,4,5,6,7].map((i) => {
          const angle = (i * 45 - 90) * Math.PI / 180
          const cx = 24 + 17 * Math.cos(angle)
          const cy = 24 + 17 * Math.sin(angle)
          return <polygon key={i} points="0,-4 1,-1 4,-1 2,1 3,4 0,2 -3,4 -2,1 -4,-1 -1,-1" fill="#e8a240" transform={`translate(${cx},${cy})`} />
        })}
        <circle cx="24" cy="24" r="10" fill="none" stroke="#4a5296" strokeWidth="1.5" />
        {[0,1,2,3,4,5,6,7].map((i) => {
          const angle = (i * 45 - 90) * Math.PI / 180
          const cx = 24 + 10 * Math.cos(angle)
          const cy = 24 + 10 * Math.sin(angle)
          return <polygon key={i} points="0,-3 1,0.8 3.8,0.8 1.8,2.5 2.5,5.2 0,3.5 -2.5,5.2 -1.8,2.5 -3.8,0.8 -1,0.8" fill="#e8a240" transform={`translate(${cx},${cy})`} />
        })}
      </svg>
    )
  },
  {
    id: 3,
    name: 'Rising Champion',
    category: 'SAVOIR-FAIRE',
    earned: false,
    description: 'Complete 10 training sessions to unlock this prestigious achievement.',
    date: null,
    variant: 'badge-dark',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="#252525" stroke="#444" strokeWidth="1.5" />
        <path d="M17 14h14v10a7 7 0 0 1-14 0V14z" stroke="#888" strokeWidth="1.8" fill="#1e1e1e" />
        <path d="M17 18c-2 0-4 1-4 4s2 4 4 4" stroke="#888" strokeWidth="1.5" fill="none" />
        <path d="M31 18c2 0 4 1 4 4s-2 4-4 4" stroke="#888" strokeWidth="1.5" fill="none" />
        <line x1="24" y1="31" x2="24" y2="36" stroke="#888" strokeWidth="1.5" />
        <line x1="18" y1="36" x2="30" y2="36" stroke="#888" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    id: 4,
    name: 'Elite Performer',
    category: 'MARKETING',
    earned: false,
    description: 'Achieve an excellence score of 90% or above across all marketing quizzes.',
    date: null,
    variant: 'badge-dark',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="#2a2a2a" stroke="#555" strokeWidth="1.5" />
        <path d="M17 14h14v10a7 7 0 0 1-14 0V14z" stroke="#ccc" strokeWidth="1.8" fill="#222" />
        <path d="M17 18c-2 0-4 1-4 4s2 4 4 4" stroke="#ccc" strokeWidth="1.5" fill="none" />
        <path d="M31 18c2 0 4 1 4 4s-2 4-4 4" stroke="#ccc" strokeWidth="1.5" fill="none" />
        <line x1="24" y1="31" x2="24" y2="36" stroke="#ccc" strokeWidth="1.5" />
        <line x1="18" y1="36" x2="30" y2="36" stroke="#ccc" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    id: 5,
    name: 'Legend',
    category: 'MAKE-UP',
    earned: false,
    description: 'The ultimate badge. Complete all available training programs to unlock.',
    date: null,
    variant: 'badge-dark',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="#2f2f2f" stroke="#666" strokeWidth="1.5" />
        <path d="M18 15h12v9a6 6 0 0 1-12 0V15z" stroke="#aaa" strokeWidth="1.6" fill="#252525" />
        <path d="M18 19c-1.5 0-3 1-3 3.5s1.5 3.5 3 3.5" stroke="#aaa" strokeWidth="1.4" fill="none" />
        <path d="M30 19c1.5 0 3 1 3 3.5s-1.5 3.5-3 3.5" stroke="#aaa" strokeWidth="1.4" fill="none" />
        <line x1="24" y1="30" x2="24" y2="35" stroke="#aaa" strokeWidth="1.4" />
        <line x1="19" y1="35" x2="29" y2="35" stroke="#aaa" strokeWidth="1.4" />
      </svg>
    )
  }
]

function BadgeComponent() {
  const navigate = useNavigate()
  const [selectedBadge, setSelectedBadge] = useState(null)

  return (
    <div className="badge-page">
      <button className="badge-back-btn" onClick={() => selectedBadge ? setSelectedBadge(null) : navigate(-1)} aria-label="Go back">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {!selectedBadge ? (
        <main className="badge-list-view">
          <h1 className="badge-page-title">BADGES</h1>
          <p className="badge-page-subtitle">Your achievements at Dior &amp; I</p>

          <div className="badge-earned-count">
            <span className="badge-earned-num">2</span>
            <span className="badge-earned-label">/ 5 earned</span>
          </div>

          {/* Progress bar */}
          <div className="badge-progress-track">
            <div className="badge-progress-fill" style={{ width: '40%' }} />
          </div>

          <div className="badge-grid">
            {allBadges.map((badge) => (
              <button
                key={badge.id}
                className={`badge-grid-item ${badge.earned ? 'earned' : 'locked'}`}
                onClick={() => setSelectedBadge(badge)}
              >
                <div className="badge-grid-icon">
                  {badge.icon}
                </div>
                <span className="badge-grid-name">{badge.name}</span>
                <span className="badge-grid-category">{badge.category}</span>
                {!badge.earned && (
                  <div className="badge-lock-overlay">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </main>
      ) : (
        <main className="badge-detail-view">
          <div className={`badge-detail-icon ${selectedBadge.variant}`}>
            {selectedBadge.icon}
          </div>

          <div className="badge-detail-status">
            {selectedBadge.earned ? (
              <span className="badge-status-earned">✓ Earned</span>
            ) : (
              <span className="badge-status-locked">🔒 Locked</span>
            )}
          </div>

          <h2 className="badge-detail-name">{selectedBadge.name}</h2>
          <span className="badge-detail-category">{selectedBadge.category}</span>

          <p className="badge-detail-desc">{selectedBadge.description}</p>

          {selectedBadge.earned && selectedBadge.date && (
            <p className="badge-detail-date">Earned in {selectedBadge.date}</p>
          )}

          {!selectedBadge.earned && (
            <div className="badge-detail-progress-block">
              <p className="badge-progress-label">Progress</p>
              <div className="badge-progress-track">
                <div className="badge-progress-fill" style={{ width: '35%' }} />
              </div>
              <p className="badge-progress-hint">35% complete</p>
            </div>
          )}
        </main>
      )}
    </div>
  )
}

export default BadgeComponent
