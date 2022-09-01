import arrowUp from "../../icons/upload-arrow-up.svg"
import React, {useEffect, useState} from "react";
import useInput from "../../hooks/use-input";

const UploadDocumentForm = (props) => {
    const {
        value: enterdName,
        isValid: isValidName,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetName,
    } = useInput(value => value.trim() !== "")

    const {
        value: enterdDoc,
        isValid: isValidDoc,
        val: docValueTaget,
        hasError: docHasError,
        valueChangeHandler: docChangeHandler,
        inputBlurHandler: docBlurHandler,
        reset: resetDoc,
    } = useInput(value => value.trim() !== "")

    const {
        value: enterdDocPic,
        isValid: isValidCDocPic,
        hasError: docPicHasError,
        valueChangeHandler: docPicChangeHandler,
        inputBlurHandler: docPicBlurHandler,
        reset: resetDocPic,
    } = useInput(value => value.trim() !== "")

    const {
        value: enterdMetaName,
        isValid: isValidMetaName,
        hasError: metaNameHasError,
        valueChangeHandler: metaNameChangeHandler,
        inputBlurHandler: metaNameBlurHandler,
        reset: resetMetaName,
    } = useInput(value => value.trim() !== "")

    const {
        value: enterdMetaDescription,
        isValid: isValiMetaDescription,
        hasError: metaDescriptionHasError,
        valueChangeHandler: metaDescriptionChangeHandler,
        inputBlurHandler: metaDescriptionBlurHandler,
        reset: resetMetaDescription,
    } = useInput(value => value.trim() !== "")

    let formIsValid = false;

    if (isValidName && isValidDoc && isValidCDocPic && isValidMetaName && isValiMetaDescription) {
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
        }
        const uri = URL.createObjectURL(docValueTaget.files[0])
        console.log(data)
        console.log(uri)
        
        resetName()
        resetDoc()
        resetDocPic()
        resetMetaName()
        resetMetaDescription()
        
        
    }

    return (
        <div className="form-container">
            <form onSubmit={formSubmitHandler} className="fcontainer">
                <div className="form-control">
                    <label htmlFor="document">Document</label>
                    <input onChange={docChangeHandler} onBlur={docBlurHandler} type="file" id="document" name="document" value={enterdDoc} />
                </div>
                {docHasError && <p>please select a file to upload</p>}
                <div className="form-control">
                    <label htmlFor="document-name">Document Name</label>
                    <input onChange={nameChangeHandler} onBlur={nameBlurHandler} type="text" id="document-name" name="document-name" value={enterdName}/>
                </div>
                {nameHasError && <p>please enter a document name</p>}
                <div className="form-control">
                    <label htmlFor="meta-title">Meta Title</label>
                    <input onChange={metaNameChangeHandler} onBlur={metaNameBlurHandler} type="text" id="meta-title" name="meta-title" value={enterdMetaName}/>
                </div>
                {metaNameHasError && <p>please enter meta title for document</p>}
                <div className="form-control">
                    <label htmlFor="meta-description">Meta Description</label>
                    <input onChange={metaDescriptionChangeHandler} onBlur={metaDescriptionBlurHandler} type="text" id="meta-description" name="meta-description" value={enterdMetaDescription}/>
                </div>
                {metaDescriptionHasError && <p>please enter the meta description for a document</p>}
                <div className="form-control">
                    <label htmlFor="meta-picture">Thumbnail / Cover Image</label>
                    <input onChange={docPicChangeHandler} onBlur={docPicBlurHandler} type="file" id="meta-picture" name="meta-picture" value={enterdDocPic}/> 
                </div>
                {docPicHasError && <p>please select a Thumbnail to upload</p>}
                <div className="form-action">
                    <button disabled={!formIsValid} className="btn btn-primary">Upload Document <span><img src={arrowUp} alt="download logo"/></span></button>
                </div>
            </form>
        </div>
    )
}

export default UploadDocumentForm;