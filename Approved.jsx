import "./Approved.css"
import { FaRegUserCircle } from "react-icons/fa";
import im2 from "./cia1.webp"
import im3 from "./cia2.jpg"
import im4 from "./cia3.jpg"
import im5 from "./cia4.avif"
import im6 from "./cia5.webp"
import im7 from "./cia6.jpg"

function Approved(){
    return(
        <div className="Reject">
            <div className="Header">
                <div className="Text"><p>Producer Dashboard</p><a>Welcome,Produccer!</a></div>
                <div className="icon"><p><FaRegUserCircle /></p></div>
            </div> 
            <div className="Second1"><button>Pending(4)</button><button >Approved(6)</button><button >Rejected(1)</button></div>
            <div className="Middal1">
                <div className="RejectMoviesheader1"><p>REJECTED MOVIES</p>
                <div className="line"></div></div>
                <div className="imagesummary1">
                    <div className="image1">
                        <div className="image11"><img src={im2}/></div>
                        <div className="movie11"><p>Kantare <div className="line1"></div></p>
                        <a>Kannada</a><p id ="date11">30/09/2022</p></div>
                    </div>
                    <div className="image1">
                        <div className="image11"><img src={im3}/></div>
                        <div className="movie11"><p>Salaar <div className="line1"></div></p>
                        <a>Telugu</a><p id ="date11">22/12/2023</p></div>
                    </div>
                    <div className="image1">
                        <div className="image11"><img src={im4}/></div>
                        <div className="movie11"><p>Pushpa 2:The Rule <div className="line1"></div></p>
                        <a>Telugu</a><p id ="date11">1/12/2023</p></div>
                    </div>
                    <div className="image1">
                        <div className="image11"><img src={im5}/></div>
                        <div className="movie11"><p>The Dark Knight <div className="line1"></div></p>
                        <a>English</a><p id ="date11">18/07/2008</p></div>
                    </div>
                    <div className="image1">
                        <div className="image11"><img src={im6}/></div>
                        <div className="movie11"><p>Intersteller <div className="line1"></div></p>
                        <a>English</a><p id ="date11">07/11/2024</p></div>
                    </div>
                    <div className="image1">
                        <div className="image11"><img src={im7}/></div>
                        <div className="movie11"><p>RRR <div className="line1"></div></p>
                        <a>Telugu</a><p id ="date11">25/03/2022</p></div>
                    </div>
                </div>
                
                
               
            </div>
            
            <div className="Last1"><button>+</button></div>
        </div>
    )
}
export default Approved;
