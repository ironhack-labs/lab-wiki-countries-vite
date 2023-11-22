import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios
            .get('https://ih-countries-api.herokuapp.com/countries')
            .then(response => setCountries(response.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <>
            <h1>WikiCountries: Your Guide to the World</h1>
            {
                countries.map(e => {
                    return (
                        <div key={e._id}>
                            <Link to={`/${e.alpha3Code}`}>
                                <img className="flag" src={`https://flagpedia.net/data/flags/icon/72x54/${e.alpha2Code.toLowerCase()}.png`} alt={e.name.common} />
                                {e.name.common}
                            </Link>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}

export default HomePage;
