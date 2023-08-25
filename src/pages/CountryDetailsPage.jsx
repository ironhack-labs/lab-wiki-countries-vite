import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function CountryDetails() {
    
    const {countryId} = useParams();
    const [countryInfo, setCountryInfo] = useState(null);
    const [fetching, setFetching] = useState(true);

    useEffect(()=>{
        axios
        .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
        .then((response) => {
            setCountryInfo(response.data);
            setFetching(false);
        })
        .catch((error) => {
            setFetching(true);
        })
    }, [countryId]);

    return (
        <div>
            <h2>Country Details</h2>
            {!countryInfo && <h3>Country not found!</h3>}

            {countryInfo && (
                <div>
                    <h3>{countryInfo.name.common}</h3>
                    <h4>Capital:</h4>
                    <p>{countryInfo.capital}</p>
                    <h4>Area:</h4>
                    <p>{countryInfo.area} km²</p>
                    <h4>Borders:</h4>
                    {countryInfo.borders.map(el => {
                        return(
                            <div key={el}>
                                <Link to={`/${el}`}>{el}</Link>
                            </div>                            
                        );
                    })}
                </div>    
             )}
        </div>
    )              
}

export default CountryDetails;
