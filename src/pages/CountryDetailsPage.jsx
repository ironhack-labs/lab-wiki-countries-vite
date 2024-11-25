import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CountryDetails() {
    const {countryId} = useParams();
    const [countryData, setCountryData] = useState(null);

    useEffect(() => {
        fetch(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
        .then((response) => response.json())
        .then((data) => setCountryData(data));
    }, [countryId]);

    if (!countryData) {
        return <p>Loading...</p>; // Handle loading state
    }

    const borders = countryData.borders.map((border) => (
        <li key={border}><a href={`/${border}`}>{border}</a></li>
    ));

    return(
        <div className="container">
        <p style={{fontSize: "24px", fontWeight: "bold"}}>Country Details</p>

        <h1>{countryData.name.common}</h1>

        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
              <td>{countryData.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                551695 km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {borders}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default CountryDetails;
