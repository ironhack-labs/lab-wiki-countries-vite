import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function CountryDetails() {

    const { countryAlpha3Code } = useParams()
    const [country, setCountry] = useState(null)


    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryAlpha3Code}`)
            .then(response => {

                const country = response.data
                console.log(country)
                setCountry(country)
            })
    }, [])


    if (!country) {
        return (
            <p>loading</p>
        )
    }


    const countryImg = `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`

    return (

        <div>
            <h3>Country Details</h3>
            <img src={countryImg} alt="" />
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}km</p>
            {
                country.borders.map(border => {
                    return (
                        <div>
                            < Link key="{border}" to={`/${border}`} > {border}</Link>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default CountryDetails
