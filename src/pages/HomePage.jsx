import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";


function HomePage() {

    const [countries, setCountries] = useState();

 useEffect(() => {
  
    
    axios({
      method: "get",
      url: "https://ih-countries-api.herokuapp.com/countries",
    })

    .then((data)=> {
        
        const countryArray = data.data;
        
         console.log(countryArray[0].alpha2Code);
        setCountries(countryArray);
    
    
    });

 },[])


 
 
return (
  <div>
    <h1>WikiCountries: Your Guide to the World.</h1>
    {countries &&
      countries.map((country) => (
       <Link to={`/${country.alpha3Code}`}><div key={country._id}>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${(country.alpha2Code).toLowerCase()}.png`}></img>
          <h3>{country.name.official}</h3>
        </div></Link> 
      ))}
  </div>
);



}

export default HomePage;
