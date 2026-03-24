import { useState, useMemo } from 'react'
import { getDiorImage } from '../../utils/getDiorImage'
import './Notifications.css'

function Notifications() {
  const [activeTab, setActiveTab] = useState('users')
  const [searchQuery, setSearchQuery] = useState('')

  // ── CONTENTS tab state (original notifications) ──
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'COMMUNITY WALL', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', unread: true },
    { id: 2, title: 'COMMUNITY WALL', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', unread: true },
    { id: 3, title: 'COMMUNITY WALL', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', unread: false },
    { id: 4, title: 'COMMUNITY WALL', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', unread: false }
  ])
  const [fadingIds, setFadingIds] = useState([])

  // ── USERS tab state ──
  const [users, setUsers] = useState([
    { id: 1, name: 'SEVILLA JEM', img: 1, followed: true },
    { id: 2, name: 'RANA BIANA', img: 2, followed: true },
    { id: 3, name: 'MIDA LENS', img: 3, followed: true },
    { id: 4, name: 'REX CHAMPIPOLUD', img: 4, followed: false },
    { id: 5, name: 'DOROTHY BRINKLA', img: 5, followed: false },
    { id: 6, name: 'SERENA VALE', img: 6, followed: false },
    { id: 7, name: 'THOMAS GREY', img: 7, followed: true }
  ])

  // ── HASHTAGS tab state ──
  const hashtags = [
    { id: 1, tag: '#FASHION', count: '1.2K' },
    { id: 2, tag: '#DIOR', count: '980' },
    { id: 3, tag: '#BEAUTY', count: '756' },
    { id: 4, tag: '#LUXURY', count: '543' },
    { id: 5, tag: '#HERITAGE', count: '321' }
  ]

  // ── Handlers ──
  const deleteNotification = (id) => {
    setFadingIds((prev) => [...prev, id])
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id))
      setFadingIds((prev) => prev.filter((fid) => fid !== id))
    }, 300)
  }

  const deleteAll = () => {
    notifications.forEach((n, index) => {
      setTimeout(() => {
        setFadingIds((prev) => [...prev, n.id])
        setTimeout(() => {
          setNotifications((prev) => prev.filter((item) => item.id !== n.id))
          setFadingIds((prev) => prev.filter((fid) => fid !== n.id))
        }, 300)
      }, index * 100)
    })
  }

  const toggleFollow = (id) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, followed: !u.followed } : u))
    )
  }

  // Search filtering
  const filteredUsers = useMemo(
    () => users.filter((u) => u.name.toLowerCase().includes(searchQuery.toLowerCase())),
    [users, searchQuery]
  )

  const filteredHashtags = useMemo(
    () => hashtags.filter((h) => h.tag.toLowerCase().includes(searchQuery.toLowerCase())),
    [hashtags, searchQuery]
  )

  return (
    <main className="notifications-main">
      {/* ─── Profile Header ─── */}
      <div className="notif-profile-info">
        <div className="notif-avatar-wrapper">
          <img src={getDiorImage(10)} alt="Avatar" className="notif-avatar-img" />
        </div>
        <div className="notif-profile-details">
          <h2 className="notif-profile-name">
            <span className="fw-normal">Mathieu </span>FERNEZ
          </h2>
        </div>
      </div>

      {/* ─── Tabs ─── */}
      <div className="notif-tabs-container">
        <button
          className={`notif-tab-btn ${activeTab === 'contents' ? 'active' : ''}`}
          onClick={() => setActiveTab('contents')}
        >
          CONTENTS
        </button>
        <button
          className={`notif-tab-btn ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          USERS
        </button>
        <button
          className={`notif-tab-btn ${activeTab === 'hashtags' ? 'active' : ''}`}
          onClick={() => setActiveTab('hashtags')}
        >
          #
        </button>
      </div>

      {/* ─── Search Bar ─── */}
      <div className="notif-search-wrapper">
        <input
          type="text"
          className="notif-search-input"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <svg className="notif-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>

      {/* ─── CONTENTS Tab ─── */}
      {activeTab === 'contents' && (
        <div className="notif-tab-content">
          <div className="notif-contents-header">
            <button className="btn notif-delete-all-btn" onClick={deleteAll}>Delete all</button>
          </div>
          <div className="notifications-list">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className={`notification-item ${notif.unread ? 'unread' : ''}`}
                style={{ opacity: fadingIds.includes(notif.id) ? 0 : 1 }}
              >
                <div className="notification-status">
                  {notif.unread && <span className="status-dot"></span>}
                </div>
                <div className="notification-content">
                  <h2 className="notification-title">{notif.title}</h2>
                  <p className="notification-text">{notif.text}</p>
                </div>
                <div className="notification-action">
                  <button className="icon-btn delete-btn" onClick={() => deleteNotification(notif.id)}>
                    <img src={`${import.meta.env.BASE_URL}images/delete.png`} alt="Delete" className="delete-icon" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─── USERS Tab ─── */}
      {activeTab === 'users' && (
        <div className="notif-tab-content">
          <ul className="notif-user-list">
            {filteredUsers.map((user) => (
              <li className="notif-user-item" key={user.id}>
                <div className="notif-user-left">
                  <div className="notif-user-avatar">
                    <img src={getDiorImage(user.img)} alt={user.name} />
                  </div>
                  <span className="notif-user-name">{user.name}</span>
                </div>
                <button
                  className={`notif-follow-btn ${user.followed ? 'followed' : ''}`}
                  onClick={() => toggleFollow(user.id)}
                >
                  {user.followed ? 'FOLLOWED' : 'FOLLOW'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ─── HASHTAGS Tab ─── */}
      {activeTab === 'hashtags' && (
        <div className="notif-tab-content">
          <ul className="notif-hashtag-list">
            {filteredHashtags.map((h) => (
              <li className="notif-hashtag-item" key={h.id}>
                <span className="notif-hashtag-tag">{h.tag}</span>
                <span className="notif-hashtag-count">{h.count} posts</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  )
}

export default Notifications
