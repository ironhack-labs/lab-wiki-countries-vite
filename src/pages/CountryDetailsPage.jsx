import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function CountryDetailsPage() {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => {
        setCountry(response.data);
      })
      .catch((error) => console.error(error));
  }, [countryId]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>Country Details</h1>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area} km²</p>
      <p>Borders:</p>
      <ul>
        {country.borders.map((border) => (
          <li key={border}>
            <Link to={`/${border}`}>{border}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryDetailsPage;
