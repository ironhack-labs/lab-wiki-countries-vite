import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function HomePage() {
  const [countries, setCountries] = useState([]);
  const apiUrl = "https://ih-countries-api.herokuapp.com/countries";
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => setCountries(response.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(countries);
  const sortCountries = [...countries].sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );

  return (
    <>
      {sortCountries.map((e) => (
        <ul key={e._id} className="list-group">
          <Link to={"/" + e.alpha3Code} className="list-group-item ">
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${e.alpha2Code.toLowerCase()}.png`}
            />
            {e.name.common}
          </Link>
        </ul>
      ))}
    </>
  );
}

export default HomePage;
