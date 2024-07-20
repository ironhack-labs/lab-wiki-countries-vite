import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState("");

  useEffect(() => {
    fetch("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);
  if (countries === "") {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <h1 className="text-2xl font-bold m-2">WikiCountries: Your Guide to the World</h1>
        {countries.map((country) => (
          <div className="p-2 mr-28 ml-28 border border-solid border-gray flex justify-center items-center align-center" key={country._id}>
            <img className="w-5 h-4" src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag" />
            <NavLink to={`/${country.alpha3Code}`}>{country.name.official}</NavLink>
          </div>
        ))}
      </>
    );
  }
}

export default HomePage;
