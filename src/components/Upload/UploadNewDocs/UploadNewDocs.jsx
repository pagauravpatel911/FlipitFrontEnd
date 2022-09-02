import "./UploadNewDocs.css";
import AddDocumentIcons from "../../../icons/add-document.svg";
import uploadedArrowUp from "../../../icons/upload-arrow-up.svg";


const UploadNewDocs = () => {
  return (
    <div className="uploadNewDocs">
        <div className="uploadNewDoc_leftContainer">
            <img src={AddDocumentIcons}></img>
            <span>Upload New Document</span>
        </div>
        <div className="uploadNewDoc_rightContainer">
            <div className="addNewDoc">
            <span>Upload Document</span>
          <img src={uploadedArrowUp} />
            </div>
        </div>

    </div>
  );
};
export default UploadNewDocs;
