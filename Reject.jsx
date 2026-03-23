import "./Reject.css"
import { FaRegUserCircle } from "react-icons/fa";
import im1 from "./cir1.webp"

function Reject(){
    return(
        <div className="Reject">
            <div className="Header">
                <div className="Text"><p>Producer Dashboard</p><a>Welcome,Produccer!</a></div>
                <div className="icon"><p><FaRegUserCircle /></p></div>
            </div> 
            <div className="Second"><button>Pending(4)</button><button id="Approved1">Approved(6)</button><button id="Reject1">Rejected(1)</button></div>
            <div className="Middal">
                <div className="RejectMoviesheader"><p>REJECTED MOVIES</p>
                <div className="line"></div></div>
                <div className="imagesummary">
                    <div className="image"><img src={im1}/></div>
                    <div className="movie"><p>Animal <div className="line1"></div></p>
                      <a>Hindi</a><p id ="date">1/12/2023<p id="reson">Reson content review pending clarification</p></p></div>
                    
                    
                </div>
                
                
               
            </div>
            
            <div className="Last"><button>+</button></div>
        </div>
    )
}
export default Reject;