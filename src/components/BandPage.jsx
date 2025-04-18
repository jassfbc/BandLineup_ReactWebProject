import BandsInfo from "../data/BandsInfo"
import { useParams } from "react-router-dom"

export default function BandPage() {
    const { id } = useParams()
    const band = BandsInfo.find((b) => b.id === id)

    if (!band){
        return(
            <h2>Sorry! Band not found :/ </h2>
        )
    }
    else{
        return(
            <div>
                <h2> {band.name} </h2>
                <img src={band.image} alt="Band photo" style={{ width: '300px' }}></img>
                <p>{band.description}</p>
                <h3>Support The Band</h3>
                <ul>
                    <a href={band.socials.instagram} target='_blank'>Intagram</a>
                </ul>
            </div>
        )

    }
}
    