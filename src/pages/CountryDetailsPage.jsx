import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"


const CountryDetails = () => {

    const { countryId } = useParams()

    const [countryDetails, setCountryDetails] = useState('')

    useEffect(() => {
        axios
            .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then(response => setCountryDetails(response.data))

    }, [])


    return (
        <>
            <h2>Country Details</h2>
            {
                countryDetails ?

                    <div className="container">
                        <div>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`} alt="" />
                            <h2>{(countryDetails.name.official)} </h2>
                        </div>
                        <div className='row'>
                            <div className='col-6'>Capital </div>
                            <div className='col-6'>{(countryDetails.capital[0])}</div>
                        </div>

                        <hr />
                        <div className="row">
                            <div className="col-6"> Area</div>
                            <div className="col-6">{(countryDetails.area)}</div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-6">
                                Borders
                            </div>
                            <div className="col-6">
                                {
                                    countryDetails.borders.map(eachBorder => {
                                        return (
                                            <div key={eachBorder}>
                                                <Link to={`/${eachBorder}`} onClick={() => CountryDetails()}>{eachBorder}</Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    : <p>Loading...</p>
            }
        </>
    )
}

export default CountryDetails;





