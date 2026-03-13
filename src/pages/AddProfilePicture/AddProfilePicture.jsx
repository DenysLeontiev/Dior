import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './AddProfilePicture.css'

function AddProfilePicture() {
  const navigate = useNavigate()
  const fileInputRef = useRef(null)
  const placeholderRef = useRef(null)

  const openFilePicker = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (ev) => {
      const placeholder = placeholderRef.current
      placeholder.innerHTML = ''
      const img = document.createElement('img')
      img.src = ev.target.result
      img.alt = 'Profile picture preview'
      img.className = 'avatar-preview'
      placeholder.appendChild(img)
    }
    reader.readAsDataURL(file)
  }

  const handleLater = () => {
    navigate('/home')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      openFilePicker()
    }
  }

  return (
    <div className="profile-wrapper">
      <header className="profile-header">
        <img src={`${import.meta.env.BASE_URL}images/DnI-192x192.png`} alt="Dior &amp; I" className="logo" />
      </header>

      <main className="profile-main">
        <h1 className="welcome-title">Welcome!</h1>
        <p className="subtitle">Do you want to add or edit your profile picture?</p>

        <div
          className="avatar-container"
          role="button"
          aria-label="Upload profile picture"
          tabIndex={0}
          onClick={openFilePicker}
          onKeyDown={handleKeyDown}
        >
          <div className="avatar-placeholder" ref={placeholderRef}>
            <img src={`${import.meta.env.BASE_URL}images/user-silhouette.svg`} alt="" className="avatar-icon" aria-hidden="true" />
          </div>
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            hidden
            onChange={handleFileChange}
          />
        </div>

        <div className="action-container">
          <button className="btn select-btn" onClick={openFilePicker}>Select a picture</button>
          <button className="btn later-btn" onClick={handleLater}>Later</button>
        </div>
      </main>
    </div>
  )
}

export default AddProfilePicture
