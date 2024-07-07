import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CountryDetails() {
  const [countryDetails, setCountryDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let { country } = useParams();

  useEffect(() => {
    console.log("countries");

    if (country) {
      axios
        .get(`https://ih-countries-api.herokuapp.com/countries/${country}`)
        .then((country) => {
          setCountryDetails(country.data);
          console.log(country.data);
          setIsLoading(false);
        })
        .catch((error) => console.error("error message", error));
    }
  }, [country]);

  if (isLoading) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }
  return (
    <div>
      <Navbar />

      <div className="container">
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>

        <h1>{countryDetails.name.common}</h1>

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
                  {countryDetails.borders
                    ? countryDetails.borders.map((neighbour) => {
                        return (
                          <li key={neighbour}>
                            <Link to={`/${neighbour}`}>{neighbour}</Link>
                          </li>
                        );
                      })
                    : null}
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
