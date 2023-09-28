import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function CountryDetails() {
  const { alpha3Code } = useParams();
  const urlApi = `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`;

  const [foundCountry, setFoundCountry] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(urlApi).then((resp) => {
      setFoundCountry(resp.data).catch((error) => setError(error));
    });
  }, [alpha3Code]);

  if (!foundCountry) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Country Details</h1>
      <div>
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
          alt={foundCountry.name.common}
          style={{ width: "100px" }}
        />
        <h1>{foundCountry.name.common}</h1>
        <h3>Capital: {foundCountry.capital[0]}</h3>
        <p>
          Area: {foundCountry.area} km <sup>2</sup>
        </p>

        {foundCountry.borders.map((alpha3Code, i) => {
          return (
            <div key={i}>
              <Link to={"/country/"+ alpha3Code}>{alpha3Code}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountryDetails;
