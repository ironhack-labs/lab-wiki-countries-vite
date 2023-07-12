import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function CountryDetailsPage(props) {
  const [data, setData] = useState();
  const [borders, setBorders] = useState([]);
  const { countryId } = useParams();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${countryId}`
      );
      setData(response.data);
      setBorders(response.data.borders);

      //   console.log("Borders:", data.borders);
      console.log("borders", borders);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [countryId]);

  console.log("data:", data);

  return (
    <div className="container">
      {data ? (
        <>
          <h1>{data.name.common}</h1>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${data.alpha2Code.toLowerCase()}.png`}
            alt=""
            style={{ width: "100px", marginRight: "10px" }}
          />

          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: "30%" }}>Capital</td>
                <td>{data.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {`${data.area}`} km<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>

                <td>
                  <ul>
                    {borders &&
                      Array.isArray(borders) &&
                      borders.map((border, index) => (
                        <li key={index}>
                          <Link to={`/${border}`}>{border}</Link>
                        </li>
                      ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <p>loading </p>
      )}
    </div>
  );
}
