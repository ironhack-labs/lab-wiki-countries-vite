import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CountryDetailsPage = () => {
  const [country, setCountry] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://ih-countries-api.herokuapp.com/countries/${id}`)
      .then((data) => data.json())
      .then((data) => setCountry(data));
  }, []);
  if(country === null){
    return <h1>Loading...</h1>
  }
  else{
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-600 mb-3">
        <div className="container mx-auto">
          <a className="text-white text-xl font-bold" href="/">
            WikiCountries
          </a>
        </div>
      </nav>

      {/* Container */}
      <div className="container mx-auto p-4">
        <p className="text-2xl font-bold mb-4">Country Details</p>

        <h1 className="text-3xl font-bold mb-4">{country.name.official}</h1>

        <table className="table-auto w-full border-collapse border border-gray-200">
          <tbody>
            <tr>
              <td className="border border-gray-200 p-2 w-1/3">Capital</td>
              <td className="border border-gray-200 p-2">{country.capital[0]}</td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">Area</td>
              <td className="border border-gray-200 p-2">
                {country.area} km<sup>2</sup>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">Borders</td>
              <td className="border border-gray-200 p-2">
                <ul className="list-disc list-inside">
                {country.borders.map((border) =>{return(
                  <li key={border}>
                      
                         <a className="text-blue-600 hover:underline" to={`/country/${border}`}>{border}</a>
                     
                    
                  </li>
                )})}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
}
export default CountryDetailsPage;
