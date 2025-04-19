"use client"

import BandsInfo from "../data/BandsInfo"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Instagram } from "lucide-react"
import "../index.css"

export default function BandPage() {
  const { id } = useParams()
  const band = BandsInfo.find((b) => b.id === id)

  if (!band) {
    return (
      <div className="error-container">
        <h2>Sorry! Band not found :/ </h2>
        <Link to="/" className="back-button">
          <ArrowLeft className="icon" />
          Back to Timeline
        </Link>
      </div>
    )
  }

  return (
    <div className="band-page">
      <Link to="/" className="back-button">
        <ArrowLeft className="icon" />
        Back to Timeline
      </Link>

      <div className="band-card">
        <div className="band-header">
          <h2 className="band-name">{band.name}</h2>
          <span className="band-time">{band.time}</span>
        </div>

        <div className="band-content">
          <div className="image-container">
            <img src={band.image || "/placeholder.svg"} alt={`${band.name} band`} className="band-image" />
            <div className="image-overlay"></div>
          </div>

          <div className="band-description">
            <p>{band.description || "No description available."}</p>
          </div>
        </div>

        <div className="band-socials">
          <h3>Support The Band</h3>
          <div className="social-links">
            <a href={band.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
              <Instagram className="social-icon" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
