import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function CountryDetailsPages() {
  const BASE_URL = "https://ih-countries-api.herokuapp.com";
  const parameter = useParams();

  console.log(parameter);

  const [country, setCountry] = useState(null);

  function countryCodeToFlagEmoji(countryCode) {
    if (!countryCode) return "";
    return countryCode
      .toUpperCase()
      .split("")
      .map((letter) => String.fromCodePoint(127397 + letter.charCodeAt(0)))
      .join("");
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/countries/${parameter.alpha3Code}`
        );
        console.log(response);
        return setCountry(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (parameter.alpha3Code) {
      getData();
    }
  }, [parameter.alpha3Code]);

  return (
    <div className="container">
      <h1>Country Details</h1>
      {country ? (
        <>
          <div className="country-flag">
            {countryCodeToFlagEmoji(country.alpha2Code)}
          </div>
          <h2>{country.name?.common}</h2>
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">Capital</th>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <th scope="row">Area</th>
                <td>{country.area} Km2</td>
              </tr>
              <tr>
                <th scope="row">Borders</th>
                <td>
                  <ul className="border-list">
                    {country.borders ? (
                      country.borders.map((border) => (
                        <li key={border}>
                          <Link to={`/${border}`}>{border}</Link>
                        </li>
                      ))
                    ) : (
                      <li>No borders</li>
                    )}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
}

export default CountryDetailsPages;
