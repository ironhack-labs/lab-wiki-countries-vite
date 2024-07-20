import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setCountries(data);
        } else {
          throw new Error('Failed to fetch countries data');
        }
      } catch (error) {
        console.error("Error fetching countries data:", error);
      }
    };

    fetchCountriesData();
  }, []);

  return (
    <div className="container max-h-90vh overflow-y-auto">
      <h1 className="text-3xl font-bold md:text-4xl lg:mb-8 p-3">WikiCountries: Your Guide to the World</h1>
      <ul className="list-group space-y-2 p-5">
        {countries.map(country => (
          <li key={country.cca3} className="list-group-item flex items-center">
            <Link to={`/${country.cca3}`}>
              <img src={`https://flagcdn.com/72x54/${country.cca2.toLowerCase()}.png`} alt={country.name.common} className="w-10 h-auto mr-3" />
              {country.name.common}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;