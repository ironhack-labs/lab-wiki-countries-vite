import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiURL = "https://ih-countries-api.herokuapp.com/countries";

function HomePage() {
    const [fetching, setFetching] = useState(true);
    const [countries, setCountries] = useState([]);


    useEffect(() => {

        // axios.get(apiURL).then((response) => {
        //     setCountries(response.data);
        //     setFetching(false);
        // });

        const res = async  ()=> {
            const result = await axios.get(apiURL)
            console.log(result)
            setCountries(result.data)
        }

        res()

    }, []);
    console.log(countries)
    return (
        <div className="centered-container">
            <h3>List of countries</h3>

            {countries.map((country) => {
                console.log(country)
                return (
                    <div key={country.name.common}>
                        <Link to={`countryDetailsPage/${country.alpha3Code}`} > {country.name.common} </Link>
                    </div>
                )
            })}
        </div>
    );

}




export default HomePage;

