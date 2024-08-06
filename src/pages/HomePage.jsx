import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container">
      <h1>WikiCountries: Your Guide to the World</h1>
      <div className="list-group">
        {countries.map((country) => (
          <Link
            key={country.alpha3Code}
            to={`/${country.alpha3Code}`}
            className="list-group-item list-group-item-action"
          >
            <img
              src={`https://flagcdn.com/16x12/${country.alpha2Code.toLowerCase()}.png`}
              alt={`${country.name.common} flag`}
              style={{ marginRight: "10px" }}
            />
            {country.name.common}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
