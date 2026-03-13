import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getDiorImage } from '../../utils/getDiorImage'
import './Community.css'

function Community() {
  const [activeTab, setActiveTab] = useState('activities')

  const activities = [
    { name: 'DaJeong K.', time: '12 days', img: 40 },
    { name: 'DaJeong K.', time: '15 days', img: 41 },
    { name: 'Chae-Lim R.', time: '16 days', img: 42 },
    { name: 'DaJeong K.', time: '19 days', img: 43 },
    { name: 'Qiumei W.', time: '23 days', img: 44 },
    { name: 'Rachelle O.', time: '23 days', img: 45 }
  ]

  return (
    <main className="community-main">
      {/* Header */}
      <div className="community-header">
        <Link to="/home" className="back-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </Link>
        <h1 className="page-title">LIKES</h1>
      </div>

      {/* Tabs */}
      <div className="tabs-container">
        <button
          className={`tab-btn ${activeTab === 'activities' ? 'active' : ''}`}
          onClick={() => setActiveTab('activities')}
        >
          ACTIVITIES
        </button>
        <button
          className={`tab-btn ${activeTab === 'you' ? 'active' : ''}`}
          onClick={() => setActiveTab('you')}
        >
          YOU
        </button>
      </div>

      {/* Activities Tab */}
      {activeTab === 'activities' && (
        <div className="tab-content">
          <ul className="activity-list">
            {activities.map((activity, i) => (
              <li className="activity-item" key={i}>
                <div className="activity-left">
                  <svg className="heart-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="activity-text">
                    You have liked the post of <strong>{activity.name}</strong>
                  </span>
                </div>
                <div className="activity-right">
                  <span className="activity-time">{activity.time}</span>
                  <div className="activity-img-wrapper">
                    <img src={getDiorImage(activity.img)} alt="Post thumbnail" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* You Tab */}
      {activeTab === 'you' && (
        <div className="tab-content">
          <div className="empty-state">
            <p>No recent activity for you.</p>
          </div>
        </div>
      )}
    </main>
  )
}

export default Community
