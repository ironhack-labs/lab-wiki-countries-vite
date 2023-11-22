import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const HomePage = () => {

    const [countries, setCountries] = useState()

    useEffect(() => {
        axios.get('https://ih-countries-api.herokuapp.com/countries')
            .then(countriesData => setCountries(countriesData.data))
            .catch(err => console.log(err))
    }, [])

    return (
        !countries
            ?
            <h1>Loading...</h1>
            :
            <>
                <div className="hero">
                    <h1>WikiCountries: Your Guide to the World</h1>

                    <div className="container" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                        <h1 style={{ fontSize: '24px' }}>WikiCountries: Your Guide to the World</h1>

                        <div className="list-group">
                            {
                                countries.map(elm => {
                                    return (
                                        <Link
                                            key={elm.name.common}
                                            to={`/${elm.alpha3Code}`}
                                            className="list-group-item list-group-item-action"
                                        ><img
                                                src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`}
                                                alt={elm.name.common}
                                                style={{ width: '25px' }}
                                            /> {elm.name.common}
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div >
            </>
    )
}

export default HomePage
