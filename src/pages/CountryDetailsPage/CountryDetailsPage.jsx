import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function CountryDetails() {

    const { countryId } = useParams()
    const [countryDetails, setCountryDetails] = useState()
    // console.log(country_alpha3)
    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then(response => {
                const countryDetails = response.data
                setCountryDetails(countryDetails)
                // console.log(countryDetails)
            })
    }, [])

    if (!countryDetails) {
        return <p>Loading...</p>
    }
    return (
        <div className="CountryDetails">
            <h1>Country Details</h1>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`} />
            <p>País: {countryDetails.name.common}</p>
            <p>Capital: {countryDetails.capital}</p>
            <p>Área: {countryDetails.area}</p>
        </div>
    )
}

export default CountryDetails
