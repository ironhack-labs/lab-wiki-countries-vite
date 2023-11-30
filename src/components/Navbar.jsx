import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <ul className="container">
        <Link to="/" className="navbar-brand">
          WikiCountries
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
