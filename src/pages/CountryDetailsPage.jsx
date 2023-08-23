import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"

const CountryDetails = () => {


    const [country, setCountry] = useState(null)


    const { countryId } = useParams()

    useEffect(() => {

        axios
            .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then(response => setCountry(response.data))
            .catch(err => console.log(err))


    }, [])


    if (!country) {
        return (
            <h1>Loading...</h1>
        )

    } else {

        return (


            <>
                <div className="container">

                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                    <h1>{country.name.common}</h1>



                </div>

                <div className="container" >
                    <li><strong>Capital </strong>{country.capital}</li>
                    <li> <strong>Area </strong>{country.area}</li>
                    <li> <strong>Borders with: </strong>{country.borders.map(country => <Link to={`/${country}`}>{country}</Link>)}</li>
                </div>

            </>

        )
    }

}

export default CountryDetails
