import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
  const navigate = useNavigate()

  const handleEnter = () => {
    navigate('/register')
  }

  return (
    <div className="login-wrapper">
      <header className="login-header">
        <img src={`${import.meta.env.BASE_URL}images/dior.png`} alt="Dior &amp; I" className="logo" />

        <div className="language-dropdown-container">
          <select className="language-select" aria-label="Select language">
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
          <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M1 1L6 6L11 1" stroke="white" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" />
          </svg>
        </div>
      </header>

      <main className="login-main">
        <section className="login-option">
          <h2 className="option-title">I have a professional email (SSO)</h2>
          <button className="btn enter-btn" onClick={handleEnter}>Enter</button>
        </section>

        <section className="login-option">
          <h2 className="option-title">I don't have a professional email</h2>
          <button className="btn enter-btn" onClick={handleEnter}>Enter</button>
        </section>
      </main>
    </div>
  )
}

export default Login
