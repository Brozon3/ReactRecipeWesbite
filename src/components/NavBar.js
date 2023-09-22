import { Link } from "react-router-dom"

export const NavBar = () => {
    return(
        <div className="container w-50">
            <nav className="navbar navbar-expand-lg navbar-light bg-light container border border-secondary rounded">
            <div className="collapse navbar-collapse">
                <div className="navbar-nav">
                    <Link to="/" className="nav-item nav-link">Home</Link>
                    <Link to="/add" className="nav-item nav-link">Add Recipe</Link> 
                </div>
            </div>
            </nav> 
        </div>
        
    )
}

export default NavBar;