import React, { useEffect, useState } from 'react';
import "./HomePage.css";
import { Link } from 'react-router-dom';

export default function HomePage() {
    
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("https://ih-countries-api.herokuapp.com/countries")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }, []);

    return (
        <div className="container">
            <h1>WikiCountries: Your Guide to the World</h1>
            <div className="list-group">
                {data.map((country) => (
                    <div key={country.alpha3Code}>
                       <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha3Code.toLowerCase()}.png`}  alt={country.name.common} />
                        <Link to={`/countries/${country.alpha3Code}`}>{country.name.common}</Link> 
                    </div>
                ))}
            </div>
        </div>
    );
}
