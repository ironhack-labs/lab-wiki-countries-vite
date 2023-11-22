import './HomePage.css'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {

    const [countries, setCountries] = useState([])


    useEffect(() => {
        axios.get('https://ih-countries-api.herokuapp.com/countries')
            .then(e => setCountries(e.data))
    }, [])

    return (
        <div className={"container pt-3"} style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            <h1 style={{ fontSize: '24px' }}>WikiCountries: Your Guide to the World</h1>
            <div className={"list-group pt-3"}>
                {
                    countries.map(e => {
                        return (
                            <div key={e._id}>
                                <Link to={`/${e.alpha3Code}`} className={"list-group-item list-group-item-action countriesList"}>
                                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${e.alpha2Code.toLowerCase()}.png`} alt={e.name.common} />
                                    {e.name.common}
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default HomePage;
