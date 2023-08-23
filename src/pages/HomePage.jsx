import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {

    const [countries, setCountries] = useState([])

    useEffect(() => {

        axios.get(`https://ih-countries-api.herokuapp.com/countries`).then((countries) => {
            // console.log(countries.data)
            setCountries(countries.data);
        });

    }, []);

    return (

        <div class="list-group">

            <p style={{ fontSize: "20px", fontWeight: "bold" }}>WikiCountries: Your Guide to the World</p>
            {
                countries.map((country) => {

                    return (
                        <div style={{ maxHeight: "70px" }}>
                            <ul>
                                <img src={` https://flagpedia.net/data/flags/icon/72x54/${(country.alpha2Code).toLowerCase()}.png`} class="img" />
                                <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
                            </ul>
                        </div>
                    )
                })
            }

        </div >
    )
}

export default HomePage



