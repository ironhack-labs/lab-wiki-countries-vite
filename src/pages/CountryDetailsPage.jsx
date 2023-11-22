import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CountryDetails() {

    const { countryId } = useParams()
    const [country, setCountry] = useState()


    useEffect(() => {
        axios
            .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then(response => setCountry(response.data))
            .catch(err => console.log(err))
    }, [countryId])

    console.log("---------------", country)

    return (
        country
            ?
            <div className="CountryDetails">
                < h1 > Country Details</h1 >
                <div>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common} />
                    <p>{country.name.common}</p>
                </div>
                <div>
                    <div>
                        <p>Capital:    {country.capital[0]}</p>
                    </div>
                    <div>
                        <p>Area:        {country.area} km</p>
                    </div>

                    <div>
                        <p>Borders:

                            {country.borders.map(elm => {
                                return < li ><Link to={`/${elm}`}>{elm}</Link></li>
                            })}

                        </p>

                    </div>
                </div >
            </div >

            :
            <div>
                < h1 > Country Details</h1 >
                <h1>Loading...</h1>
            </div>


    )
}

export default CountryDetails;
