import BandsInfo from "../data/BandsInfo"
import { useParams, useNavigate } from "react-router-dom"
import './BandPage.css'

export default function BandPage() {
    const { id } = useParams()
    const band = BandsInfo.find((b) => b.id === id)
    const navigate = useNavigate();

    if (!band){
        return(
            <h2>Sorry! Band not found :/ </h2>
        )
    }
    else{
        return(
            <div>
                <button className="back-button" onClick={() => navigate(-1)}>
                    <svg className="arrow-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="arrow-icon"
                        >
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                    Back
                </button>

                <div className="band">
                    
                    <img src={band.image} alt="Band photo" style={{ width: '300px' }}></img>
                    <div className="description">
                        <h2> {band.name} </h2>
                        <p>{band.description}</p>
                    </div>
                    <a href={band.instagram} target='_blank' className="link-ig">
                        <h2>Support The Band</h2>
                    </a>
                </div>

                
            </div>
        )

    }
}
    