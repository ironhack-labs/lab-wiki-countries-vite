import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
    const[countries, setCountries] = useState([])
    const[isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadCountries()
    }, [])

    const loadCountries = () => {
        axios
        .get("https://ih-countries-api.herokuapp.com/countries")
        .then(response =>{
            setCountries(response.data)
            setIsLoading(false)
        })
        .catch(err => console.log(err))
    }


    return (
        <div className = "HomeCountries">
        <h1>WikiCountries: Your Guide to the World</h1>
        {
            isLoading
            ?
            <h1>Cargando...</h1>
            :
            countries.map(state => {
                    const flagUrl = `https://flagpedia.net/data/flags/icon/72x54/${state.alpha2Code.toLowerCase()}.png`
                return(
                    <article key={state._id}>
                        <Link to={`/${state.alpha3Code}`}>
                            <h2>{state.name.official}</h2>
                            <img src={flagUrl} alt="" />
                            </Link>
                    </article>
                )
            }

            )
        }
        </div>
    )
}

export default HomePage;
