import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get('https://ih-countries-api.herokuapp.com/countries');
      console.log(response.data);
      setCountries(response.data);
    };

    fetchCountries();
  }, []); 
  return (
    <div>
      <Navbar />

      <div className="container">
        <h1 className="text-center" style={{ fontSize: '24px' }}>WikiCountries: Your Guide to the World</h1>

        <div className="d-flex justify-content-center">
          <div className="list-group" style={{ width: '100%', maxWidth: '600px' }}>
            {countries.map(country => (
              <Link 
                key={country.alpha3Code} 
                className="list-group-item list-group-item-action d-flex flex-column align-items-center" 
                to={`/${country.alpha3Code}`}
                style={{ textDecoration: 'none', textAlign: 'center' }}
              >
                <img 
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} 
                  alt={`Flag of ${country.name.common}`} 
                  style={{ width: '72px', height: '54px', marginBottom: '5px' }}
                />
                <span>{country.name.common}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
