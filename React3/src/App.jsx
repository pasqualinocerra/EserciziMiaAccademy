import {Route, Routes} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Navbar from "./Navbar"


const App = () => {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </>
  )
}

export default App
