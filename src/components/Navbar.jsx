import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary">
        <Link to="/">
          {" "}
          <h3 className="nav-wiki">WikiCountries</h3>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
