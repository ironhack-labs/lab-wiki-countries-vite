import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function CountryDetails() {
  const { countryId } = useParams();
  const [countryDetail, setCountryDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const apiUrl =
    "https://ih-countries-api.herokuapp.com/countries/" + countryId;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((resp) => setCountryDetail(resp.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [apiUrl]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h1>Country Details</h1>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetail.alpha2Code.toLowerCase()}.png`}
      />
      <div key={countryDetail._id}>
        <p>Capital:{countryDetail.capital}</p>
        <p>Area:{countryDetail.area} km2</p>
        <p>Borders:</p>
        {countryDetail.borders &&
          countryDetail.borders.map((e) => (
            <ul className="list-group" key={e}>
              <Link className="list-group-item" to={"/" + e}>
                {e}
              </Link>
            </ul>
          ))}
      </div>
    </>
  );
}

export default CountryDetails;
