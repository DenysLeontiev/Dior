import { useState } from 'react'
import { Link } from 'react-router-dom'
import './MyAccount.css'

function MyAccount() {
  const [activeTab, setActiveTab] = useState('profile')

  const skills = [
    { name: 'DIGITAL', percent: 60 },
    { name: 'MARKETING', percent: 93 },
    { name: 'HERITAGE', percent: 71 },
    { name: 'SAVOIR-FAIRE', percent: 47 },
    { name: 'MAKE-UP', percent: 82 }
  ]

  return (
    <main className="account-main">
      {/* Header */}
      <header className="account-header">
        <Link to="/home" className="back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </Link>
        <h1 className="page-title">MY ACCOUNT</h1>
      </header>

      {/* Profile Info */}
      <div className="profile-info">
        <div className="avatar-wrapper">
          <img src="https://picsum.photos/100/100?random=10" alt="Avatar" className="avatar-img" />
        </div>
        <div className="profile-details">
          <h2 className="profile-name"><span className="fw-normal">Mathieu</span> FERNEZ</h2>
          <p className="profile-role">Learning & Transformation project manager</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs-container">
        <button
          className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </button>
        <button
          className={`tab-btn ${activeTab === 'bookmarks' ? 'active' : ''}`}
          onClick={() => setActiveTab('bookmarks')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>

      {/* Profile Tab Content */}
      {activeTab === 'profile' && (
        <div className="tab-content">
          {/* SCORE */}
          <section className="content-section">
            <h3 className="section-title">SCORE</h3>
            <div className="score-container">
              <div className="score-points">
                <span className="points-label">POINTS</span>
                <span className="points-current">1 500</span>
                <span className="points-total">/ 2 500</span>
              </div>
              <div className="score-stars">
                <div className="stars-row">
                  {[0, 1, 2, 3].map((i) => (
                    <svg key={i} className="star filled" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                  <div className="star-wrapper">
                    <svg className="star filled" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span className="star-number">5</span>
                  </div>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg key={`empty-${i}`} className="star empty" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* BADGES */}
          <section className="content-section">
            <h3 className="section-title">BADGES</h3>
            <div className="badges-container">
              {['color-1', 'color-2', 'color-3', 'inactive', 'inactive'].map((cls, i) => (
                <div key={i} className={`badge-item ${cls}`}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10A10 10 0 0 1 12 2m0-2a12 12 0 1 0 12 12A12 12 0 0 0 12 0z" />
                  </svg>
                </div>
              ))}
            </div>
          </section>

          {/* SKILLS */}
          <section className="content-section">
            <h3 className="section-title">MY SKILLS</h3>
            <div className="skills-container">
              {skills.map((skill, i) => (
                <div className="skill-row" key={i}>
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-progress-wrapper">
                    <span className="skill-percent">{skill.percent}%</span>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{ width: `${skill.percent}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* INTERESTS */}
          <section className="content-section">
            <h3 className="section-title">MY INTERESTS</h3>
            <div className="interests-container">
              {[
                { label: 'Culture & Heritage', img: 11 },
                { label: 'Security', img: 12 },
                { label: 'Software', img: 13 }
              ].map((interest, i) => (
                <div className="interest-card" key={i}>
                  <img src={`https://picsum.photos/300/200?random=${interest.img}`} alt={interest.label} />
                  <span className="interest-label">{interest.label}</span>
                </div>
              ))}
            </div>
            <div className="update-btn-container">
              <button className="btn update-btn">Update</button>
            </div>
          </section>

          {/* BOOKMARKED TRAININGS */}
          <section className="content-section">
            <h3 className="section-title">BOOKMARKED TRAININGS</h3>
            <div className="bookmarks-grid">
              <div className="bookmark-card">
                <div className="bookmark-img-wrapper">
                  <img src="https://picsum.photos/300/200?random=14" alt="Training" />
                  <div className="bookmark-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BOOKMARKED EVENTS */}
          <section className="content-section">
            <h3 className="section-title">BOOKMARKED EVENTS</h3>
            <div className="bookmarks-grid">
              {[
                { img: 15, title: 'Digital in Asia: Livestreaming' },
                { img: 16, title: 'Digital Cafe at Parfums Christian...' },
                { img: 17, title: 'Our values at Parfums Christian Dior' }
              ].map((bm, i) => (
                <div className="bookmark-card" key={i}>
                  <div className="bookmark-img-wrapper">
                    <img src={`https://picsum.photos/300/200?random=${bm.img}`} alt={`Event ${i + 1}`} />
                    <div className="bookmark-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="bookmark-title">{bm.title}</p>
                </div>
              ))}
            </div>
          </section>

          {/* BOOKMARKED NEWS */}
          <section className="content-section">
            <h3 className="section-title">BOOKMARKED NEWS</h3>
            <div className="bookmarks-grid">
              <div className="bookmark-card empty-state">
                <p>No bookmarked news found.</p>
              </div>
            </div>
          </section>

          {/* BOOKMARK POSTS */}
          <section className="content-section">
            <h3 className="section-title">BOOKMARK POSTS</h3>
            <div className="bookmarks-grid square-posts">
              {[18, 19, 20].map((num) => (
                <div className="bookmark-card square" key={num}>
                  <div className="bookmark-img-wrapper">
                    <img src={`https://picsum.photos/250/250?random=${num}`} alt={`Post ${num - 17}`} />
                    <div className="bookmark-icon square-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* Bookmarks (Heart) Tab Content */}
      {activeTab === 'bookmarks' && (
        <div className="tab-content">
          <section className="metrics-section">
            {[
              { value: '12', label: 'Posts' },
              { value: '227', label: 'Likes' },
              { value: '43', label: 'Followers' },
              { value: '76', label: 'Followed' }
            ].map((metric, i) => (
              <div className="metric-item" key={i}>
                <span className="metric-value">{metric.value}</span>
                <span className="metric-label">{metric.label}</span>
              </div>
            ))}
          </section>

          <section className="gallery-section">
            <div className="gallery-grid">
              {[21, 22, 23, 24, 25, 26, 27, 28].map((num) => (
                <div className="gallery-item" key={num}>
                  <img src={`https://picsum.photos/300/300?random=${num}`} alt={`Gallery Image ${num - 20}`} />
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </main>
  )
}

export default MyAccount
