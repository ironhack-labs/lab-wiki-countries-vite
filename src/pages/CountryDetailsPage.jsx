import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { getCountry } from "../services/CountriesService";
import { Link, useParams } from "react-router-dom";

function CountryDetails() {
  const [countryDetail, setCountryDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  const { countryId } = useParams();

  useEffect(() => {
    getCountry(countryId)
      .then((response) => {
        console.log(response.name);
        setCountryDetail(response);
        setIsLoading(false)
      })
      .catch((err) => console.error(err));
  }, [countryId]);

  return (
    <>
      <Navbar />
      <div className="container">
        <p >Country Details</p>
        {isLoading? <p>Loading...</p> : null}
        
        {countryDetail ? (
          <>
            <h1>{countryDetail.name?.common}</h1>

            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{countryDetail.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {countryDetail.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {countryDetail.borders.map((border, index)=>(
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
        ) : null 
        }
      </div>
    </>
  );
}

export default CountryDetails;
