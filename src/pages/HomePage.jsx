import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios
            .get('https://ih-countries-api.herokuapp.com/countries')
            .then(response => setCountries(response.data))
            .catch(err => console.log(err))

    }, [])

    console.log(countries)
    return (
        <div className="HomePage container">
            {<div className="row">
                <h1>WikiCountries: Your Guide to the World</h1>
                {
                    countries.map(elm => {
                        return <div key={elm._id} className="col-12">
                            <div className="row">
                                <p>

                                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} alt={elm.name.common} />

                                    <Link to={`/${elm.alpha3Code}`} >{elm.name.common}</Link>
                                </p>
                            </div>
                            <hr />
                        </div>
                    })
                }
            </div>
            }
        </div>
    )
}

export default HomePage;
