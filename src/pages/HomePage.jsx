import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


const apiURL = 'https://ih-countries-api.herokuapp.com/countries';
const flagURL = 'https://flagpedia.net/data/flags/icon/72x54/'

function HomePage() {
    const [countries, setCountries] = useState([]);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        console.log("useEffect - Initial render (Mounting)");
        axios.get(apiURL).then((response) => {
            setCountries(response.data);
            setFetching(false);
        });
    }, []);

    return (
        <div className="container" style={{ maxHeight: "90vh", overflow: "scroll" }}>
            <h1 style={{ fontSize: "24px" }}>WikiCountries: Your Guide to the World</h1>
            {fetching && <p>Loading ...</p>}

            <div className="list-group">
                {countries.map((country) => {
                    return (
                        <div key={country._id}>
                            <Link className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`}>
                                <img src={`${flagURL}${country.alpha2Code.toLowerCase()}.png`}
                                    alt="" />
                                {country.name.common}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HomePage;
