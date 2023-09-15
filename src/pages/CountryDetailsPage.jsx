import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CountryDetails() {
  const { countryId } = useParams();
  const [countryDetails, setCountryDetails] = useState({});

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries/" + countryId)
      .then((response) => {
        //console.log(response.data)
        setCountryDetails(response.data);
        console.log(countryDetails.name.official);
      })
      .catch((e) => {
        console.log("", e);
      });
  }, []);

  return (
    <div>
      <h1>Country Details</h1>

      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            WikiCountries
          </a>
        </div>
      </nav>

      <div className="container">
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>


        <h1>{countryDetails.capital}</h1>

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
                {countryDetails.borders && countryDetails.borders.map((countryBorder, i) => {
                    return <li key={i}>
                    <a href="/AND">{countryBorder}</a>
                  </li>
               
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
