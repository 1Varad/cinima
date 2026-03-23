import "./Rejectreson.css"
import { BsDot } from "react-icons/bs";

function  Rejectreson(){
    return(
    
        <div className="Rejectreson">
          
            <div className="Edit"><p>Edit & Resubmit Movie</p></div>
            <div className="ButtonX"><button>X</button></div>
            <div className="Reson"><p>Reject Reson:content review pending clarificaton</p></div>
            <div className="Titler"><a><BsDot /></a><p>TITLE</p></div>
            <div className=" TTextboxr"><input type="text" id="text"   value="Animal"/></div>
            <div className="Posterr"><a><BsDot /></a><p>POSTER IMAGE</p></div>
            <div className="filear"><input type="file" accept="image"/></div>
             <div className="imageexit"><p>Existing image will be used if not chsnged</p></div>
            <div className="Releasr"><a><BsDot /></a><p>REALESE DATE</p></div>
            <div className="Dater"><input type="date" value="2023-12-01"/></div>
            <div className="Languager"><a><BsDot /></a><p>LANGUAGE</p></div>
            <div className=" LTextboxr"><input type="text" id="text" value={"Hindi"} /></div>
            <div className="Descraptionr"><a><BsDot /></a><p>DESCRAPTION</p></div>
            <div className=" DTextboxr"><textarea rows="4" value="A son’s violent path shaped by a troubled father."></textarea></div>
            <div className="Genresr"><a><BsDot /></a><p>Genres (comma separated)</p></div>
            <div className=" GTextboxr"><input type="text" id="text" value="Crime, Drama" /></div>
            <div className="Add115r"><button>RESUBMIT MOVIE</button><button id="cancelr">CANCEL</button></div>
          
        </div>
    )
}
export default Rejectreson;

