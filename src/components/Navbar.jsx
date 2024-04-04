import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav>
        <div className="logo"><Link to={`/`}>WikiCountries</Link></div>
    </nav>
  )
}

