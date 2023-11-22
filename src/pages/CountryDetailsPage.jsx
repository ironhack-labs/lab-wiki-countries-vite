import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const CountryDetails = () => {

    const { countryId } = useParams()
    const [country, setCountry] = useState()

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then(countryData => {
                setCountry(countryData.data)
            })
            .catch(err => console.log(err))
    }, [countryId])

    return (
        !country
            ?
            <h1>Loading...</h1>
            :
            <>
                <div className="container">
                    <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Country Details</p>

                    <h1>{country.name.common}</h1>

                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td style={{ width: '30%' }}>Capital</td>
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
                                    <ul style={{ listStyle: 'none' }}>
                                        {
                                            country.borders.map(elm => {

                                                return (
                                                    <li key={elm} >
                                                        <Link to={`/${elm}`}>{elm}</Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
    )
}

export default CountryDetails
