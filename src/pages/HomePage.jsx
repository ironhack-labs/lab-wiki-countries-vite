import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://ih-countries-api.herokuapp.com/countries')
            .then(response => {
                const { data } = response
                setData(data)
            })
    }, [])






    return (
        <>
            <h3>WikiCountries: Your Guide to the World</h3>

            {
                data.map(country => {

                    const countryImg = `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`
                    return (
                        <li key={country._id}>
                            <img src={countryImg} alt="{country.name.official}" />
                            <Link to={country.alpha3Code}>{country.name.common}</Link>
                        </li>
                    )

                })
            }
        </>
    )
}

export default HomePage;
