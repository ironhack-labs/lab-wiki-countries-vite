import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function HomePage() {
  const [countries, setCountries] = useState([])


  return (
    <div>
      
      <Navbar />

      <div className="container" >
        <h1>WikiCountries: Your Guide to the World</h1>
        {countries.map((country) => {
          <h4>{country.name.common}</h4>
        })}

        
      </div>
    </div>
    )
}

export default HomePage;
