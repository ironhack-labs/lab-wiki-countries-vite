import { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

function HomePage() {

    const [countries, setCountries] = useState(null)

    useEffect(() => {
        axios.get("https://ih-countries-api.herokuapp.com/countries")
        .then(response => {
            setCountries(response.data)
            console.log(response.data[0])
            console.log(response.data[0]._id)
            console.log(response.data[0].name.common)
        })
        .catch(e => {
            console.log(e)
        })
    },[])

    return (
        <div className="container">
            <h1>WikiCountries: Your Guide to the World</h1>
            {countries !==null &&
            countries.map((obj) => {
                return (
                <div className="list-group" key={obj._id}>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${obj.alpha2Code}.png`}/>
                    <Link to={`/${obj.alpha3Code}`} className="list-group-item list-group-item-action">{obj.name.common}</Link>
                </div>
                )
            })}
        </div>
    )
}

export default HomePage;
