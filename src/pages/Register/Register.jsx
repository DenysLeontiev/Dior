import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'

function Register() {
  const navigate = useNavigate()
  const [role, setRole] = useState('user')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [language, setLanguage] = useState('en')
  const [error, setError] = useState('')

  const handleValidate = () => {
    if (!password) {
      setError('Invalid credentials, please try again')
      return
    }
    setError('')
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

      <img style={{ width: '100px', marginBottom: '10px' }} src={`${import.meta.env.BASE_URL}images/DnI-192x192.png`} alt="Dior &amp; I" className="logo" />

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
            className="register-input"
            placeholder={role === 'employee' ? 'Professional email' : 'lilismith@gmail.com'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
          />
        </div>

        {/* Password input */}
        <div className="register-field-container">
          <div className="register-password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              className="register-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
            />
            <button
              type="button"
              className="register-eye-btn"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                /* Eye open */
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              ) : (
                /* Eye closed */
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Forgot password */}
        <div className="register-forgot-container">
          <a href="#" className="register-forgot-link" onClick={(e) => e.preventDefault()}>
            I forgot my password
          </a>
        </div>

        {/* Error message */}
        {error && (
          <p className="register-error">{error}</p>
        )}

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
