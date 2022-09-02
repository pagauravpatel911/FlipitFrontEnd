
import "./Responce.css"
import SuccessResponse from "../../icons/success-illustration.svg"
import crossIcon from "../../icons/Vector@2x.svg"


const Responce = (props) => {
  

    return(
        <div className="Responce">
            <img className="cross_Icon" src={crossIcon}></img>
            <img src={SuccessResponse} alt="" srcset="" />
            <span>You Document Uploaded Successfully</span>
            <button>Close</button>

        </div>
     
    )
    
}

export default Responce;