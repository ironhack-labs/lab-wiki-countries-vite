import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        console.log("API Response:", response.data); // Verifica los datos aquí
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="my-5">WikiCountries: Your Guide to the World</h1>
      <ul className="list-group">
        {countries.map((country) => (
          <li key={country.alpha3Code} className="list-group-item">
            <Link to={`/${country.alpha3Code}`} className="text-decoration-none">
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code?.toLowerCase()}.png`}
                alt={`${country.name.common} flag`}
                style={{ width: "20px", marginRight: "5px" }}
                onError={(e) => (e.target.src = "https://via.placeholder.com/50")}
              />
              {country.name.common}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
