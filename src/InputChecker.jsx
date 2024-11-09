import { useState, useEffect } from "react"
import UserFetcher from "./UserFetcher"

const InputChecker = () => {

    const [value, setValue] = useState('')
    const [message, setMessage] = useState('Minimum of 3 characters only')
    useEffect(() => {
        if (value.length > 3) {
            setMessage(value)
        } else {

            setMessage((3-value.length) + ' characters left')
        }

    }, [value])

    const checkInput = (event) => {
        setValue(event.target.value);
    }
    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Enter a value"
                    onChange={checkInput}
                />
                <h2>{message}</h2>
            </div>
        </>
    )
}

export default InputChecker