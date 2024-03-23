import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CountryTable() {
  const BASE_URL = "https://ih-countries-api.herokuapp.com";

  const [countries, setCountries] = useState([]);

  function countryCodeToFlagEmoji(countryCode) {
    return countryCode
      .toUpperCase()
      .split("")
      .map((letter) => String.fromCodePoint(127397 + letter.charCodeAt(0)))
      .join("");
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/countries`);
        console.log(response);
        return setCountries(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <table className="table">
      <tbody>
        {countries.map((country) => (
            <tr key={country._id}>
              <Link to={`/countries/${country.alpha2Code}`}>
                <th scope="row">
                  {countryCodeToFlagEmoji(country.alpha2Code)}{" "}
                  {country.name.common}
                </th>
              </Link>
            </tr>
        ))}
      </tbody>
    </table>
  );
}
