import { useEffect, useState } from 'react'
import "./HomePage.css"
import axios from 'axios'
import { Link } from 'react-router-dom'

const countriesApiURL = 'https://ih-countries-api.herokuapp.com/countries'
const flagpediaApiBaseURL = 'https://flagpedia.net/data/flags/icon/72x54/'
const countriesInitialValue = []

const HomePage = () => {

    const [fetching, setFetching] = useState(true)
    const [countries, setCountries] = useState(countriesInitialValue)

    useEffect(() => {
        axios.get(countriesApiURL).then(responseFromAPI => {
            setCountries(responseFromAPI.data)
            setFetching(false)

            console.log(responseFromAPI.data)
        })
    }, [])

    return (
        <div className="HomePage container">
            <p>WikiCountries: Your Guide to the World</p>
            {fetching && <h2>Loading... </h2>}

            <div className="list-group">
                {
                    countries.map(country => {
                        const formatedAlpha2Code = country.alpha2Code.toLowerCase()

                        return (
                            <Link
                                key={country._id}
                                className="list-group-item list-group-item-action"
                                to={`/${country.alpha3Code}`} >
                                <img
                                    src={`${flagpediaApiBaseURL}${formatedAlpha2Code}.png`}
                                    alt={`${country.name.common} flag`}
                                />
                                {country.name.common}
                            </Link>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default HomePage
