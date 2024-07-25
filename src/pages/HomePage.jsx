import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function HomePage() {
    const [countries, setCountries] = useState(null);

    useEffect(() => {
        const getCountry = async () => {
      try {
        const response = await axios.get(
          "https://ih-countries-api.herokuapp.com/countries"
        );
        setCountries(
            response.data.sort((a, b) => 
            a.name.common.localeCompare(b.name.common)
            )
        );
      } catch (error) {
        console.log(error);
      }
    };

        getCountry();
    }, []);
    return (
    <div 
    className="container" 
    style={{maxHeight: "90vh", overflow: "scroll"}}
    >
        <h1 style={{fontSize: "24px"}}>
            WikiCountries: Your Guide to the World
        </h1>

        <div className="list-group">
        {countries ? (
        countries.map((country) => (
        <Link 
        className="list-group-item list-group-item-action" 
        to={`/${country.alpha3Code}`}
        key={country._id}
        >
        <img 
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
        alt="country flag"
        style={{ width: "72px", height: "54px"}}
        />{""}
        <br />
            {country.name.common}
        </Link>
        ))
        ) : (
            <p>Loading...🕒</p>
        )}
    </div>
    </div>
    );
}

export default HomePage;