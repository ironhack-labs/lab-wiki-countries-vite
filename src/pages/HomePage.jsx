import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    try {
      const response = await fetch('https://ih-countries-api.herokuapp.com/countries');
      const data = await response.json();
      console.log(data); // Log the response data to visualize the structure
      setCountries(data);
    } catch (error) {
      console.error('Error fetching countries data:', error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="container" style={{ maxHeight: "90vh", overflow: "scroll" }}>
      <h1 style={{ fontSize: "24px" }}>WikiCountries: Your Guide to the World</h1>
      <div className="list-group">
        {countries.map(country => (
          <Link
            key={country.alpha3Code}
            className="list-group-item list-group-item-action"
            to={`/${country.alpha3Code}`}
          >
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt={`${country.name.common} flag`}
              style={{ marginRight: '10px' }}
            />
            <br />
            {country.name.common}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;