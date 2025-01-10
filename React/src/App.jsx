import Counter from "./counter"
import TextInput from "./components/TextInput"
import LoginForm from "./components/LoginForm"
import UnControlloDInput from "./components/UnControlloDInput"
import ItemList from "./components/ItemList"
import Card from "./components/Card"

function App() {

  const myList = ['Luigi', 'Nicola', 'Giovanni', 'Alfredo'];

  return (
    <>
     {/* <Counter/> */}
     {/* <TextInput/> */}
     {/* <LoginForm/> */}
     {/* {<UnControlloDInput/>} */}
     {/* {<ItemList list = {myList}/>} */}
     <Card>
      <h1>questo è il contenuto della card</h1>
     </Card>
    </>
  )
}

export default App
