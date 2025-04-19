import { Link } from "react-router-dom"
import BandsInfo from "../data/BandsInfo"
import "../index.css"

export default function Timeline() {
  return (
    <div className="timeline-container">
      <div className="jam-session-header">
        <h1 className="title">JAM SESSION</h1>
        <div className="subtitle">WHAT IS?</div>
      </div>

      <div className="timeline">
        {BandsInfo.map((band) => (
          <Link to={`/band/${band.id}`} key={band.id} className="timeline-item">
            <div className="time-slot">{band.time}</div>
            <div className="band-slot">
              <span className="band-name">{band.name}</span>
              <div className="flame-divider"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
