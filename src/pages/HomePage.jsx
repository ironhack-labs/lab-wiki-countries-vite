import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CountryDetails from "./CountryDetailsPage";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((resp) => {
        setCountries(resp.data);
      });
  }, []);

  return (
    <div
      className="container"
      style={{ maxHeight: "90vh", overflow: "scroll" }}
    >
      <h1 style={{ fontSize: "24px", margin: "20px" }}>
        WikiCountries: Your Guide to the World
      </h1>
      <ul>
        {countries.map((country) => (
          <Link
            to={`/country/${country.alpha3Code}`}
            className="countries"
            key={country.alpha3Code}
          >
            {country.name.common} <br />
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt={country.name.common}
            />
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
