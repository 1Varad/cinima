import "./Pending.css"
import { FaRegUserCircle } from "react-icons/fa";
import imP1 from "./ci1.jpg"
import imP2 from "./ci2.jpg"
import imP3 from "./ci3.webp"
import imP4 from "./ci4.jpg"


function Pending(){
    return(
        <div className="Pending">
            <div className="Headerp">
                <div className="Textp"><p>Producer Dashboard</p><a>Welcome,Produccer!</a></div>
                <div className="iconp"><p><FaRegUserCircle /></p></div>
            </div> 
            <div className="Secondp"><button>Pending(4)</button><button >Approved(6)</button><button >Rejected(1)</button></div>
            <div className="Middalp">
                <div className="RejectMoviesheaderp"><p>REJECTED MOVIES</p>
                <div className="linep"></div></div>
                <div className="imagesummaryp">
                    <div className="imagep">
                        <div className="image1p"><img src={imP1}/></div>
                        <div className="movie1p"><p>Inception <div className="line1p"></div></p>
                        <a>English</a><p id ="date1p">16/077/2010</p></div>
                    </div>
                    <div className="imagep">
                        <div className="image1p"><img src={imP2}/></div>
                        <div className="movie1p"><p>Leo <div className="line1p"></div></p>
                        <a>Tamil</a><p id ="date1p">19/10/2023</p></div>
                    </div>
                    <div className="imagep">
                        <div className="image1p"><img src={imP3}/></div>
                        <div className="movie1p"><p>Game Changer  <div className="line1p"></div></p>
                        <a>Telugu</a><p id ="date1p">10/01/2024</p></div>
                    </div>
                    <div className="imagep">
                        <div className="image1p"><img src={imP4}/></div>
                        <div className="movie1p"><p>KGF Chapter 3 <div className="line1p"></div></p>
                        <a>Kannada</a><p id ="date1p">30/09/2022</p></div>
                    </div>
                   
                </div>
                
                
               
            </div>
            
            <div className="Lastp"><button>+</button></div>
        </div>
    )
}
export default Pending;
