import { useState, useEffect  } from "react";
import Navbar from "../components/Navbar";
import { listCountries } from "../services/CountriesService";
import { Link } from "react-router-dom";
import './HomePage.css'

function HomePage() {
  const [countries, setCountries] = useState([])

  useEffect(()=>{
    listCountries()
     .then(response => {
        setCountries(response)
     })
     .catch(err => console.error(err))
  },[])


  return (
    <div>
      <Navbar />
      <div className="list-group ">
        <h1>WikiCountries: Your Guide to the World</h1>
        {countries.map((country) => (
            <Link   key={country._id} className="list-group-item list-group-item-action d-flex flex-column align-items-center" to={country.alpha3Code}
            ><img src= {`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />  {country.name.common}</Link>
        ))}
      </div>
    </div>
    )
}

export default HomePage;
