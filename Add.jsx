import "./Add.css"
import { BsDot } from "react-icons/bs";

function  Add(){
    return(
        <div className="Add">
            <div className="AddMovie"><p>Add New Movie</p></div>
            <div className="ButtonX"><button>X</button></div>
            <div className="Title"><a><BsDot /></a><p>TITLE</p></div>
            <div className=" TTextbox"><input type="text" id="text" /></div>
            <div className="Poster"><a><BsDot /></a><p>POSTER IMAGE</p></div>
            <div className="filea"><input type="file" accept="image"/></div>
            <div className="Releas"><a><BsDot /></a><p>REALESE DATE</p></div>
            <div className="Date"><input type="date"/></div>
            <div className="Language"><a><BsDot /></a><p>LANGUAGE</p></div>
            <div className=" LTextbox"><input type="text" id="text" /></div>
            <div className="Descraption"><a><BsDot /></a><p>DESCRAPTION</p></div>
            <div className=" DTextbox"><textarea rows="4"></textarea></div>
            <div className="Genres"><a><BsDot /></a><p>Genres (comma separated)</p></div>
            <div className=" GTextbox"><input type="text" id="text" /></div>
            <div className="Add115"><button>SUBMIT FOR APPROVAL</button><button id="cancel">CANCEL</button></div>
        </div>
    )
}
export default Add;