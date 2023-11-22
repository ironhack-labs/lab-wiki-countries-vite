import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import React from "react";

const URL = 'https://ih-countries-api.herokuapp.com/countries'

function HomePage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios
            .get(`${URL}`).then((response) => {
                setData(response.data);
            });
    }, [])

    return (
        <>
            <h1>WikiCountries: Your Guide to the World</h1>
            <ul className="list-group">
                {data ?
                    data.map(e => (<Link className="list-group-item list-group-item-action" key={e._id} to={`/${e.alpha3Code}`}>{e.name.common}   <img src={`https://flagpedia.net/data/flags/icon/72x54/${e.alpha2Code.toLowerCase()}.png`} alt="flag"></img></Link>))
                    : 'Loading...'
                }
            </ul >
        </>
    )


}

export default HomePage;