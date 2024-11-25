import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
    const [countriesData, setCountriesData] = useState([]);

    useEffect(() => {
      fetch("https://ih-countries-api.herokuapp.com/countries")
        .then((response) => response.json())
        .then((data) => setCountriesData(data));
    }, []);

    const countries = countriesData.map((country) => (
      <Link key={country.alpha3Code} className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`}>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common} />
        <p>{country.name.common}</p>        
      </Link>
    ));

    return (
      <div className="container" style={{maxHeight: "90vh", overflow: "scroll"}}>
        <h1>WikiCountries: Your Guide to the World</h1>
        {countriesData && <div className="list-group">{countries}</div>}
      </div>  
    );
}

export default HomePage;
