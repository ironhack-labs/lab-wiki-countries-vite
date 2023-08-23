import { Link } from 'react-router-dom';
import './NavBar.css'

const Navbar = () => {
    return (
        <nav>
            <ul className="nav">
                <li className="nav-item">
                    <Link to={`./`}> WikiCountries</Link>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar;
