import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch(
          "https://ih-countries-api.herokuapp.com/countries"
        );
        const data = await response.json();
        setCountriesData(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    }

    fetchCountries();
  }, []);

  return (
    <div>
      <header className="font-bold text-center h-4 text-red-950 mt-4">
        WikiCountries: Your Guide to the World
      </header>
      <div>
        {countriesData.length > 0 ? (
          <ul>
            {countriesData.map((country) => (
              <li
                key={country.alpha3Code}
                className="h-5 
                             text-2xl text-center font-bold text-green-600"
              >
                <img className="h-5 w-5 " src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/>
                <Link to={`country/${country.alpha3Code}`}  >{country.name.official}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading countries...</p>
        )}
      </div>
    </div>
  );
}
