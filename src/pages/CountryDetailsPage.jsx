import { useEffect } from "react";
import { useState } from "react";
import axios, { Axios } from "axios";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";


function CountryDetails() {

    const [details, setDetails] = useState(null)

    const { countryId } = useParams()


    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)

            .then(response => {

                setDetails(response.data)
            })
            .catch(error => {
                console.error('There was an error!', error);
            })
    }, [countryId])

    if (!details) {
        return (
            <p>Loading...</p>
        )
    }

    console.log(details);

    return (
        <>
            <div className="container">
                <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Country Details</p>
                <>
                    <h1>{details.name.common}</h1>

                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td style={{ width: '30%' }}>Capital</td>
                                <td>{details.capital}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>
                                    {details.area}
                                    <sup>2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td> <ul>
                                    {details.borders.map((elm) => {
                                        return (
                                            <li><Link to={`/${elm}`}>{elm}</Link></li>
                                        )
                                    })}
                                </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
            </div>
        </>
    )
}

export default CountryDetails;
