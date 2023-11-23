
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function CountryDetails() {


    const { countryId } = useParams()
    const [country, setCountry] = useState()

    useEffect(() => {
        axios
            .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then(responseFromAPI => setCountry(responseFromAPI.data))
            .catch(err => console.log(err))
    }, [countryId])



    return (

        !country
            ?
            <p>Cargandito...</p>
            :
            <>

                <div className="container">
                    <p >Country Details</p>
                    <h1>{country.name.common}</h1>
                    <table className="table">
                        <thead />
                        <tbody>
                            <tr>
                                <td style={{ width: "30%" }}>Capital</td>
                                <td>{country.capital}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>
                                    <p>{country.area} km</p>
                                    <sup>2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    <ul>
                                        <li>
                                            {
                                                country.borders.map((elm) => {
                                                    return (
                                                        <Link to={`/${elm}`} key={elm.id}>
                                                            {elm}
                                                            <br />
                                                        </Link>
                                                    )
                                                })
                                            }

                                        </li>

                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>


    )
}

export default CountryDetails;
