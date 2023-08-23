import axios from "axios";
import { useEffect, useState } from "react";
import './HomePage.css'
import { Link } from "react-router-dom";

const HomePage = () => {

    const [countries, setcountries] = useState([])

    useEffect(() => {
        axios.get('https://ih-countries-api.herokuapp.com/countries')
            .then(response => {
                setcountries(response.data)
            })
    }, [])



    console.log(countries)
    return (
        <div className="list">
            <h1>WikiCountries: Your Guide to the World</h1>
            {
                countries.map(elm => {
                    return (
                        <article key={elm._id} className="list container row">
                            <div className="card col" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} alt="" />
                                    <br />
                                    <Link to={`./${elm.alpha3Code}`}>{elm.name.common}</Link>
                                </div>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    )
}

export default HomePage;
