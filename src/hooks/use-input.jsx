import { useState } from "react";

const useInput = (validateValue, type="text") => {
    const [enteredValue, setEnteredValue] = useState("")
    const [isTouched, setIsTouched] = useState(false)
    const [val, setVal] = useState({})

    const isValidValue = validateValue(enteredValue)
    const hasError = !isValidValue && isTouched

    const valueChangeHandler = (event) => {
        console.log(event.target)
        setVal(event.target)
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
        val,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    }


}

export default useInput;