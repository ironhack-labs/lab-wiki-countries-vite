/** @format */
import React, { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import axios from "axios";



function CountryDetails() {
    const [id, setId] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [countryData, setCountryData] = useState();
    

    let {countryId} = useParams();
    

    useEffect(() => {
        setId(countryId);
        
        axios({
      method: "get",
      url: `https://ih-countries-api.herokuapp.com/countries/${id}`
    })

    .then(data => {

        setCountryData(data.data);
        console.log(data.data);
        
        setIsLoading(false);

    })

    .catch((error) => {
      console.error("Error fetching countries:", error);
    });

   


    }, [id]);
    
    


  return (
    <div>
      <h1>Country Details</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${(countryData.alpha2Code).toLowerCase()}.png`}></img>
            
          <h1>{countryData.name.common}</h1>
          <h2>Capital: {countryData.capital}</h2>
          <h2>Area: {countryData.area} km 2</h2>
          <h1>Language: {Object.values(countryData.languages).join(", ")}</h1>
          <h1>Region: {countryData.region}</h1>
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
 