import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <nav className="bg-blue-600 min-h-50 p-5 text-white flex flex-row justify-between items-center"> <NavLink to="/">WikiCountries</NavLink></nav>
    )
}

export default Navbar;
