import {useState} from 'react';

function Counter() {

    const [counter, setCounter] = useState(0);

    const increment = () => {
       setCounter((_counter) => {
        return _counter + 1;
       })
    }

    return (
      <>
       <div>
        Count : {counter}
       </div>
       <button onClick={increment}>PUSH</button>
      </>
    )
  }
  
  export default Counter
  