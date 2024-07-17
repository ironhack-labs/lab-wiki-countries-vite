import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CountryDetailsPage() {
  const { countryCode } = useParams();
  const [country, setCountry] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`)
      .then((response) => {
        if (response.status === 200) {
          setCountry(response.data);
        } else {
          console.log("Country not found");
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [countryCode]);
  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <h1>{country.name.common}</h1>
        <h2>Capital: {country.capital}</h2>
        <h2>Area: {country.area} km²</h2>
        {country.borders.length > 0 && (
          <>
            <h2>Borders:</h2>
            <ul className="borders">
              {[...country.borders].map((border) => {
                return (
                  <Link to={`/${border}`} key={border}>
                    {border}
                  </Link>
                );
              })}
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default CountryDetailsPage;
