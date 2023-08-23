import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import '../index.css'



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
  
    <div className="country-details">
        <h1>{countryData.name ? countryData.name.common : "Loading..."}</h1>
        <p>Area: {countryData.area} km2</p>
        <p>Capital: {countryData.capital}</p>
        <p>Colindantes:</p>
            <ul>

            {countryData.borders ? countryData.borders.map((border, index) => (
                <li key={index}>        
                    <a href={`/${border}`}>
                         {border}
                    </a>
                </li>
            )) : null}

            </ul>
    </div>
    );
}

export default CountryDetails;
