import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CountryDetails() {
    const [country, setCountry] = useState(null);
    const [error, setError] = useState(null); // State to track errors
    const { countryId } = useParams();
    const API_URL = 'https://ih-countries-api.herokuapp.com';

    const getCountry = () => {
        axios
            .get(`${API_URL}/countries/${countryId}`)
            .then((response) => {
                setCountry(response.data);
                setError(null); // Clear any previous errors
            })
            .catch((error) => {
                setError("Failed to fetch country details.");
                console.log("API Error:", error);
            });
    };

    useEffect(() => {
        if (countryId) {
            getCountry();
        }
    }, [countryId]);

    if (error) {
        return <div className="container"><p style={{ color: 'red' }}>{error}</p></div>;
    }

    if (!country) {
        return <div className="container"><p>Loading...</p></div>;
    }

    return (
        <div className="container">
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>
            <h1>{country.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }}>Capital</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {country.area}
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {country.borders && country.borders.length > 0 ? (
                                    country.borders.map((border, index) => (
                                        <li key={index}>
                                            <Link to={`/countries/${border}`}>{border}</Link>
                                        </li>
                                    ))
                                ) : (
                                    <li>No borders</li>
                                )}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CountryDetails;