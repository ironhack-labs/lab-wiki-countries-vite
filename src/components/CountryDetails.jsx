import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const API_URL = "https://ih-countries-api.herokuapp.com"

const CountryDetails = () => {
  const { countryId } = useParams()
  const [countryData, setCountryData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchCountryData()
  }, [countryId])

  const fetchCountryData = () => {
    axios
      .get(`${API_URL}/countries/${countryId}`)
      .then(response => {
        setCountryData(response.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }
  const { alpha2Code, name, capital, area, borders } = countryData
  return (
    isLoading
      ?
      <h1>Loading...</h1>
      :
      <div className="container">
        <img src={`https://www.flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`} alt="" style={{ maxWidth: "50px" }} />
        <h1>{name.official}</h1>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              {
                capital.map(cap => {
                  return <td key={cap}>{cap}</td>
                })
              }

            </tr>
            <tr>
              <td>Area</td>
              <td>
                {area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {
                    borders.map(border => {
                      return (
                        <li key={border}>
                          <Link to={`/${border}`} >{border}</Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default CountryDetails 