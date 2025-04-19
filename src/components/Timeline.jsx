import { Link } from "react-router-dom";
import BandsInfo from "../data/BandsInfo"
import "./Timeline.css"



export default function Timeline(){
    return(
        <div className="contain">
            <div className="scroll-view">
                <img
                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/jKP1lQciWn/czex1cz5_expires_30_days.png"} 
                className="image"
                />

                <span   span className="text_title" >
                    {"Timeline"}
                </span>
                <ul>
                    {BandsInfo.map((band) => (
                        <div className="row_view">
                            <span className="text" >
                                {band.time}
                            </span>
                            <div className="box"></div>
                            <Link className="text2" to={`/band/${band.id}`}>{band.name}</Link>

                            <img
                                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/jKP1lQciWn/gj4y92kq_expires_30_days.png"} 
                                className="image_line"
                            />
                        </div>
                    ))}

                </ul>

                

                <span className="text_title" >
                    {"Meet Our Sponsors"}
                </span>

                <div className="sponso_logos">
                <img
                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/jKP1lQciWn/bs7tx8vx_expires_30_days.png"} 
                    className="image3"
                />
                <img
                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/jKP1lQciWn/3ca4mkk2_expires_30_days.png"} 
                    className="image4"
                />
            </div>

            </div>
            
        </div>
    )
}