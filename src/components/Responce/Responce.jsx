
import "./Responce.css"

import crossIcon from "../../icons/Vector@2x.svg"


const Responce = (props) => {
  

    return(
        <div className="Responce_Display">
        <div className="Responce">
            <img className="cross_Icon" src={crossIcon}></img>
            <img src={props.render.img} alt="" srcset="" />
            <span>{props.render.msg}</span>
            <button>Close</button>

        </div>
        </div>
     
    )
    
}

export default Responce;