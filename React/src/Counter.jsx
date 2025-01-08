import {useState} from 'react';

function Counter() {

    const [counter, setCounter] = useState(0);

    const increment = () => {
       setCounter((_counter) => {
        return _counter + 1;
       })
    }

    const decrement = () => {
        setCounter((_counter) => {
        return _counter - 1;
        })
    }

    const reset = () => {
        setCounter((_counter) => {
        return _counter = 0;
        })
    }

    return (
      <>
       <div>
        Count : {counter}
       </div>
       <button onClick={increment}>INCREMENT</button><br/>
       <button onClick={decrement}>DECREMENT</button><br/>
       <button onClick={reset}>RESET</button>
      </>
    )
  }
  
  export default Counter
  