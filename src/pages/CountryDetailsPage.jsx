import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
const URL = "https://ih-countries-api.herokuapp.com/countries/"

function CountryDetailsPage() {

    const { alpha3Code } = useParams()
    const [country, setCountry] = useState()
    useEffect(() => {
        axios
            .get(`${URL}${alpha3Code}`)
            .then((response) => {
                setCountry(response.data)
                console.log(response.data)

            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    return (
        <>
            <h1>Country Details</h1>

            <div>
                {country ? (<>
                    <h2>Name: {country.name.common}</h2>
                    <h3>Capital: {country.capital}</h3>
                    <h3>Area: {country.area} km\xB2</h3>

                    {country.borders.map(e => (
                        <p key={e} >
                            <Link to={`/${e}`}>
                                {e}
                            </Link>
                        </p>
                    ))}

                </>
                )
                    : 'Loading...'
                }
            </div >

        </>

    )
}

export default CountryDetailsPage
