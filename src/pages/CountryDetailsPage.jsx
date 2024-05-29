import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function CountryDetails() {
  const [country, setCountry] = useState(null);
  const { countryId } = useParams();

  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await axios.get(
          "https://ih-countries-api.herokuapp.com/countries/" + countryId
        );

        setCountry(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    country ? console.log(country.borders) : null;
    getCountry();
  }, [countryId]);

  return (
    <div className="container">
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>

      {country ? (
        <>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt="country flag"
            style={{ width: "72px", height: "54px" }}
          />
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
                    {country.borders.length ? (
                      country.borders.map((border) => (
                        <li key={border}>
                          <Link to={`/${border}`}>{border}</Link>
                        </li>
                      ))
                    ) : (
                      <p>this country has no borders</p>
                    )}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <p>Loading...🕒</p>
      )}
    </div>
  );
}

export default CountryDetails;