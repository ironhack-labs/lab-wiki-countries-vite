import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {

    const [countries, setCountries ] = useState([]);

    useEffect(() => {
        axios.get("https://ih-countries-api.herokuapp.com/countries")
            .then((response) => {
                console.log(response.data)
                setCountries(response.data)})
    }, []);

    return (
        <div  className="container" style={{maxHeight: "80vh", overflow: "scroll"}}>
            <h1 style={{fontSize: "24px"}}>WikiCountries: Your Guide to the World</h1>
            {!countries.length && <p>Loading...</p>}

            <div className="list-group">
            {countries.map(country => (
                <Link key={country._id} className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`}>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                    <br/>{country.name.common}
                </Link>
            ))}
            </div>
        </div>
    );
}

export default HomePage;
