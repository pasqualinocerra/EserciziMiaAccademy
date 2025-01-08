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

    return (
      <>
       <div>
        Count : {counter}
       </div>
       <button onClick={increment}>INCREMENT</button><br/>
       <button onClick={decrement}>DECREMENT</button>
      </>
    )
  }
  
  export default Counter
  