
import "./GInfoElemet.css"
import DocumentUploadedImg from "../../icons/documents-uploaded.svg"


const GInfoElement = (props) => {
  

    return(
      <div className="GInfo">
        <span>General Information</span>
        <div className="All_container">
        <div className="info_container">
           <div className="left_container">
            <img src={DocumentUploadedImg} ></img>
           </div>
           <div className="right_container">
             <span className="statics">1.4K</span>
             <span className="statics_text">Documents Uploaded</span>
           </div>
        </div>
        <div className="info_container">
           <div className="left_container">
            <img src={DocumentUploadedImg} ></img>
           </div>
           <div className="right_container">
             <span className="statics">1.4K</span>
             <span className="statics_text">Documents Uploaded</span>
           </div>
        </div>
        <div className="info_container">
           <div className="left_container">
            <img src={DocumentUploadedImg} ></img>
           </div>
           <div className="right_container">
             <span className="statics">1.4K</span>
             <span className="statics_text">Documents Uploaded</span>
           </div>
        </div>
        <div className="info_container">
           <div className="left_container">
            <img src={DocumentUploadedImg} ></img>
           </div>
           <div className="right_container">
             <span className="statics">1.4K</span>
             <span className="statics_text">Documents Uploaded</span>
           </div>
        </div>
        </div>
        </div>
        
    )
    
}

export default GInfoElement;