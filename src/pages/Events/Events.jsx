import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getDiorImage } from '../../utils/getDiorImage'
import './Events.css'

function Events() {
  const [activeDate, setActiveDate] = useState(0)
  const [enrolled, setEnrolled] = useState(false)

  const calendarDates = [
    { date: '7', day: 'TUE', month: 'NOV 20' },
    { date: '8', day: 'WED', month: 'NOV 20' },
    { date: '9', day: 'THU', month: 'NOV 20' },
    { date: '10', day: 'FRI', month: 'NOV 20' },
    { date: '11', day: 'SAT', month: 'NOV 20' },
    { date: '12', day: 'SUN', month: 'NOV 20' },
    { date: '13', day: 'MON', month: 'NOV 20' },
    { date: '14', day: 'TUE', month: 'NOV 20', disabled: true },
    { date: '15', day: 'WED', month: 'NOV 20' },
    { date: '16', day: 'THU', month: 'NOV 20' }
  ]

  const handleCalendarClick = (index) => {
    if (calendarDates[index].disabled) return
    setActiveDate(index)
  }

  const handleEnroll = () => {
    setEnrolled(true)
  }

  return (
    <main className="events-main">
      {/* Header section */}
      <div className="events-header">
        <Link to="/home" className="back-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </Link>
      </div>

      {/* Hero/Details Section */}
      <section className="event-hero">
        <div className="event-image-container">
          <img src="/desiredImages/dior_pink_stand.png" alt="Event Image" className="event-img" />
        </div>
        <div className="event-info">
          <h1 className="event-title">Digital in Asia: Livestreaming</h1>
          <p className="event-desc">
            Discover the magic of Granville, the secret place where Christian Dior's passion for flower started.
          </p>
        </div>
      </section>

      {/* Calendar Strip Section */}
      <section className="calendar-section">
        <div className="calendar-scroll">
          {calendarDates.map((cal, i) => (
            <div
              key={i}
              className={`cal-item ${activeDate === i ? 'active' : ''} ${cal.disabled ? 'disabled' : ''}`}
              onClick={() => handleCalendarClick(i)}
            >
              <span className="cal-date">{cal.date}</span>
              <span className="cal-day">{cal.day}</span>
              <span className="cal-month">{cal.month}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Event Specifics Section */}
      <section className="event-details">
        <div className="details-top">
          <p className="detail-text">Professeur : Aurore M.</p>
          <p className="detail-text right-align">10:00 AM – 12:00 AM UTC +1</p>
        </div>

        <div className="details-body">
          <p className="detail-text">
            This international negotiation class in English will be accessible via zoom:<br />
            <a href="#" className="zoom-link">https://fierojgoiehrgergih=fkgr</a>
          </p>

          <p className="detail-text">
            Meeting ID: <strong>903773</strong><br />
            Passcode: <strong>8262</strong>
          </p>

          <p className="detail-text">
            Places restantes : 5<br />
            Il reste 2 jours pour s'inscrire
          </p>
        </div>

        <div className="enroll-container">
          <button
            className="btn enroll-btn"
            onClick={handleEnroll}
            style={enrolled ? { backgroundColor: '#C4759B', color: '#fff', pointerEvents: 'none' } : {}}
          >
            {enrolled ? 'ENROLLED' : 'ENROLL'}
          </button>
        </div>
      </section>
    </main>
  )
}

export default Events
