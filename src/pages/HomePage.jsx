import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './../Styling/HomePage.css'

function HomePage() {

    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => loadCountries(), [])

    const loadCountries = () => {

        axios
            .get("https://ih-countries-api.herokuapp.com/countries")
            .then(response => {
                setCountries(response.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="HomePage">
            <h1>WikiCountries: Your Guide to the World</h1>

            {

                isLoading
                    ?
                    <h2>Cargando...</h2>
                    :

                    countries.map(elm => {

                        const flagUrl = `https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`

                        return (
                            <article className="countries" key={elm._id}>
                                <Link to={`/${elm.alpha3Code}`}>
                                    <img src={flagUrl} alt="" />
                                    <h3>{elm.name.official}</h3>
                                </Link>
                            </article>
                        )
                    })
            }
        </div>
    )
}

export default HomePage;
