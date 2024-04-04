import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CountryTable() {
  const BASE_URL = "https://ih-countries-api.herokuapp.com";

  const [countries, setCountries] = useState(null);

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
    <>
      {countries ? (
        <>
          <table className="table">
            <tbody>
              {countries.map((country) => (
                <tr key={country._id}>
                  <td className="country-list" scope="row">
                    <Link  to={country.alpha3Code}>
                      <div className="country">
                        <div className="country-flag">
                          {countryCodeToFlagEmoji(country.alpha2Code)}
                        </div>
                        <div className="country-title">
                          {country.name.common}
                        </div>
                      </div>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </>
  );
}
