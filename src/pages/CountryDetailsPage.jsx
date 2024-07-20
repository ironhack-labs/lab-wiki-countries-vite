// CountryDetails.jsx

import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CountryDetails() {

    const [country, setCountry] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch(``).then(data => data.json()).then(data)
    })
    return (
      <div className="container mx-auto px-4">
        <p className="text-2xl font-bold mb-4 p-5">Country Details</p>
        <h1 className="text-3xl font-bold mb-8">France</h1>
  
        <div className="rounded-lg overflow-hidden bg-white shadow-md">
          <table className="min-w-fit divide-y divide-gray-200">
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-gray-50">
                <td className="px-6 py-4 w-1/4 font-semibold">Capital</td>
                <td className="px-6 py-4">Paris</td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 w-1/4 font-semibold">Area</td>
                <td className="px-6 py-4">551695 km<sup>2</sup></td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 w-1/4 font-semibold">Borders</td>
                <td className="px-6 py-4">
                  <ul className="divide-y divide-gray-200">
                    <li className="py-2"><a href="/AND" className="border-b-2 border-gray-600">Andorra</a></li>
                    <li className="py-2"><a href="/BEL" className="border-b-2 border-gray-600">Belgium</a></li>
                    <li className="py-2"><a href="/DEU" className="border-b-2 border-gray-600">Germany</a></li>
                    <li className="py-2"><a href="/ITA" className="border-b-2 border-gray-600">Italy</a></li>
                    <li className="py-2"><a href="/LUX" className="border-b-2 border-gray-600">Luxembourg</a></li>
                    <li className="py-2"><a href="/MCO" className="border-b-2 border-gray-600">Monaco</a></li>
                    <li className="py-2"><a href="/ESP" className="border-b-2 border-gray-600">Spain</a></li>
                    <li className="py-2"><a href="/CHE">Switzerland</a></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }