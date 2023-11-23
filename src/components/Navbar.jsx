import { Link, NavLink } from "react-router-dom";
function Navbar() {
    return (
        <nav className=" navbar navbar-light bg-light">
            <ul className="container">

                <NavLink className="pochi" to="/countries">WikiCountries</NavLink>


            </ul>
        </nav >)
}

export default Navbar;
