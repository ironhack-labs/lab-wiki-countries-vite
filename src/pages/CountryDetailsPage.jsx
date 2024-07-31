import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function CountryDetailsPage() {
  const { alpha3Code } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCountryDetails = async () => {
    try {
      const response = await fetch(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`);
      const data = await response.json();
      setCountry(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching country details:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCountryDetails();
  }, [alpha3Code]);

  return (
    <div className="container">
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Country Details</p>
      {loading ? (
        <div>Loading...</div>
      ) : !country ? (
        <div>Country not found</div>
      ) : (
        <>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt={`${country.name.common} flag`}
            style={{ marginRight: '10px' }}
          />
          <h1>{country.name.common}</h1>
          <table className="table">
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{country.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders.map(border => (
                      <li key={border}>
                        <Link to={`/${border}`}>{border}</Link>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default CountryDetailsPage;