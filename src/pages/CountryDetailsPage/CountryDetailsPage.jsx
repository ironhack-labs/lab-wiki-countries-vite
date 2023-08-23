import { useEffect, useState } from 'react'
import "./CountryDetailsPage.css"
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const countryApiBaseURL = 'https://ih-countries-api.herokuapp.com/countries/'
const countryInitialValue = {}

const CountryDetails = () => {

    const { alpha3Code } = useParams()

    const [fetching, setFetching] = useState(true)
    const [country, setCountry] = useState(countryInitialValue)

    useEffect(() => {
        axios.get(`${countryApiBaseURL}${alpha3Code}`).then(responseFromAPI => {
            setCountry(responseFromAPI.data)
            setFetching(false)
        })
            .catch(err => console.log(err))
    }, [alpha3Code])

    if (fetching) {
        return (
            <div className="CountryDetails">
                <p>Country Details</p>
                {fetching && <h2>Loading... </h2>}
            </div>
        )
    }
    else {
        return (
            <div className="CountryDetails">
                <p>Country Details</p>

                <div className="container">
                    <h1>{country.name.common}</h1>
                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Capital</td>
                                <td>{country.capital}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>
                                    {country.area} km
                                    <sup>2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    <ul>
                                        {
                                            country.borders.map(border => {
                                                return (
                                                    <li key={border}>
                                                        <Link to={`/${border}`}>{border}</Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div >
            </div>
        )
    }
}

export default CountryDetails
