import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function CountryDetails() {
  const [country, setCountry] = useState("");
  let { countryId } = useParams();

  useEffect(() => {
    const getCountryDetails = async () => {
      try {
        const response = await axios.get(
          ` https://ih-countries-api.herokuapp.com/countries/${countryId}`
        );

        console.log(response);
        setCountry(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCountryDetails();
  }, [countryId]);

  return (
    <div className="container">
      {country ? (
        <>
          <h1>{country.name.common}</h1>

          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: "30%" }}>Capital</td>
                <td>{country.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders &&
                      country.borders.map((border) => (
                        <li>
                          <Link to={`/${border}`}>{border}</Link>
                        </li>
                      ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <p>Loading...</p>
      )}

      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>
    </div>
  );
}

export default CountryDetails;
