import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './TermsOfUse.css'

function TermsOfUse() {
  const navigate = useNavigate()
  const [activeItems, setActiveItems] = useState([0])
  const contentRefs = useRef([])

  useEffect(() => {
    activeItems.forEach((idx) => {
      const el = contentRefs.current[idx]
      if (el) {
        el.style.maxHeight = el.scrollHeight + 'px'
      }
    })
  }, [])

  const toggleAccordion = (index) => {
    setActiveItems((prev) => {
      const el = contentRefs.current[index]
      if (prev.includes(index)) {
        if (el) el.style.maxHeight = null
        return prev.filter((i) => i !== index)
      } else {
        if (el) el.style.maxHeight = el.scrollHeight + 'px'
        return [...prev, index]
      }
    })
  }

  const handleValidate = () => {
    navigate('/add-profile-picture')
  }

  const accordionData = [
    {
      title: 'CONTENT 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci.'
    },
    {
      title: 'CONTENT 2',
      content: 'Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.'
    }
  ]

  return (
    <div className="terms-wrapper">
      <header className="terms-header">
        <img src={`${import.meta.env.BASE_URL}images/DnI-192x192.png`} alt="Dior &amp; I" className="logo" />
      </header>

      <main className="terms-main">
        <h1 className="page-title">TERMS OF USE</h1>

        <div className="accordion">
          {accordionData.map((item, index) => (
            <div className={`accordion-item ${activeItems.includes(index) ? 'active' : ''}`} key={index}>
              <button className="accordion-header" onClick={() => toggleAccordion(index)}>
                <span>{item.title}</span>
                <img
                  src={`${import.meta.env.BASE_URL}images/triangleGreyUp.png`}
                  alt="collapse"
                  className="icon-up"
                  style={{ display: activeItems.includes(index) ? 'block' : 'none' }}
                />
                <img
                  src={`${import.meta.env.BASE_URL}images/triangleGreyDown.png`}
                  alt="expand"
                  className="icon-down"
                  style={{ display: activeItems.includes(index) ? 'none' : 'block' }}
                />
              </button>
              <div className="accordion-content" ref={(el) => (contentRefs.current[index] = el)}>
                <div className="accordion-content-inner">
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="confirmations">
          <label className="checkbox-container">
            <input type="checkbox" className="checkbox-input" />
            <span className="custom-checkbox"></span>
            Confirmation 1
          </label>
          <label className="checkbox-container">
            <input type="checkbox" className="checkbox-input" />
            <span className="custom-checkbox"></span>
            Confirmation 2
          </label>
        </div>

        <div className="action-container">
          <button className="btn validate-btn" onClick={handleValidate}>Validate</button>
        </div>
      </main>
    </div>
  )
}

export default TermsOfUse
