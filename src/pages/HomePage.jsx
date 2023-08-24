import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function HomePage() {

    const [countries, setCountries] = useState([])
    useEffect(() => {
        axios
            .get("https://ih-countries-api.herokuapp.com/countries")
            .then((response) => {
                setCountries(response.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="Title">
            <h1>List of Countries</h1>
            <ul>
                {countries.map(country => (
                    <li key={country._id}>
                        <Link to={`/${country.alpha3Code}`}>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                            {country.name.common}

                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default HomePage
