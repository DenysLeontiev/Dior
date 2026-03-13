import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'

function Register() {
  const navigate = useNavigate()
  const [role, setRole] = useState('user')
  const [email, setEmail] = useState('')
  const [language, setLanguage] = useState('en')

  const handleValidate = () => {
    navigate('/terms')
  }

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className="register-wrapper">
      <button className="back-btn" onClick={handleBack} aria-label="Go back">
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 1L1 7L7 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back
      </button>

      <header className="register-header">
        <img
          src={`${import.meta.env.BASE_URL}images/DnI-192x192.png`}
          alt="Dior & I"
          className="register-logo"
        />
      </header>

      <main className="register-main">
        {/* Role selector */}
        <div className="role-selector">
          <button
            className={`role-btn ${role === 'user' ? 'active' : ''}`}
            onClick={() => setRole('user')}
          >
            User
          </button>
          <button
            className={`role-btn ${role === 'employee' ? 'active' : ''}`}
            onClick={() => setRole('employee')}
          >
            Employee
          </button>
        </div>

        {/* Language selector */}
        <div className="register-field-container">
          <div className="language-dropdown-container">
            <select
              className="language-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              aria-label="Select language"
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>
            <svg
              className="dropdown-icon"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M1 1L6 6L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Email input */}
        <div className="register-field-container">
          <input
            type="email"
            className="email-input"
            placeholder={role === 'employee' ? 'Professional email' : 'lilismith@gmail.com'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
          />
        </div>

        {/* Validate button */}
        <div className="register-action">
          <button className="btn validate-btn" onClick={handleValidate}>
            Validate
          </button>
        </div>
      </main>
    </div>
  )
}

export default Register
