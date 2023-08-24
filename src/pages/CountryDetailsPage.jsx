import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const CountryDetails = () => {

    let { countryId } = useParams()

    const [countryDetails, setCountryDetails] = useState('')
    useEffect(() => {
        axios
            .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then((response) => {
                setCountryDetails(response.data);
                console.log(response.data)
            })
            .catch(err => console.log(err));
    }, [countryId])

    countryDetails.map(countryId.border)

    if (!countryDetails) {

        return <p>Loading country details ...</p>

    } else {
        return (

            <div className="country-details">
                {countryDetails.map((border, index) => (

                    <div>
                        <h2>Name: {countryDetails.name.common}</h2>
                        <p>Capital: {countryDetails.capital[0]}</p>
                        <p>Area: {countryDetails.area}</p>
                        <ul>
                            <li key={index}>{border}</li>
                        </ul>

                    </div>
                ))}

            </div>
        )

    }
}

export default CountryDetails
