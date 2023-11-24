import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom";

const baseURL = "https://ih-countries-api.herokuapp.com/countries";

function HomePage() {

    const [country, setCountry] = useState([])

    useEffect(() => {
        axios
            .get(baseURL)
            .then((response) => setCountry(response.data))
            .catch(err => console.log(err))
    }, [])

    console.log(country)



    return (
        <>
            <h1>"WikiCountries: Tu guía del mundo"</h1>
            {
                country.map(elm => {
                    return (
                        <div key={elm._id}>
                            <img
                                src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`}
                                alt={`${elm.name.common} flag`} />
                            <Link to={`/${elm.alpha3Code}`}>{elm.name.common}</Link>
                        </div>

                    )
                })
            }
        </>



    )
}


export default HomePage;
