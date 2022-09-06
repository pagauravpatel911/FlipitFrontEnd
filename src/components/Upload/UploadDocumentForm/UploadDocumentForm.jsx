import "./UploadDocumentForm.css";

import arrowUp from "../../../icons/upload-arrow-up.svg";
import React, { useEffect, useState ,useRef} from "react";
import useInput from "../../../hooks/use-input";
import ErrorSvg from "../../../icons/error-round.svg";
import AddDocumentIcons from "../../../icons/add-document.svg";
import uploadedArrowUp from "../../../icons/upload-arrow-up.svg";
import SuccessResponse from "../../../icons/success-illustration.svg"
import FailureResponse from "../../../icons/error-illustration.svg"
import axios from "axios";
import FormData from 'form-data';
import { Redirect } from "react-router-dom";
import Responce from "../../Responce/Responce";

const UploadDocumentForm = (props) => {

 const[dispaly, setDisplay] = useState(false);
 const[resData, setResData] = useState({});
  const [document, setDocument] = useState({})
  const [thumbnail, setThumbnail] = useState({})
  const chooseInputDocRef = useRef()
  const chooseInputThumbRef = useRef()
  const {
    value: enterdName,
    isValid: isValidName,
    hasError: nameHasError,
    isValidLen: nameIsValidLen,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "", 100);

  const {
    value: enterdMetaName,
    isValid: isValidMetaName,
    hasError: metaNameHasError,
    isValidLen: metaNameIsValidLen,
    valueChangeHandler: metaNameChangeHandler,
    inputBlurHandler: metaNameBlurHandler,
    reset: resetMetaName,
  } = useInput((value) => value.trim() !== "", 300);

  const {
    value: enterdMetaDescription,
    isValid: isValiMetaDescription,
    hasError: metaDescriptionHasError,
    isValidLen: metaDescrptionIsValidLen,
    valueChangeHandler: metaDescriptionChangeHandler,
    inputBlurHandler: metaDescriptionBlurHandler,
    reset: resetMetaDescription,
  } = useInput((value) => value.trim() !== "", 1000);

  let formIsValid = false;

  if (
    isValidName &&
    isValidMetaName &&
    isValiMetaDescription &&
    !nameIsValidLen &&
    !metaNameIsValidLen && 
    !metaDescrptionIsValidLen
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const data = {
      name: enterdName,
      meta_description: enterdMetaDescription,
      meta_name: enterdMetaName,
      myfile: document,
      meta_picture: thumbnail
    };
    const uploadDoc = async() => {
      try{
       
        const data = new FormData();
        data.append('name', enterdName);
        data.append('meta_name', enterdMetaName);
        data.append('meta_description', enterdMetaDescription);
        data.append('meta_picture', thumbnail);
        data.append('myfile', document);

        console.log(data)

        var config = {
          method: 'post',
          url: 'http://localhost:4200/document/upload',
          headers: { 
            // 'Cookie': 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjYyMjAzNzEyfQ.2xhnWmKCEVnz2j_UXEuiNgiIT6gwJtnEAXmQa3WB7vE', 
            // ...data.getHeaders()
          },
          data : data
        };
        const doc = await axios(config)
        return doc
      }catch(err){
        console.log(err)
      }

      
    }
    const res = await uploadDoc()
    if(res.status === 201){
      setResData({
        img: SuccessResponse,
        msg: "Your Document Uploaded Successfully"
      })
      setDisplay(true)
      setTimeout(() => {
        setDisplay(false)
      }, 10000)
      console.log("nnnwnbvxvnbxbvxbv")

    }else{
      setResData({
        img: FailureResponse,
        msg: "Unable To Upload Selected Document"
      })
      setDisplay(true)
      setTimeout(() => {
        setDisplay(false)
      }, 10000)
    }
    setDocument({})
    setThumbnail({})
    resetName();
    resetMetaName();
    resetMetaDescription();
  };

  const DochandleChooseClick = () => {
    chooseInputDocRef.current.click()
  }

  const ThumbhandleChooseClick = () => {
    chooseInputThumbRef.current.click()
  }

  const documentHandler =(event) => {
    setDocument(event.target.files[0])
    console.log(event.target.files[0])
  }

  const thumbnailHandler =(event) => {
    setThumbnail(event.target.files[0])
    console.log(event.target.files[0])
  }

  return ( 
    <>
    {dispaly && <Responce render={resData}/>}
    <form className="row align-items-center margin_component" >
      <div className="uploadNewDocs">
        <div className="uploadNewDoc_leftContainer">
          <img src={AddDocumentIcons}></img>
          <span>Upload New Document</span>
        </div>
        <div className="uploadNewDoc_rightContainer">
          <button disabled={!formIsValid} onClick={formSubmitHandler} className="addNewDoc">
            <span>Upload Document</span>
            <img src={uploadedArrowUp} />
          </button>
        </div>
      </div>
      <div className="col-12 col-lg-6 col-md-3 upload_container">
        <div className="document_upload">
          <div className="document_Label">
            <label className="label_name" htmlFor="document">
              Document
            </label>
            <input className="input" type="checkbox" id="switch" /><label for="switch" className="toggle">Toggle</label>
            {/* <div>
            <input type="checkbox" id="switch" /><label for="switch">Toggle</label>
            </div> */}
          </div>
          <div className="document_uploadButton" >
            <button onClick={DochandleChooseClick}>Choose File</button>
            <span>No file chosen...</span>
            <input ref={chooseInputDocRef} onChange={documentHandler} className="upload-file-input w-100 py-1 d-none" type="file" />
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 col-md-3 upload_container">
        <div className="document_name">
          <label htmlFor="document_name">Document Name</label>
          <span className="span_css">Add name to save your chosen file</span>
          <input
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            type="text"
            id="document-name"
            name="document-name"
            value={enterdName}
          />
          {nameHasError && <span className="errorMsgDisplay"><img src={ErrorSvg}></img> please enter a document name</span>}
          {nameIsValidLen && <p className="errorMsgDisplay"><img src={ErrorSvg} />can enter 100 characters only</p>}
        </div>
      </div>
      <div className="col-12 col-lg-6  col-md-3 upload_container">
        <div className="meta_tittle">
          <label htmlFor="meta-title">Meta Title</label>
          <span className="span_css">Title to show when someone paste or share this file link in any chat</span>
          <div className="meta_inputDiv">
            <input
              onChange={metaNameChangeHandler}
              onBlur={metaNameBlurHandler}
              type="text"
              id="meta-title"
              name="meta-title"
              className="meta_titleInput"
              value={enterdMetaName}
            />
            {metaNameHasError && <p className="errorMsgDisplay"><img src={ErrorSvg}></img> please enter meta title for document</p>}
            {metaNameIsValidLen && <p className="errorMsgDisplay"><img src={ErrorSvg}></img> can enter 300 characters only</p>}
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 col-md-3 upload_container">
        <div className="meta_thumbnail">
          <div className="meta_thumbnailLabel">
            <label htmlFor="meta-picture">Thumbnail / Cover Image</label>
          </div>
          <span className="span_css">Image to show when someone paste or share this file link in any chat</span>
          <div className="document_uploadButton" >
            <button onClick={ThumbhandleChooseClick}>Choose File</button>
            <span>No file chosen...</span>
            <input ref={chooseInputThumbRef} onChange={thumbnailHandler}className="upload-file-input w-100 py-1 d-none" type="file" />
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 col-md-3">
        <div className="meta_description">
          <label htmlFor="meta-description">Meta Description</label>
          <span className="span_css">Description to show when someone paste or share this file link in any chat</span>
          <textarea
            onChange={metaDescriptionChangeHandler}
            onBlur={metaDescriptionBlurHandler}
            id="meta-description"
            name="meta-description"
            maxLength="1000"
            required="required"
            className="meta_descriptionInput"
          ></textarea>
          {metaDescriptionHasError && <p className="errorMsgDisplay"><img src={ErrorSvg}></img> please enter the meta description for a document</p>}
          {metaDescrptionIsValidLen && <p className="errorMsgDisplay"><img src={ErrorSvg}></img> can enter 1000 characters only</p>}
        </div>
      </div>
      {/* <button disabled={!formIsValid} onClick={formSubmitHandler}>Upload document</button> */}
    </form>
    </>
  );
};

export default UploadDocumentForm;