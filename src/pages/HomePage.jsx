import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((res) => setCountriesData(res.data));
  }, []);

  return (
    <div
      className="container"
      style={{ maxHeight: "90vh", overflow: "scroll" }}
    >
      <h1 style={{ fontSize: "24px" }}>
        WikiCountries: Your Guide to the World
      </h1>

      <div className="list-group">
        {countriesData.map((country, index) => (
          <Link
            key={index}
            className="list-group-item list-group-item-action"
            to={`/${country.alpha3Code}`}
          >
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              style={{ width: "50px" }}
              alt={country.alpha2Code}
            />
            <p>{country.name.common}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
