import "./Navbar.css"
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="navbar navbar-dark bg-primary mb-3">
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "active normal-link" : "normal-link"}>
                        WikiCountries
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/surprise"
                        className={({ isActive }) => isActive ? "selected rainbow-text" : "rainbow-text"}>
                        SURPRISE!!
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
