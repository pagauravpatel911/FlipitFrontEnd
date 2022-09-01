import "./UploadDocs.css";
import uploadedDocs from "../../icons/uploaded-docs.svg";
import uploadedArrowUp from "../../icons/upload-arrow-up.svg";
import Search from "../../icons/search.svg";

const UploadedDocs = () => {
  return (
    <div className="uploadedDocs">
      <div className="uploadedDoc_left">
        <img src={uploadedDocs}></img>
        <span>Uploaded Documents</span>
      </div>
      <div className="uploadedDocs_right">
        <div className="search">
          <img src={Search} />
          <input type="search" placeholder="Search in table"></input>
        </div>
        <div className="upload_button">
          <span>Add New</span>
          <img src={uploadedArrowUp} />
        </div>
      </div>
    </div>
  );
};
export default UploadedDocs;
