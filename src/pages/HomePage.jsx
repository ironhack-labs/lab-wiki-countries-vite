import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState("");

  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await axios.get(
          "https://ih-countries-api.herokuapp.com/countries"
        );

        setCountries(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCountry();
  }, []);

  return (
    <div
      className="container"
      style={{ maxHeight: "90vh", overflow: "scroll" }}
    >
      <h1 style={{ fontSize: "24px" }}>
        WikiCountries: Your Guide to the World
      </h1>

      {countries ? (
        countries.map((country) => (
          <div className="list-group">
            <Link
              className="list-group-item list-group-item-action"
              to={`/${country.alpha3Code}`}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt="No Image"
              />
              {country.name.common}
            </Link>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default HomePage;
