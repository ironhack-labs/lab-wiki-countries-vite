import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
  const [countryList,setCountryList] = useState([]);

  useEffect(()=> {
    console.log("countries")
    axios.get('https://ih-countries-api.herokuapp.com/countries')
    .then((countries) => {
      setCountryList(countries.data);
    })
    .catch(error => console.error("error message",error));
  },[])
    return (
    <div>
        <Navbar />
      <div className="container" style={{maxHeight: "90vh", overflow: scroll}}>
        <h1 style={{fontSize: "24px"}}>WikiCountries: Your Guide to the World</h1>
        <div className="list-group">
          {countryList ? 
          countryList.map((country)=> {
              return (
                <a className="list-group-item list-group-item-action" key={country.name.official} href={`/${country.alpha3Code}`}
            >{country.name.official}</a
          >
              )
            })
          
          : null}
        </div>
    </div>
    </div>
    )
}

export default HomePage;
