import axios from "axios";
import Navbar from "../components/Navbar";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const API_URL = "https://ih-countries-api.herokuapp.com";

function CountryDetails() {
  const { countryId } = useParams();
  const [foundCountry, setFoundCountry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${API_URL}/countries/${countryId}`);

      setFoundCountry(res.data);
    };

    fetchData();
  }, [countryId]);
  if (!foundCountry) {
    return (
      <>
        <Navbar />
        <div>
          <p>Country details</p>
          <br />
          <p>Loadinggg</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div>
        <p>Country details</p>
        <br />
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
          alt={`flag-of-${foundCountry.name.common}`}
          style={{ width: "100px" }}
        />

        <h1>{foundCountry.name.common}</h1>

        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{foundCountry.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {foundCountry.area} km <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {foundCountry.borders.map((alpha3, i) => {
                    return (
                      <div key={i}>
                        <Link to={"/" + alpha3}>{alpha3}</Link>
                      </div>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CountryDetails;
