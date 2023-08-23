import { useEffect } from "react";
import { useState } from "react";
import axios, { Axios } from "axios";
import { Link } from "react-router-dom";

function HomePage() {

    const [country, setCountry] = useState([])

    useEffect(() => {
        axios.get('https://ih-countries-api.herokuapp.com/countries')

            .then(response => {

                setCountry(response.data)
            })
            .catch(error => {
                console.error('There was an error!', error);
            })
    }, [])

    console.log(country);

    return (
        <>
            <div className="container" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                <h1 style={{ fontSize: '24px' }}>WikiCountries: Your Guide to the World</h1>
                {country.map((elm) => {
                    return (
                        <>
                            <Link to={`/${elm.alpha3Code}`}>
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} alt="Bandera" />
                                <p>{elm.name.common}</p>
                                < hr />
                            </Link>
                        </>
                    )

                })}




            </div >

        </>
    )
}


export default HomePage;
