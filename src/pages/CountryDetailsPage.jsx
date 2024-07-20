import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CountryDetails() {
  const { code } = useParams();
  const [country, setCountry] = useState("");

  useEffect(() => {
    fetch(`https://ih-countries-api.herokuapp.com/countries/${code}`)
      .then((response) => response.json())
      .then((data) => setCountry(data))
      .catch((error) => console.log(error));
  }, [code]);
  if (!country) return <h1>Loading...</h1>;
  return (
    <>
      <div className="flex flex-col justify-center items-center align-center">
        <h1 className="text-3xl font-bold text-center m-4">WikiCountries</h1>
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
          alt="flag"
        />
        <h2 className="text-2xl font-bold text-center m-4">
          Country: {country.name.official}
        </h2>
        <div className="flex flex-col w-1/2">
          <h3 className="text-lg m-4 text-start border-b border-gray">Capital: {country.capital}</h3>
          <h3 className="text-lg m-4 text-start border-b border-gray">Area: {country.area}Km²</h3>
          {country.borders.length > 0 && (
            <>
              <h3 className="text-lg  m-4 text-start">Borders: </h3>
              <ul className="list-disc ml-4 m-4 border-b border-gray">
                {country.borders.map((border, index) => (
                  <li key={index} className="text-start"><Link to={`/${border}`}>{border}</Link></li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CountryDetails;
