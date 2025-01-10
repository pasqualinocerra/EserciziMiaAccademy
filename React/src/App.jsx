import Counter from "./counter"
import TextInput from "./components/TextInput"
import LoginForm from "./components/LoginForm"
import UnControlloDInput from "./components/UnControlloDInput"
import ItemList from "./components/ItemList"

function App() {

  const myList = ['Luigi', 'Nicola', 'Giovanni', 'Alfredo'];

  return (
    <>
     {/* <Counter/> */}
     {/* <TextInput/> */}
     {/* <LoginForm/> */}
     {/* {<UnControlloDInput/>} */}
     {<ItemList list = {myList}/>}
    </>
  )
}

export default App
