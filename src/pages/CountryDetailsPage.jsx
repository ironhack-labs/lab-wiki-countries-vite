import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CountryDetails() {

    const { countryId } = useParams();
    const [ country, setCountry ] = useState();

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then((response) => {
                console.log(response.data);
                setCountry(response.data);
            });
    }, [countryId]);

    if (!country) {
        return <p>Loading...</p>
    } else {
        return (
            <div className="container">
                <p style={{fontSize: "24px", fontWeight: "bold"}}>Country Details</p>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                <h1>{country.name.common}</h1>

                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{width: "30%"}}>Capital</td>
                            <td>{country.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{country.area} km<sup>2</sup></td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {country.borders.map(border => (
                                        <li key={border}><Link to={`/${border}`} >{border}</Link></li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>    
        </div>
    )}
}

export default CountryDetails;
