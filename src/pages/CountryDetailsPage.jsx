import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function CountryDetails() {
  const BASE_URL = "https://ih-countries-api.herokuapp.com";
  const parameter = useParams();

  console.log(parameter);

  const [country, setCountry] = useState({});

  function countryCodeToFlagEmoji(countryCode) {
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
    getData();
  }, []);

  return (
    <div>
      <div className="container">{
        <h1>Country Details</h1>
        <h2>{country.name.common}</h2>
        <table className="table">
          <tbody>
            <tr>
              <td scope="row">Capital</td>
              <td scope="row">{country.capital}</td>
            </tr>
            <tr>
              <td scope="row">Area</td>
              <td scope="row">{country.area}</td>
            </tr>
            <tr>
              <td scope="row">Borders</td>

              <td scope="row">
                <ul>
                  {country.borders ? (
                    country.borders.map((border) => (
                      <li key={border}>{border}</li>
                    ))
                  ) : (
                    <li>No borders</li>
                  )}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        || 'Loading country details...'}</div>
    </div>
  );
}

export default CountryDetails;
