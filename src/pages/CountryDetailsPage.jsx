import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CountryDetails() {
    const[country, setCountries] = useState({})
    const[isLoading, setIsLoading] = useState(true)

    const{countryId} = useParams()

    useEffect(() =>{
        loadCountries()
    }, [countryId])

    const loadCountries = () => {
        axios
        .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
        .then(response =>{
            setCountries(response.data)
            setIsLoading(false)
        })
        .catch(err => console.log(err))
    }

    const flagUrl = isLoading ? '' : `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`;

    const countryBorders = isLoading ? [] : country.borders.map((border, index) => (
        <p key={index}>{border}</p>
    ));

    return (
    <div className = "HomeCountries">
    <h1>Country Details</h1>
    {
        isLoading
        ?
        <h1>Cargando...</h1>
        :
        <article>
                        <img src={flagUrl} alt={country.name.common} />
                        <h1>{country.name.official}</h1>

                        <div className="styling countryCap">
                            <p>Capital</p>
                            <p>{country.capital}</p>
                        </div>
                        <div className="styling countryArea">
                            <p>Area</p>
                            <p>{country.area}km</p>
                        </div>
                        <div className="styling">
                            <p>Borders</p>
                            <p className="countryBorders">{countryBorders}</p>
                        </div>
                    </article>
    }
    </div>
    )
}

export default CountryDetails;
