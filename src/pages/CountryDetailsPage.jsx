import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";


function CountryDetails() {
    const [country, setCountry] = useState(null)
    const { countryId } = useParams() // function to call to get dynamic values from url

    const getCountryDetails = async id => {
       

        try {
            const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
            //console.log(response.data);
            setCountry(response.data);
        } catch (error) {
            console.log('error fetching country')
        }
    }

    // we always use useEffect with an API. It stops the page from making infinite calls
    useEffect(() => {
        getCountryDetails(countryId);
    }, [countryId]) // we put countryId dependency here every time when we have a dynamic value in the url

    return (
        <div className="container">
        <p style={{fontSize: "24px", fontWeight: 'bold'}}>Country Details</p>
        {!country && <p>Loading...</p>}
        {country && (
            <>
            <h1>{country && country.name.common}</h1>

            <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: '30%'}}>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                {country.borders.map(border => {
                    return (
                        <li key={border}>
                            <Link to={`/${border}`}>{border}</Link>
                        </li>
                    )
                })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        </>
        )}

      </div>


    )
}

export default CountryDetails;
