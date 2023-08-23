import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function HomePage() {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios.get('https://ih-countries-api.herokuapp.com/countries')
            .then(response => {
                setCountries(response.data)
            })
    }, [])
    // console.log(countries)

    return (

        <div className="ListCountries">

            <h1>WikiCountries: Your Guide to the World</h1>

            {countries.map((elm) => {
                return (
                    <article key={elm._id}>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} />
                        <br />
                        <Link to={elm.alpha3Code}>{elm.name.common}</Link>
                    </article>
                )
            })}

        </div>
    )
}

export default HomePage
