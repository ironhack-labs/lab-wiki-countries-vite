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
            .get(`${URL}`)
            .then((response) => {
                setData(response.data);
            });
    }, [])

    return (
        <>
            <h1 className="titlePage">WikiCountries: Your Guide to the World</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="list-container" style={{ maxHeight: '500px', maxWidth: '600px', overflowY: 'auto', border: '2px solid black' }}>
                    {data ?
                        data.sort((a, b) => a.name.common.localeCompare(b.name.common)).map(e => (
                            <Link className="list-group-item list-group-item-action" key={e._id} to={`/${e.alpha3Code}`}>
                                <span className="countryName">{e.name.common} </span>
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${e.alpha2Code.toLowerCase()}.png`} alt="flag"></img>
                            </Link>
                        ))
                        : 'Loading...'
                    }
                </div>
            </div >
        </>
    )


}

export default HomePage;