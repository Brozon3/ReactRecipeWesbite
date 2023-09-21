import { Link } from "react-router-dom"

export const NavBar = () => {
    return(
        <nav>
            <Link to="/">Home</Link>
            <span> </span>
            <Link to="/add">Add Recipe</Link> 
        </nav>
    )
}

export default NavBar;