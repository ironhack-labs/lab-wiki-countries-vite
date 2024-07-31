import React, { useState, useEffect } from "react";
import axios from "axios";
import CountriesList from "../components/CountriesList";
import { Link } from "react-router-dom";

function HomePage() {
  let title = "WikiCountries: Your Guide to the World";

  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    try {
      const response = await axios.get(
        "https://ih-countries-api.herokuapp.com/countries"
      );
      const data = response.data;
      console.log(data);
      setCountries(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const countriesList = countries.map((country) => {
    return (
        <div className="container" key={country.alpha2Code}>
        <Link className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`}>
        <img 
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} 
              alt={`${country.name.common} flag`}
            />
          <CountriesList country={country} />
        </Link> 
      </div>
    );
  });
  return (
    <body>
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div className="container" style = {{maxHeight: "90vh", overflow: "scroll" }}>
        <h1 style = {{fontize: "24px"}}> WikiCountries: Your Guide to the World</h1>
        </div>
       <div className="list-group">
        {countries.length > 0 ? (
            <a className ="list-group-item list-group-item-action" href="/">{countriesList}</a>
        ):(
            <a className ="list-group-item list-group-item-action" href="/">  Loading...</a>
        )}
  
    </div>
   </div>
  </body>
  );
}

export default HomePage;
