import { NavLink } from "react-router-dom";

function Navbar() {



    return (

    <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>
        <nav><h1>Wiki Countries</h1></nav>
    </NavLink>
        
    
    )



}

export default Navbar;
