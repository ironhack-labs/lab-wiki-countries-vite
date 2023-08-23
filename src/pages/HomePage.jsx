import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios"
import './HomePage.css'

const apiUrl = "https://ih-countries-api.herokuapp.com/countries"

function HomePage() {

    const countriesArray = []

    const [countries, setCountries] = useState(countriesArray)      

        
    useEffect(() => {
        axios
            .get(apiUrl)
            .then((response) => {
                setCountries(response.data)
                console.log(response.data)
            })
            .catch(err => console.log(err))
    }, [])


    const linkFlag = "https://flagpedia.net/data/flags/icon/72x54/"

    return (
    <>
        <h1>WikiCountries: Your Guide to the World</h1>
        {countries.map((country) => {

            const lowerCode = (country.alpha2Code).toLowerCase()
            const flagSrc = `${linkFlag}${lowerCode}.png`
  

            return (
                <Link to={`/${country.alpha3Code}`}>

                <div className="countryAndFlag">
                <p key={country._id}>
                    <img src={flagSrc} alt="" /> <br />
                    {country.name.common}</p>
                </div>
                <hr />
                </Link>
            )
        })
        }
    </>
    )
}


export default HomePage
