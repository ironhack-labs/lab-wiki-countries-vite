import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      {/* <div>
            <a className="navbar-brand">WikiCountries</a>
        </div> */}
      <NavLink
        to="/"
        className='navbar'  //{({ isActive }) => isActive ? "selected" : ""}
      >
        WikiCountries
      </NavLink>
    </nav>
  );
}

export default Navbar;
