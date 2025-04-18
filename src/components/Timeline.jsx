import { Link } from "react-router-dom";
import BandsInfo from "../data/BandsInfo"



export default function Timeline(){
    return(
        <div>
            <h1> Jam Session Timeline</h1>
            <ul>
                {BandsInfo.map((band) => (
                    <li key={band.id}>
                        {band.time} - <Link to={`/band/${band.id}`}>{band.name}</Link>
                    </li>
                ))}

            </ul>
        </div>
    )
}