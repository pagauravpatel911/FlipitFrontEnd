import "./UploadDocumentForm.css";

import arrowUp from "../../icons/upload-arrow-up.svg";
import React, { useEffect, useState } from "react";
import useInput from "../../hooks/use-input";

const UploadDocumentForm = (props) => {
  const {
    value: enterdName,
    isValid: isValidName,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enterdDoc,
    isValid: isValidDoc,
    hasError: docHasError,
    valueChangeHandler: docChangeHandler,
    inputBlurHandler: docBlurHandler,
    reset: resetDoc,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enterdDocPic,
    isValid: isValidCDocPic,
    hasError: docPicHasError,
    valueChangeHandler: docPicChangeHandler,
    inputBlurHandler: docPicBlurHandler,
    reset: resetDocPic,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enterdMetaName,
    isValid: isValidMetaName,
    hasError: metaNameHasError,
    valueChangeHandler: metaNameChangeHandler,
    inputBlurHandler: metaNameBlurHandler,
    reset: resetMetaName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enterdMetaDescription,
    isValid: isValiMetaDescription,
    hasError: metaDescriptionHasError,
    valueChangeHandler: metaDescriptionChangeHandler,
    inputBlurHandler: metaDescriptionBlurHandler,
    reset: resetMetaDescription,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (
    isValidName &&
    isValidDoc &&
    isValidCDocPic &&
    isValidMetaName &&
    isValiMetaDescription
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      document: enterdDoc,
      name: enterdName,
      meta_picture: enterdDocPic,
      meta_description: enterdMetaDescription,
      meta_title: enterdMetaName,
    };
    console.log(data);

    resetName();
    resetDoc();
    resetDocPic();
    resetMetaName();
    resetMetaDescription();
  };

  return ( 
    <div className="row align-items-center margin_component" >
      <div className="col-12 col-lg-6 col-md-3 upload_container">
       
        <div className="document_upload">
          <div className="document_Label">
            <label className="label_name" htmlFor="document">
              Document
            </label>
            </div>
            <div className="document_uploadButton">
                <button>Choose File</button>
                <span>No file chosen...</span>
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
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 col-md-3 upload_container">
        <div className="meta_thumbnail">
            <div className="meta_thumbnailLabel">
            <label htmlFor="meta-picture">Thumbnail / Cover Image</label>
        
            </div>
            <span className="span_css">Image to show when someone paste or share this file link in any chat</span>
            <div className="document_uploadButton">
                <button>Choose File</button>
                <span>No file chosen...</span>
            </div>
       
        </div>
      </div>
      <div className="col-12 col-lg-6 col-md-3">
        <div className="meta_description">
          <label htmlFor="meta-description">Meta Description</label>
          <span className="span_css">Description to show when someone paste or share this file link in any chat</span>
          <textarea
            id="meta-description"
            name="meta-description"
            maxlength="1000"
            required="required"
            className="meta_descriptionInput"
          ></textarea>
        </div>
      </div>
    </div>

    // <div className="upload_container">
    // <div className="left_container">
    // <div className="document_upload">
    //            <div className="document_Label">
    //             <label className="label_name" htmlFor="document">Document</label>

    //             </div>
    //             <input onChange={docChangeHandler} onBlur={docBlurHandler} type="file" id="document" name="document" className="choose_file" value={enterdDoc} />
    //   </div>
    //   <div className="meta_tittle">
    //   <label htmlFor="meta-title">Meta Title</label>
    //   <div className="meta_inputDiv">
    // <input onChange={metaNameChangeHandler} onBlur={metaNameBlurHandler} type="text" id="meta-title" name="meta-title" className="meta_titleInput" value={enterdMetaName}/>
    // </div>

    //   </div>
    //   <div className="meta_description">
    //   <label htmlFor="meta-description">Meta Description</label>
    //   <textarea id="meta-description" name="meta-description" maxlength="1000" required="required" className="meta_descriptionInput"></textarea>
    //   </div>
    // </div>
    // <div className="right_container">
    // <div className="document_name">
    //        <label htmlFor="document_name">Document Name</label>
    //        <input onChange={nameChangeHandler} onBlur={nameBlurHandler} type="text" id="document-name" name="document-name" value={enterdName}/>
    //   </div>
    //   <div className="meta_picture">
    //        <label htmlFor="meta-picture">Thumbnail / Cover Image</label>
    //            <input onChange={docPicChangeHandler} onBlur={docPicBlurHandler} type="file" id="meta-picture" name="meta-picture" value={enterdDocPic}/>
    //   </div>

    // </div>

    // </div>
    // <div className="form-container">
    //     <form onSubmit={formSubmitHandler}>
    //         <div className="form-control">
    //             <label htmlFor="document">Document</label>
    //             <input onChange={docChangeHandler} onBlur={docBlurHandler} type="file" id="document" name="document" value={enterdDoc} />
    //         </div>
    //         {docHasError && <p>please select a file to upload</p>}
    //         <div className="form-control">
    //             <label htmlFor="document-name">Document Name</label>
    //             <input onChange={nameChangeHandler} onBlur={nameBlurHandler} type="text" id="document-name" name="document-name" value={enterdName}/>
    //         </div>
    //         {nameHasError && <p>please enter a document name</p>}
    //         <div className="form-control">
    //             <label htmlFor="meta-title">Meta Title</label>
    //             <input onChange={metaNameChangeHandler} onBlur={metaNameBlurHandler} type="text" id="meta-title" name="meta-title" value={enterdMetaName}/>
    //         </div>
    //         {metaNameHasError && <p>please enter meta title for document</p>}
    //         <div className="form-control">
    //             <label htmlFor="meta-description">Meta Description</label>
    //             <input onChange={metaDescriptionChangeHandler} onBlur={metaDescriptionBlurHandler} type="text" id="meta-description" name="meta-description" value={enterdMetaDescription}/>
    //         </div>
    //         {metaDescriptionHasError && <p>please enter the meta description for a document</p>}
    //         <div className="form-control">
    //             <label htmlFor="meta-picture">Thumbnail / Cover Image</label>
    //             <input onChange={docPicChangeHandler} onBlur={docPicBlurHandler} type="file" id="meta-picture" name="meta-picture" value={enterdDocPic}/>
    //         </div>
    //         {docPicHasError && <p>please select a Thumbnail to upload</p>}
    //         <div className="form-action">
    //             <button disabled={!formIsValid} className="btn btn-primary">Upload Document <span><img src={arrowUp} alt="download logo"/></span></button>
    //         </div>
    //     </form>
    // </div>
  );
};

export default UploadDocumentForm;
