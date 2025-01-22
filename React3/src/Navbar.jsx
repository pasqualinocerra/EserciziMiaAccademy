import { Link } from "react-router-dom"
import Home from "./Home"
import About from "./About"

const Navbar = () => {

    return(
        <>
            <nav>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                <Link to="/about">About</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar