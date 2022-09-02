import { useState } from "react";

const useInput = (validateValue, maxlen) => {
    const [enteredValue, setEnteredValue] = useState("")
    const [isTouched, setIsTouched] = useState(false)

    const isValidValue = validateValue(enteredValue)
    const validInputLength = (value) => value.trim().length > Number(maxlen)
    const hasError = !isValidValue && isTouched
    const maxLen = validInputLength(enteredValue)

    const valueChangeHandler = (event) => {
        console.log(event.target)
        setEnteredValue(event.target.value)
    }

    const inputBlurHandler = (event) => {
        setIsTouched(true)
    }

    const reset = (event) => {
        setEnteredValue("")
        setIsTouched(false)
    } 

    return {
        value: enteredValue,
        isValid: isValidValue,
        isValidLen: maxLen,
        hasError,
        isTouched,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    }


}

export default useInput;