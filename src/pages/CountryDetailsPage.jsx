import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';

function CountryDetailsPage() {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      const response = await fetch(`https://ih-countries-api.herokuapp.com/countries/${countryId}`);
      const data = await response.json();
      setCountry(data);
    };

    fetchCountry();
  }, [countryId]);

  if (!country) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="container">
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Country Details</p>
        <h1>{country.name.common}</h1>

        <table className="table">
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{country.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{country.area} km<sup>2</sup></td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {country.borders.map(border => (
                    <li key={border}>
                      <a href={`/${border}`}>{border}</a>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountryDetailsPage;
