import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {

    const [countries, setCountries] = useState()

    useEffect(() => {

        axios
            .get('https://ih-countries-api.herokuapp.com/countries')
            .then(responseFromAPI => setCountries(responseFromAPI.data))
            .catch(err => console.log(err))
    }, [])


    return (
        countries
            ?
            <>
                <div className="container" style={{ maxHeight: "90vh", overflow: "scroll" }}>
                    <h1 style={{ fontSize: 45 }}> WikiCountries: Your Guide to the World</h1>
                </div>
                {
                    countries.map((elm, _id) => {
                        return (
                            <div className="container" style={{ maxHeight: "90vh", overflow: "scroll" }} key={_id}>
                                <div className="list-group">
                                    <Link to={`/${elm.alpha3Code}`} className="list-group-item list-group-item-action">
                                        <p>{elm.name.common}</p>

                                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${(elm.alpha2Code).toLowerCase()}.png`} alt="flag" />
                                        <hr />
                                    </Link>

                                </div>

                            </div>
                        )
                    })
                }
            </>
            :
            <h1>cargando..</h1>

    )
}

export default HomePage;
