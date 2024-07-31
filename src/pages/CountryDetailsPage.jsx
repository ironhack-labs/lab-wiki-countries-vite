import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function CountryDetailsPage() {
  const { countryCode } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`);
        setCountryData(response.data);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchCountryData();
  }, [countryCode]);

  if (!countryData) {
    return (
      <body>
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">WikiCountries</a>
            </div>
          </nav>
          <div className="container">
            <p style={{fontSize: "24px", fontWeight: "bold"}}>Country Details</p>
            <h1>Loading...</h1>
          </div>
        </div>
      </body>
    );
  }


        return (
          <body>
          <div>
            <nav className="navbar navbar-dark bg-primary mb-3">
              <div className="container">
                <a className="navbar-brand" href="/">WikiCountries</a>
              </div>
            </nav>
            <div className="container">
              <p style={{fontSize: "24px", fontWeight: "bold"}}>Country Details</p>
              <h1>{countryData.name.common}</h1>
              <table className="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td style = {{width: "30%"}}>Capital</td>
                    <td>{countryData.capital}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>
                      {countryData.area} km
                      <sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Borders</td>
                    <td>
                      <ul>
                        {countryData.borders.map(borderCode => (
                          <li key={borderCode}>
                            <a href={`/${borderCode}`}>{borderCode}</a>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </body>
      );
    };

export default CountryDetailsPage;