import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CountryDetails = () => {
    const { countryId } = useParams()
    const [country, setCountry] = useState()

    useEffect(() => {
        axios
            .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then(response => setCountry(response.data))
            .catch(err => next(err))
    }, [countryId])

    return (
        !country
            ?
            <>
                <h1>Country Details</h1>
                <p>Loading</p>
            </>
            :
            <div className="container">
                <h1>Country Details</h1>
                <figure><img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" /></figure>

                <h1>{country.name.common}</h1>

                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td >Capital</td>
                            <td>{country.capital[0]}</td>
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
                                    {country.borders.map(e => {
                                        return (
                                            <li key={e}>
                                                <Link to={`/${e}`}>{e}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

    )
}

export default CountryDetails;
