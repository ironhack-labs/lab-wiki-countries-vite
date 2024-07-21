import { useState, useEffect } from "react";
import axios from "axios";





function HomePage() {
  
    const API_URL = "https://ih-countries-api.herokuapp.com/countries"

    const [countries, setCountries] = useState([]);
    
    const getCountries = () => {
        axios
            .get(`${API_URL}/`)
            .then((response) => setCountries(response.data))
            .catch((error) => console.log(error));
    }
  
    useEffect(() => {
        getCountries();
      },[])

    return (
    <div>
      {/* <!-- Bootstrap container wrapper div --> */}
      <div className="container" style={{ maxHeight: "90vh", overFlow: "scroll"}}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>WikiCountries: Your Guide to the World</h1>

        <div className="list-group">
            {countries &&
                countries.map((country,i) => {
                    return (
                        <a key={i} className="list-group-item list-group-item-action" href={`/${country.alpha3Code}`}>
                            {country.alpha2Code.toLowerCase()} {country.name.common}
                        </a>
                    );
                })}
          
          
          {/* <a className="list-group-item list-group-item-action" href="/AFG">
            🇦🇫 Afghanistan
          </a>
          <a className="list-group-item list-group-item-action" href="/AGO">
            🇦🇴 Angola
          </a>
          <a className="list-group-item list-group-item-action" href="/AIA">
            🇦🇮 Anguilla
          </a>
          <a className="list-group-item list-group-item-action" href="/ALA">
            🇦🇽 Åland Islands
          </a>
          <a className="list-group-item list-group-item-action" href="/ALB">
            🇦🇱 Albania
          </a>
          <a className="list-group-item list-group-item-action" href="/AND">
            🇦🇩 Andorra
          </a>
          <a className="list-group-item list-group-item-action" href="/ARE">
            🇦🇪 United Arab Emirates
          </a>
          <a className="list-group-item list-group-item-action" href="/ARG">
            🇦🇷 Argentina
          </a>
          <a className="list-group-item list-group-item-action" href="/ARM">
            🇦🇲 Armenia
          </a>
          <a className="list-group-item list-group-item-action" href="/ASM">
            🇦🇸 American Samoa
          </a>
          <a className="list-group-item list-group-item-action" href="/ATA">
            🇦🇶 Antarctica
          </a>
          <a className="list-group-item list-group-item-action" href="/FLK">
            🇫🇰 Falkland Islands
          </a>
          <a
            className="list-group-item list-group-item-action active"
            href="/FRA"
          >
            🇫🇷 France
          </a>
          <a className="list-group-item list-group-item-action" href="/ZWE">
            🇿🇼 Zimbabwe
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
