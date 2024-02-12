import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CountryDetailsPage() {

    const [countryDet, setCountryDet] = useState(null)
    const {countryId} = useParams()

    useEffect (() => {
        axios.get("https://ih-countries-api.herokuapp.com/countries/" + countryId)
        .then((response) => {
            setCountryDet(response.data);
            console.log(response.data)
        })
        .catch((err)=> console.log(err)) 
    },[countryId])



    return ( 
        <div className="container">
            {countryDet !== null &&
                <div>
                    <p>Country Details</p>
                    <h1>{countryDet.name.common}</h1>

                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Capital</td>
                                <td>{countryDet.capital}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>
                                {countryDet.area} km
                                    <sup>2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    <ul>
                                        {countryDet.borders.map((item, index) => 
                                            <li key={index}><Link to={`/${item}`}>{item}</Link></li>)}
                                    </ul>                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            }
        </div>

)
}
export default CountryDetailsPage;

