import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const API_URL = "https://ih-countries-api.herokuapp.com";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/countries`)
      .then((res) => {
        setCountries(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />

      <div>
        <div className="container" style={{ overflow: "scroll" }}>
          <h1>Wikicountries: Your guide to the world</h1>

          <div className="countries-list">
            {countries &&
              countries.map((country) => {
                return (
                  <Link key={country.alpha4Code} to={`/${country.alpha3Code}`}>
                    <img
                      src={`https://flagpedia.net/data/flags/icon/72x54${country.alpha2Code.toLowerCase()}.png`}
                      width="50"
                    />
                    <p>{country.name.common}</p>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
