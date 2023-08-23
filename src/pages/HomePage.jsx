import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const HomePage = () => {

    const [countriesList, setCountriesList] = useState('')

    useEffect(() => {
        axios
            .get(`https://ih-countries-api.herokuapp.com/countries`)
            .then(response => setCountriesList(response.data))

    }, [])

    return (
        <>
            <h1>WikiCountries: Your Guide to the World</h1>
            <div class="list-group">
                {
                    countriesList ?
                        countriesList.map(country => {
                            return (
                                <div key={country._id} class="list-group-item list-group-item-action" style={{ maxHeight: '50px' }}>
                                    <img style={{ maxHeight: '15px' }} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />

                                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`/${country.alpha3Code}`}>  {country.name.official}</Link>
                                </div>
                            )
                        })
                        : <h3>Loading...</h3>
                }
            </div>
        </>
    )
}

export default HomePage;
