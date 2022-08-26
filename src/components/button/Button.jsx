import React from "react";
import "./button.css"

const Button = (props) => {
    const submitHandler = (event) => {
        event.preventDefault();
        props.onSubmitForm();
    }

    return (
        <div>
            <button onSubmit={submitHandler} className="btn btn-primary button">{props.text}</button>
        </div>
    )
}

export default Button;