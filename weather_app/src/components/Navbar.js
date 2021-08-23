import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="link-app">
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/Favoris">Favorites</Link></li>
            </ul>
        </nav>

    );
}

export default Navbar;