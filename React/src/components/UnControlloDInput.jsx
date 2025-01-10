import {useRef} from 'react'

const UnControlloDInput = () => {

const inputRef = useRef(null)

const currentInput = (value) => {
    alert(inputRef.current.value)
}


    return(
        <>
        <input type="text" name="username" id="username" ref={inputRef}/>
        <button onClick={currentInput}></button>
        </>
    )
}

export default UnControlloDInput