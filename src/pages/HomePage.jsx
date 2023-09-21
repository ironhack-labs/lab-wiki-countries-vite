import { useState, useEffect } from "react";
import axios from "axios";

const apiURL = "https://ih-countries-api.herokuapp.com/countries";

function HomePage() {
    const [fetching, setFetching] = useState(true);
    const [countries, setCountries] = useState([]);


    useEffect(() => {
        
        axios.get(apiURL).then((response) => {
            setCountries(response.data);
            setFetching(false);
        });

        // const res = async  ()=> {
        //     const result = await axios.get(apiURL)
        //     console.log(result)
        //     setCountries(result.data)
        // }

        // res()

    }, []);

    return (
        <div className="centered-container">
            <h3>List of countries</h3>

            {countries.map((country) => {
                return (
                    <div key={country.name.common}>
                        {country.name.common}
                    </div>
                )
            })}
        </div>
    );

}




export default HomePage;

