import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const HomePage = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios
            .get('https://ih-countries-api.herokuapp.com/countries')
            .then(response => response)
            .then(response => setCountries(response.data))

    }, [])


    return (

        <div className="container" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            <h1 style={{ fontSize: '24px' }}>WikiCountries: Your Guide to the World</h1>

            {countries.map(elm => {

                return (

                    <div className="list-group" key={elm._id}>
                        <Link className="list-group-item list-group-item-action" to={`/${elm.alpha3Code}`} >Go to {elm.name.common} details</Link>
                        <p>{elm.name.common}</p>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} alt="" />
                    </div>
                )
            })}

        </div>
    )
}

export default HomePage
