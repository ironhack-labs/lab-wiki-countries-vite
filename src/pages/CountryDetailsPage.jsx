import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './../Styling/CountryDetailsPage.css'

function CountryDetails() {

    const [country, setCountry] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const { countryId } = useParams()

    useEffect(() => {
        loadCountry()
    }, [countryId])

    const loadCountry = () => {

        axios
            .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then(response => {
                setCountry(response.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const flagUrl = isLoading ? '' : `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`;

    const countryBorders = isLoading ? [] : country.borders.map((border, index) => (
        <p key={index}>{border}</p>
    ));


    return (
        <div>
            <h2>Country Details</h2>

            {
                isLoading
                    ?
                    <h1>Loading...</h1>
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
