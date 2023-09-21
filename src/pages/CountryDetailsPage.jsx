import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const detailsURL = "https://ih-countries-api.herokuapp.com/countries/";
const flagURL = 'https://flagpedia.net/data/flags/icon/72x54/'

function CountryDetails() {
    const [foundCountry, setFoundCountry] = useState(null);

    const { countryId } = useParams();

    useEffect(() => {
        console.log("useEffect - Initial render (Mounting)");
        axios.get(`${detailsURL}${countryId}`).then((response) => {
            console.log("Country data:", response.data);
            setFoundCountry(response.data)
        })

    }, [countryId]);

    return (
        <div className="container">
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>

            {!foundCountry && <h3>Loading...</h3>}

            {
                foundCountry && (
                    <>
                        <img src={`${flagURL}${foundCountry.alpha2Code.toLowerCase()}.png`} alt={foundCountry} />
                        <h4>{foundCountry.name.common}</h4>
                        <p>Capital: {foundCountry.capital}</p>
                        <p>Area: {foundCountry.area} km<sup>2</sup></p>

                        {
                            foundCountry.borders.map((borderCountry, index) => {
                                return (
                                    <li key={index}>
                                        <Link
                                            to={`/${borderCountry}`}
                                        >{borderCountry}
                                        </Link>
                                    </li>

                                )
                            })
                        }
                        <Link to="/"> 👈🏼 to all countries</Link>
                    </>
                )
            }

        </div >
    )
}

export default CountryDetails;


{/* <Link className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`}>
    <img src={`${flagURL}${country.alpha2Code.toLowerCase()}.png`}
        alt="" />
    {country.name.common}
</Link> */}