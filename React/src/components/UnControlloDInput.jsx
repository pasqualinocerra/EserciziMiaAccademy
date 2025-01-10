import {useRef} from 'react'

const UnControlloDInput = () => {

const inputRef = useRef(null)


    return(
        <>
        <input type="text" name="username" id="username" ref={inputRef}/>
        </>
    )
}

export default UnControlloDInput