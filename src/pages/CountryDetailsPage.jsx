import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



function CountryDetails() {

    const {countryId} = useParams()

    const [countryData, setCountryData] = useState("") 
 
    useEffect(() => {
    
        axios
            .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`) 
            .then(response => {
                setCountryData(response.data)

            })
      
            .catch(err => console.log(err))

        }, [countryId])

    return (
  
    <div>
        <h1>{countryData.name ? countryData.name.common : "Loading..."}</h1>
        <p>Area: {countryData.area} km2</p>
        <p>Capital: {countryData.capital}</p>
    </div>
    );
}

export default CountryDetails;
