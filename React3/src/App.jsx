import {Route, Routes} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Navbar from "./Navbar"
import PublicLayout from "./PublicLayout"


const App = () => {


  return (
    <>
    <Routes>
      <Route path="/" element ={<PublicLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
