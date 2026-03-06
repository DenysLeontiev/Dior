import { useState } from 'react'
import './Home.css'

function Home() {
  const [collapsedSections, setCollapsedSections] = useState({})
  const [activeDot, setActiveDot] = useState(0)

  const toggleSection = (index) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <main className="dashboard-main">
      {/* Hero Carousel */}
      <section className="hero-section">
        <div className="hero-carousel">
          <div className="hero-slide active">
            <div className="hero-image-container">
              <img src="https://picsum.photos/800/600?random=1" alt="Featured article" />
            </div>
            <div className="hero-content">
              <h1 className="hero-title">Lorem Ipsum Dior</h1>
              <p className="hero-description">
                Discover architecto beatae vitae dicta sunt explicabo voluptatem quia...
              </p>

              <a href="#" className="hero-link">
                <div className="icon-circle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
                <span className="hero-link-text">Open the news</span>
              </a>

              <div className="hero-meta">
                <div className="hero-dots">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <span
                      key={i}
                      className={`dot ${activeDot === i ? 'active' : ''}`}
                      onClick={() => setActiveDot(i)}
                    ></span>
                  ))}
                </div>
                <div className="hero-time">
                  <span>3 min</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
              </div>
            </div>
            <button className="nav-arrow prev" aria-label="Previous slide">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <div className="more-news-container">
          <button className="btn more-news-btn">More news</button>
        </div>
      </section>

      {/* Pending Learnings */}
      <section className="carousel-section">
        <div className="section-header">
          <h2 className="section-title">Pending Learnings</h2>
          <button
            className="collapse-btn"
            aria-label="Toggle section"
            onClick={() => toggleSection(0)}
            style={{ transform: collapsedSections[0] ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>

        <div className="cards-carousel" style={{ display: collapsedSections[0] ? 'none' : 'block' }}>
          <div className="cards-container">
            {[
              { img: 2, title: 'Disabilities at Parfums Christian Dior', progress: 70 },
              { img: 3, title: 'Welcome at Parfums Christian Dior', progress: 30 },
              { img: 4, title: 'All about Parfums Christian Dior', progress: 15 }
            ].map((card, i) => (
              <div className="card" key={i}>
                <div className="card-image-wrapper">
                  <img src={`https://picsum.photos/400/300?random=${card.img}`} alt={card.title} />
                </div>
                <div className="card-progress-bar">
                  <div className="card-progress-fill" style={{ width: `${card.progress}%` }}></div>
                </div>
                <h3 className="card-title">{card.title}</h3>
                <div className="card-info">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <button className="nav-arrow next side-arrow" aria-label="Next cards">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </section>

      {/* My Mandatory */}
      <section className="carousel-section">
        <div className="section-header">
          <h2 className="section-title">My Mandatory</h2>
          <button
            className="collapse-btn"
            aria-label="Toggle section"
            onClick={() => toggleSection(1)}
            style={{ transform: collapsedSections[1] ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>

        <div className="cards-carousel" style={{ display: collapsedSections[1] ? 'none' : 'block' }}>
          <div className="cards-container">
            {[5, 6, 7].map((num) => (
              <div className="card" key={num}>
                <div className="card-image-wrapper">
                  <img src={`https://picsum.photos/400/300?random=${num}`} alt="Course thumbnail" />
                </div>
              </div>
            ))}
          </div>

          <button className="nav-arrow next side-arrow" aria-label="Next cards">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </section>
    </main>
  )
}

export default Home
