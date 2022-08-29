import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState("")
    const [isTouched, setIsTouched] = useState(false)

    const isValidValue = validateValue(enteredValue)
    const hasError = !isValidValue && isTouched

    const valueChangeHandler = (event) => {
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
        hasError,
        isTouched,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    }


}

export default useInput;