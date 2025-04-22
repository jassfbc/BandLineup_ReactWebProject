import { Link } from "react-router-dom";
import BandsInfo from "../data/BandsInfo"
import './Timeline.css'

const sortedBands = [...BandsInfo].sort((a, b) => {
    const timeA = new Date(`1970-01-01 ${a.time}`);
    const timeB = new Date(`1970-01-01 ${b.time}`);
    return timeA - timeB;
  });


export default function Timeline(){
    return(
        <div className="contain">
            <div className="timeline-list" >
                
                <h2>Timeline</h2>
                <div >
                    {sortedBands.map((band) => (
                        <Link className="band-name" to={`/band/${band.id}`}>
                            <div className="band-info">
                                <span className="time-info" >
                                    {band.time}
                                </span>
                                <Link className="band-name" to={`/band/${band.id}`}>{band.name}</Link>
                            </div>

                            <hr />
                        </Link>
                    ))}

                </div>

                
                <div>
                <h2 className="sponsors-title">Meet Our Sponsors</h2>

                <div className="sponso_logos">
                    <a href="https://flayes.app/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/images/flayes logo.png"
                            className="img1"
                            alt="Flayes logo"
                        />
                    </a>

                    <img
                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/jKP1lQciWn/3ca4mkk2_expires_30_days.png"} 
                    />
                    </div>
                </div>
                

            </div>
            
        </div>
    )
}