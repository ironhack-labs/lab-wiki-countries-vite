import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const CountryDetails = () => {

    const { countryId: country_alpha3 } = useParams()



    const [details, setDetails] = useState()

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${country_alpha3}`)
            .then(response => {
                setDetails(response.data)
            })
    }, [country_alpha3])




    if (!details) {
        return (<p>Loading...</p>)
    }

    console.log(details)
    return (
        <div className="details">
            <h1>Country Details</h1>
            <hr />
            <article >
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${details.alpha2Code.toLowerCase()}.png`} alt="" />
                <p className="name">{details.name.common}</p>
                <p className="capital">Capital: {details.capital[0]}</p>
                <p className="area"> Area: {details.area} km<sup>2</sup></p>
                <p>Borders: </p>
                {
                    details.borders.map(elm => {
                        return (
                            <article key={elm}>
                                <Link to={`/${elm}`}> {elm} </Link>
                            </article>
                        )
                    })
                }
            </article>
        </div>
    )
}

export default CountryDetails;
