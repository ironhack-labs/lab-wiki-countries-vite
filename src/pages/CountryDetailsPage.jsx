import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function CountryDetails() {
  const { countryId } = useParams();
  const [countryInfo, setCountryInfo] = useState(null); // Change initial state to null
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((res) => {
        setCountryInfo(res.data);
      })
      .finally(() => {
        setLoading(false); // Set loading to false after data is fetched
      });
  }, [countryId]);

  return (
    <div className="container">
      {/* Render "Country Details" immediately */}
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>

      {/* Show loading message if data is still being fetched */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${countryInfo.alpha2Code.toLowerCase()}.png`}
            alt={countryInfo.alpha2Code}
          />
          <h1>{countryInfo.name.common}</h1>

          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: "30%" }}>Capital</td>
                <td>{countryInfo.capital ? countryInfo.capital[0] : "N/A"}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {countryInfo.area ? countryInfo.area : "N/A"} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {countryInfo.borders && countryInfo.borders.length > 0 ? (
                      countryInfo.borders.map((border) => (
                        <li style={{ listStyle: "none" }} key={border}>
                          <a href={`/${border}`}>{border}</a>
                        </li>
                      ))
                    ) : (
                      <li style={{ listStyle: "none" }}>N/A</li>
                    )}
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

export default CountryDetails;
