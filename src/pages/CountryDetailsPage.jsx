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
    }, [alpha3Code])

    return (
        <>
            <div className="container">
                <div className="container" >
                    <h1 className="titlePage" >Country Details</h1>

                    <div>
                        {country ? (
                            <div className="row">
                                <div className="col">
                                    <h2 className="nameDetails">Name: {country.name.common}</h2>
                                    <h3 className="detDetails">Capital: {country.capital}</h3>
                                    <h3 className="detDetails">Area: {country.area} km\xB2</h3>
                                </div>
                                <div className="col" >
                                    {country.borders.map(e => (
                                        <p key={e} >
                                            <Link to={`/${e}`}>
                                                {e}
                                            </Link>
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )
                            : 'Loading...'
                        }
                    </div >
                </div>
            </div>

        </>

    )
}

export default CountryDetailsPage
