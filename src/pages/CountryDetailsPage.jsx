import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function CountryDetails() {

  const { alpha3Code } = useParams();
  const urlApi = `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`;

  const [foundCountry, setFoundCountry] = useState(null);

  useEffect(() => {
    axios.get(urlApi).then((resp) => {
      setFoundCountry(resp.data);
    });
  }, [alpha3Code]);

//   if(!foundCountry ) {
//     return <p>Loading...</p>
//   }

  return (
    <div>
      <h1>Country Details</h1>
        <div>
          <p>Country Name: {foundCountry.name.common}</p>
          <p>Capital: {foundCountry.capital}</p>
          <p>Area: {foundCountry.area} square kilometers</p>
          <p>Borders:</p>
        </div>
    </div>
  );
}

export default CountryDetails;
