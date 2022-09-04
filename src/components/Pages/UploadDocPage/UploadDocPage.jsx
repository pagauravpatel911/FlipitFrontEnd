import "./UploadDocPage.css";
import Header from "../../Header/Header";
import NavBar from "../../Header/Navbar/Navbar";
import UploadNewDocs from "../../Upload/UploadNewDocs/UploadNewDocs";
import UploadDocumentForm from "../../Upload/UploadDocumentForm/UploadDocumentForm";


const UploadDocPage = (props) => {
    return(
 <>
  <Header/>
  <NavBar/>
  <UploadNewDocs/>
  <UploadDocumentForm/> 
</>
    )
}


export default  UploadDocPage;