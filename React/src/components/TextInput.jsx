import {useState} from 'react'

const TextInput = () => {

    const [tesxInput, setTextInput] = useState('')


    return (
        <>
        <input type="text" placeholder='scrivi qui'/>
        </>
    )
}

export default TextInput