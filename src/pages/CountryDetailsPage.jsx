import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CountryDetailsPage() {
  const { countryId } = useParams(); 
  const [country, setCountry] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => {
        setCountry(response.data); 
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching country details:", error);
        setLoading(false); 
      });
  }, [countryId]); 

  if (loading) {
    return <p>Loading...</p>; 
  }

  if (!country) {
    return <p>Country not found</p>;
  }

  return (
    <div className="container">
      <h1>{country.name.common}</h1>
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Area:</strong> {country.area} km²</p>
      <p><strong>Borders:</strong></p>
      <ul>
        {country.borders?.length > 0 ? (
          country.borders.map((border) => (
            <li key={border}>
              <a href={`/${border}`}>{border}</a>
            </li>
          ))
        ) : (
          <p>No borders available</p>
        )}
      </ul>
    </div>
  );
}

export default CountryDetailsPage;
