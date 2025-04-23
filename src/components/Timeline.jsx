"use client"

import { Link } from "react-router-dom"
import { useState } from "react"
import BandsInfo from "../data/BandsInfo"
import "./Timeline.css"

export default function Timeline() {
  const sortedBands = [...BandsInfo].sort((a, b) => {
    const timeA = new Date(`1970-01-01 ${a.time}`)
    const timeB = new Date(`1970-01-01 ${b.time}`)
    return timeA - timeB
  })

  const [hoveredBand, setHoveredBand] = useState(null)

  return (
    <div className="timeline-container">
      <div className="timeline-content">

        <div className="timeline-bands">
          {sortedBands.map((band, index) => (
            <Link
              key={band.id}
              to={`/band/${band.id}`}
              className="band-item"
              onMouseEnter={() => setHoveredBand(band.id)}
              onMouseLeave={() => setHoveredBand(null)}
            >
              <div className="time-marker">
                <div className="time-line"></div>
                <div className="time-dot"></div>
              </div>

              <div className={`band-card ${hoveredBand === band.id ? "hovered" : ""}`}>
                <span className="band-time">{band.time}</span>
                <h3 className="band-name">{band.name}</h3>
                <div className="band-underline"></div>
              </div>
            </Link>
          ))}
        </div>

        <div className="sponsors-section">
          <h2 className="sponsors-title">MEET OUR SPONSORS</h2>
          <div className="sponsor-logos">
          <a href="https://www.instagram.com/pixel_service_hosni/" target="_blank" rel="noopener noreferrer" className="sponsor-logo">
              <img src="/images/pixel_print.png" alt="Pixel Print Logo" />
            </a>
            
            <a href="https://digitalirisprod.com/" target="_blank" rel="noopener noreferrer" className="sponsor-logo">
              <img src="/images/digital_iris.png" alt="Digital Iris logo" />
            </a>
            <a href="https://flayes.app/" target="_blank" rel="noopener noreferrer" className="sponsor-logo">
              <img src="/images/flayes.png" alt="Flayes Logo" />
            </a>
            
          </div>
        </div>
      </div>
    </div>
  )
}
