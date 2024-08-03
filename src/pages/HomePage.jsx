import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://ih-countries-api.herokuapp.com"


function HomePage() {

  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchCountriesData()
  }, [])

  const fetchCountriesData = () => {
    axios
      .get(`${API_URL}/countries`)
      .then(response => {
        setCountries(response.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }


  return (
    <div className="container" style={{ maxHeight: "90vh", overflow: "scroll" }}>

      <h1 style={{ fontSize: "24px" }} >WikiCountries: Your Guide to the World</h1>
      <div className="list-group">
        {
          isLoading
            ?
            <h2>Loading Countries...</h2>
            :
            countries.map(country => {
              return (
                <Link key={country._id} to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action">
                  <div className="flex-column justify-content-center">
                    <img src={`https://www.flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" style={{ maxWidth: "50px" }} />
                    <p>
                      {country.name.official}
                    </p>
                  </div>
                </Link>
              )
            })
        }
      </div>

    </div>

  )
}

export default HomePage;
