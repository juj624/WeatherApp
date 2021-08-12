import {Link} from "react-router-dom"

function Navbar() {
    return (
        <nav className="link-app">
            <ul>
                <li> <Link to="/">Accueil</Link> </li>
                <li> <Link to="/Favoris">Favoris</Link></li>
            </ul>
        </nav>

    );
  }
  
  export default Navbar;