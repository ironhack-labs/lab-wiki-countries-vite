import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CountryDetails() {

    const { countryId } = useParams()
    const [countryDetails, setCountryDetails] = useState()

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then(countryData => {
                setCountryDetails(countryData.data)
            })
        // .catch(err => console.log(err))
    }, [countryId])


    return (

        !countryDetails
            ?
            <h1>wait a moment...</h1>
            :
            <div className="CountryDetails">
                <div className="container">
                    <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>

                    <h1>{countryDetails.name.common}</h1>

                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td style={{ width: "30%" }}>Capital</td>
                                <td>{countryDetails.capital}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>
                                    {countryDetails.area}
                                    <sup>2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    <ul>
                                        {countryDetails.borders.map(e => {

                                            return (
                                                <li>
                                                    <Link to={`/${e}`}>{e}</Link>
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
            </div>
    )
}

export default CountryDetails;
