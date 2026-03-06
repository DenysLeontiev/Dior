import { useState } from 'react'
import './Notifications.css'

function Notifications() {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'COMMUNITY WALL', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', unread: true },
    { id: 2, title: 'COMMUNITY WALL', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', unread: true },
    { id: 3, title: 'COMMUNITY WALL', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', unread: false },
    { id: 4, title: 'COMMUNITY WALL', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', unread: false }
  ])
  const [fadingIds, setFadingIds] = useState([])

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

  return (
    <main className="notifications-main">
      <header className="notifications-header">
        <h1 className="page-title">NOTIFICATIONS</h1>
        <button className="btn delete-all-btn" onClick={deleteAll}>Delete all</button>
      </header>

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
    </main>
  )
}

export default Notifications
