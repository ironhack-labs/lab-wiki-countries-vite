import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCountryDetail } from "../services/countryServices";

function CountryDetails() {
  const { alpha3code } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCountryDetail(alpha3code)
      .then((countryApi) => {
        setCountry(countryApi);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false); 
      });
  }, [alpha3code]);

  if (loading) return <div>Loading...</div>;

  if (!country) return <div>No data available</div>;

  return (
    <div className="container">
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>

      <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={`${country.name.common} flag`} />

      <h1>{country.name.common}</h1>

      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>Capital: {country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((alpha3Code) => (
                  <li key={alpha3Code}>
                    <Link to={`/detail/${alpha3Code}`}>{alpha3Code}</Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
