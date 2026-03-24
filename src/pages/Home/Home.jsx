import { useRef } from 'react'
import { useState } from 'react'
import { getDiorImage } from '../../utils/getDiorImage'
import './Home.css'

/* ─── Shared Section Component ─────────────────────────── */
function CarouselSection({ index, title, collapsedSections, toggleSection, children }) {
  return (
    <section className="carousel-section">
      <div className="section-header" onClick={() => toggleSection(index)} style={{ cursor: 'pointer' }}>
        <h2 className="section-title">{title}</h2>
        <button
          className="collapse-btn"
          aria-label="Toggle section"
          style={{ transform: collapsedSections[index] ? 'rotate(180deg)' : 'rotate(0deg)', pointerEvents: 'none' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      </div>
      {!collapsedSections[index] && (
        <div className="cards-carousel">
          {children}
        </div>
      )}
    </section>
  )
}

/* ─── Scrollable Row with Arrow ─────────────────────────── */
function ScrollRow({ children, className = '' }) {
  const rowRef = useRef(null)

  const scrollNext = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: rowRef.current.offsetWidth * 0.8, behavior: 'smooth' })
    }
  }

  return (
    <div style={{ position: 'relative' }}>
      <div ref={rowRef} className={`cards-container ${className}`}>
        {children}
      </div>
      <button className="nav-arrow next side-arrow" aria-label="Next cards" onClick={scrollNext}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  )
}

/* ─── Info Icon ─────────────────────────────────────────── */
function InfoIcon() {
  return (
    <div className="card-info">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    </div>
  )
}

/* ─── Main Component ─────────────────────────────────────── */
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

      {/* ─── Hero Carousel ─────────────────────────────────── */}
      <section className="hero-section">
        <div className="hero-carousel">
          <div className="hero-slide active">
            <div className="hero-image-container">
              <img src="/desiredImages/dior_pink_stand.png" alt="Featured article" />
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

      {/* ─── 1. Pending Learnings ──────────────────────────── */}
      <CarouselSection index={0} title="Pending Learnings" collapsedSections={collapsedSections} toggleSection={toggleSection}>
        <ScrollRow>
          {[
            { img: 2, title: 'Disabilities at Parfums Christian Dior', progress: 70 },
            { img: 3, title: 'Welcome at Parfums Christian Dior', progress: 30 },
            { img: 4, title: 'All about Parfums Christian Dior', progress: 15 },
            { img: 24, title: 'Brand Heritage Module', progress: 50 }
          ].map((card, i) => (
            <div className="card" key={i}>
              <div className="card-image-wrapper">
                <img src={getDiorImage(card.img)} alt={card.title} />
              </div>
              <div className="card-progress-bar">
                <div className="card-progress-fill" style={{ width: `${card.progress}%` }}></div>
              </div>
              <h3 className="card-title">{card.title}</h3>
              <InfoIcon />
            </div>
          ))}
        </ScrollRow>
      </CarouselSection>

      {/* ─── 2. My Mandatory ───────────────────────────────── */}
      <CarouselSection index={1} title="My Mandatory" collapsedSections={collapsedSections} toggleSection={toggleSection}>
        <ScrollRow>
          {[
            { imgDest: '/desiredImages/red_lips_kiss.png', title: 'The secrets of communications' },
            { imgDest: '/desiredImages/guy_with_beard_working.png', title: 'E-Learning remote work' },
            { imgDest: '/desiredImages/nature.png', title: 'Caring for the environment at Parfums Christian Dior' },
          ].map((card, i) => (
            <div className="card" key={i}>
              <div className="card-image-wrapper">
                <img src={card.imgDest} alt={card.title} />
              </div>
              <h3 className="card-title">{card.title}</h3>
              <InfoIcon />
            </div>
          ))}
        </ScrollRow>
      </CarouselSection>

      {/* ─── 3. My Learning Journey ────────────────────────── */}
      <CarouselSection index={2} title="My Learning Journey" collapsedSections={collapsedSections} toggleSection={toggleSection}>
        <ScrollRow>
          {[
            { imgDest: "/desiredImages/monitor_with_alarm.png", title: 'ONBOARDING PATH', progress: 40 },
            { imgDest: "/desiredImages/girl_staring_at_smartphone.png", title: 'DIGITAL AT PCD PATH', progress: 65 },
          ].map((card, i) => (
            <div className="card card--journey" key={i}>
              <div className="card-image-wrapper card-image-wrapper--journey">
                <img src={card.imgDest} alt={card.title} />
                <div className="journey-progress-bar">
                  <div className="journey-progress-fill" style={{ width: `${card.progress}%` }}></div>
                </div>
              </div>
              <h3 className="card-title card-title--journey">{card.title}</h3>
            </div>
          ))}
        </ScrollRow>
      </CarouselSection>

      {/* ─── 4. My Recommended Events ──────────────────────── */}
      <CarouselSection index={3} title="My Recommended Events" collapsedSections={collapsedSections} toggleSection={toggleSection}>
        <ScrollRow>
          {[
            { imgDest: '/desiredImages/dior_pink_stand.png', title: 'Dior Heritage Tour', date: 'Mar 18', location: 'Paris' },
            { imgDest: '/desiredImages/dior_petals.png', title: 'Beauty Masterclass', date: 'Mar 22', location: 'Online' },
            { imgDest: '/desiredImages/girl_looking_at_the_phone.png', title: 'Design Workshop', date: 'Apr 1', location: 'Milan' },

          ].map((card, i) => (
            <div className="card" key={i}>
              <div className="card-image-wrapper">
                <img src={card.imgDest} alt={card.title} />
              </div>
              <h3 className="card-title">{card.title}</h3>
              <div className="card-event-meta">
                <span className="event-date">{card.date}</span>
                <span className="event-sep">·</span>
                <span className="event-location">{card.location}</span>
              </div>
              <InfoIcon />
            </div>
          ))}
        </ScrollRow>
      </CarouselSection>

      {/* ─── 5. You Could Be Interested In ────────────────── */}
      <CarouselSection index={4} title="You Could Be Interested In" collapsedSections={collapsedSections} toggleSection={toggleSection}>
        <ScrollRow>
          {/* Personalize card */}
          <div className="card card--personalize">
            <div className="personalize-inner">
              <div className="personalize-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19" stroke="#000"></line>
                  <line x1="5" y1="12" x2="19" y2="12" stroke="#000"></line>
                </svg>
              </div>
              <span className="personalize-label">Personalize</span>
            </div>
          </div>
          {[14, 15, 16].map((num) => (
            <div className="card" key={num}>
              <div className="card-image-wrapper interested-placeholder-inner">
                <img src={getDiorImage(num)} alt="Featured article" />

              </div>
            </div>
          ))}
        </ScrollRow>
      </CarouselSection>

      {/* ─── 6. Develop Your Competencies ─────────────────── */}
      <CarouselSection index={5} title="Develop Your Competencies" collapsedSections={collapsedSections} toggleSection={toggleSection}>
        <ScrollRow>
          {[
            { img: 17, title: 'Leadership & Management', tag: 'COURSE' },
            { img: 18, title: 'Creative Vision & Brand', tag: 'PATH' },
            { img: 28, title: 'Digital Transformation', tag: 'COURSE' },
            { img: 29, title: 'Client Excellence', tag: 'PATH' }
          ].map((card, i) => (
            <div className="card" key={i}>
              <div className="card-image-wrapper">
                <img src={getDiorImage(card.img)} alt={card.title} />
                <span className="card-tag">{card.tag}</span>
              </div>
              <h3 className="card-title">{card.title}</h3>
              <InfoIcon />
            </div>
          ))}
        </ScrollRow>
      </CarouselSection>

      {/* ─── 7. Downloads ──────────────────────────────────── */}
      <CarouselSection index={6} title="Downloads" collapsedSections={collapsedSections} toggleSection={toggleSection}>
        <ScrollRow>
          {[
            { imgDest: '/desiredImages/la_colle.png', title: 'La Colle Noire' },
            { imgDest: '/desiredImages/dior_hall.png', title: 'Dior In Shangaï' },
            { imgDest: '/desiredImages/diorsnow.png', title: 'In love with Dior' },
          ].map((card, i) => (
            <div className="card" key={i}>
              <div className="card-image-wrapper">
                <img src={card.imgDest} alt={card.title} />
              </div>
              <h3 className="card-title">{card.title}</h3>
              <InfoIcon />
            </div>
          ))}
        </ScrollRow>
      </CarouselSection>

      {/* ─── 8. TOP 10 ─────────────────────────────────────── */}
      <CarouselSection index={7} title="TOP 10" collapsedSections={collapsedSections} toggleSection={toggleSection}>
        <ScrollRow>
          {[
            { imgDest: "/desiredImages/hand_writing.png", title: 'ONBOARDING PATH', rank: 1, progress: 40 },
            { imgDest: "/desiredImages/pink_blue_eyes.png", title: 'DIGITAL AT PCD PATH', rank: 2, progress: 65 },
            { imgDest: "/desiredImages/dior_petals.png", title: 'DIGITAL AT PCD PATH', rank: 3, progress: 65 },
          ].map((card, i) => (
            <div className={`card card--top10 ${card.dimmed ? 'card--dimmed' : ''}`} key={i}>
              <div className="card-image-wrapper top10-image-wrapper">
                <img src={card.imgDest} alt={card.title} />
                <span className="top10-rank">{card.rank}.</span>
              </div>
              <h3 className="card-title card-title--top10">{card.title}</h3>
            </div>
          ))}
        </ScrollRow>
      </CarouselSection>

    </main>
  )
}

export default Home
