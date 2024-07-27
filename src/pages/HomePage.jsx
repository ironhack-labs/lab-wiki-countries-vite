import React, { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then(response => {
        console.log(response.data); // Tip: Log the response data to understand its structure
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching the countries data:', error);
      });
  }, []);

  return (
    <>
      <div className="container" style={{ maxHeight: "90vh", overflow: "scroll" }}>
        <h1 style={{ fontSize: "24px" }}>WikiCountries: Your Guide to the World</h1>
        <div className="list-group">
          {countries.map(country => (
            <a key={country.alpha3Code} className="list-group-item list-group-item-action" href={`/${country.alpha3Code}`}>
              {country.name.common}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;