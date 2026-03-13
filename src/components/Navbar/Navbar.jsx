import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const getActivePage = () => {
    const path = location.pathname
    if (path === '/home') return 'home'
    if (path === '/events') return 'events'
    if (path === '/community') return 'community'
    if (path === '/notifications') return 'notifications'
    if (path === '/my-account') return 'account'
    return ''
  }

  const activePage = getActivePage()

  const openSidebar = () => {
    setSidebarOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
    document.body.style.overflow = ''
  }

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && sidebarOpen) {
        closeSidebar()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [sidebarOpen])

  const navItems = (
    <>
      <Link to="/home" className={`nav-item ${activePage === 'home' ? 'active' : ''}`}>
        <div className="icon-container">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </div>
        <span>Home</span>
      </Link>

      <a href="#" className={`nav-item ${activePage === 'catalogue' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); openSidebar(); }}>
        <div className="icon-container">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
        </div>
        <span>Catalogue</span>
      </a>

      <Link to="/events" className={`nav-item ${activePage === 'events' ? 'active' : ''}`}>
        <div className="icon-container">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </div>
        <span>Events</span>
      </Link>

      <Link to="/community" className={`nav-item ${activePage === 'community' ? 'active' : ''}`}>
        <div className="icon-container">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
            <line x1="9" y1="9" x2="9.01" y2="9"></line>
            <line x1="15" y1="9" x2="15.01" y2="9"></line>
          </svg>
        </div>
        <span>Community</span>
      </Link>

      <Link to="/notifications" className={`nav-item ${activePage === 'notifications' ? 'active' : ''}`}>
        <div className="icon-container relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          <span className="badge">7</span>
        </div>
        <span>Notifications</span>
      </Link>

      <Link to="/my-account" className={`nav-item ${activePage === 'account' ? 'active' : ''}`}>
        <div className="icon-container account-img-container">
          <img src={`${import.meta.env.BASE_URL}images/user-silhouette.svg`} alt="User" className="account-img" />
        </div>
        <span>My account</span>
      </Link>
    </>
  )

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <img src={`${import.meta.env.BASE_URL}images/DnI-192x192.png`} alt="Dior &amp; I" className="dior-logo" />
        </div>

        <div className="nav-center">
          {navItems}
        </div>

        <div className="nav-right">
          <div className="search-container">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span className="search-text">Search</span>
          </div>

          <button className="menu-btn" aria-label="Open menu" onClick={openSidebar}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>

      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        {navItems}
      </nav>

      <div
        className={`sidebar-backdrop ${sidebarOpen ? 'visible' : ''}`}
        onClick={closeSidebar}
      ></div>

      <div className={`sidebar-menu ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">CATALOGUE</h2>
          <button className="close-btn" aria-label="Close menu" onClick={closeSidebar}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <ul className="sidebar-nav-list">
          {['CULTURE & HERITAGE', 'PRODUCTS', 'LEADERSHIP', 'SECURITY', 'IT'].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="sidebar-link"
                onClick={(e) => {
                  e.preventDefault()
                  if (item === 'LEADERSHIP') {
                    closeSidebar()
                    navigate('/staff-training')
                  }
                }}
              >
                <span>{item}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Navbar
