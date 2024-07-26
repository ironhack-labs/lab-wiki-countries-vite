import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch('https://ih-countries-api.herokuapp.com/countries');
      const data = await response.json();
      setCountries(data);
    };

    fetchCountries();
  }, []);
  
  return (
    <div>
      <Navbar />

      <div className="container" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        <h1 style={{ fontSize: '24px' }}>WikiCountries: Your Guide to the World</h1>

        <div className="list-group">
          {countries.map(country => (
            <Link 
              key={country.alpha3Code} 
              className="list-group-item list-group-item-action" 
              to={`/${country.alpha3Code}`}
            >
              {country.emoji} {country.name.common}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
