import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function CountryDetails() {
  const { countryId } = useParams();
  const [countryDetails, setCountryDetails] = useState({});

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries/" + countryId)
      .then((response) => {
        console.log("here");
        setCountryDetails(response.data);
      })
      .catch((e) => {
        console.log("", e);
      });
  }, [countryId]);

  const imgSource = countryDetails.alpha2Code
    ? `https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`
    : "";

  return (
    <div>
      <h1>Country Details</h1>

      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            WikiCountries
          </Link>
        </div>
      </nav>

      <div className="container">
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>

        <img src={imgSource} alt="" />

        <h1>{countryDetails.name && countryDetails.name.common}</h1>

        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{countryDetails.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countryDetails.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {countryDetails.borders &&
                    countryDetails.borders.map((countryBorder, i) => {
                      return (
                        <li key={i}>
                          <Link to={"/" + countryBorder}>{countryBorder}</Link>
                        </li>
                      );
                    })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountryDetails;
