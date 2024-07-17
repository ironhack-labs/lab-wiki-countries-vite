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
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>WikiCountries: Your Guide to the World</h1>
      <ul>
        {countries.map((country) => {
          return (
            <Link to={`/${country.alpha3Code}`} key={country.cca3}>
              <h2>{country.name.common}</h2>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.name.common}
              />
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default HomePage;
