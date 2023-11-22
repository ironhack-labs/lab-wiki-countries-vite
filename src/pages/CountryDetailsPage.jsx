import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CountryDetails() {

    const { countryId } = useParams()
    const [country, setCountry] = useState()

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then(e => setCountry(e.data))
            .catch(err => console.log(err))
    }, [countryId])

    return (
        country
            ?
            <div key={country._id} className="container">
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
                                <ul>
                                    {
                                        country.borders.map((e, i) => {
                                            return <li key={i}><Link to={`/${e}`}>{e}</Link></li>
                                        })
                                    }
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            :
            <>
                <h1>Country Details</h1>
                <h2>Loading...</h2>
            </>
    )

}

export default CountryDetails;
