import "./LoginPage1.css"
import React, {useEffect, useState} from "react"
import axios from "axios"
import useInput from "../../hooks/use-input"

const LoginPage1 = (props) => {
    const {
        value: enterdEmail,
        isValid: isValidEmail,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
        isTouched: emailIsTouched,
    } = useInput(value => value.includes("@"))

    const {
        value: enterdPassword,
        isValid: isValidPassword,
        hasError: passwordHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPassword,
    } = useInput(value => value.trim().length >= 8)

    const isDataValid = emailHasError && passwordHasError

    let formIsValid = false;

    if (isValidEmail && isValidPassword) {
        formIsValid = true;
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        if(isDataValid){
            console.log("Please enter a valid email address and password");
            return
        }
        console.log({
            enterdEmail,
            enterdPassword
        })
        resetEmail()
        resetPassword()
    }

    return (
        <div className="container">
        <form onSubmit={onSubmitForm}>
            <div className="control-group">
                <div className="form-control email">
                    <label htmlFor="email">Email</label>
                    <input onChange={emailChangeHandler} type="text" id="email" name="email" placeholder="Email" value={enterdEmail} onBlur={emailBlurHandler}/>
                </div>
                {emailHasError && <p className="alert alert-danger">please enter valid email</p>}
                <div className="form-control password">
                    <label htmlFor="password">Password</label>
                    <input onChange={passwordChangeHandler} type="password" id="password" name="password" placeholder="Password" value={enterdPassword} onBlur={passwordBlurHandler}/>
                </div>
                {passwordHasError && <p className="alert alert-danger">invalid password (at least 8 char)</p>}
                <div className="form-action">
                    <button disabled={!formIsValid} className="btn btn-primary">Login</button>
                </div>
            </div>
        </form>
        </div>
        
    )
}

export default LoginPage1;