import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const CountryDetails = () => {

    const [country, setCountry] = useState(null);
    const { countryId } = useParams();
    console.log(countryId);

    const getCountryDetails = async id => {
        try {
            const response = await axios.get(
                `https://ih-countries-api.herokuapp.com/countries/${id}`
            );
            //array of countries
            console.log(response.data);
            setCountry(response.data);
            
        } catch (error) {
            console.log('error fetching countries');
            
        }
    };

    useEffect(() => {
       getCountryDetails(countryId);
    }, [countryId]);
   

    //atualiza com o setCountry
    //so colocar variaveis dentro do dependencies array
    //quando usamos informaçao externa, sempre colocar como argumento no async
    //countryId is the dependence 
    // a dependencie roda a funçao de novo 
    //quando o id muda, temos q escrever de novo na dependencies 
   
    return (
        <div className="container">
        <p style={{fontSize: "24px", fontWeight: "bold"}}>Country Details</p>
        
            {!country && <p>Loading..</p>}
            {country && (
                <>
                <h1>{country && country.name.common}</h1>

<table className="table">
  <thead></thead>
  <tbody>
    <tr>
      <td style={{width: "30%"}}>Capital</td>
      <td>{country.capital}</td>
    </tr>
    <tr>
      <td>Area</td>
      <td>
        {country.area} km
        <sup>2</sup>
      </td>
    </tr>
    <tr>
      <td>Borders</td>
      <td>
        <ul>
            {country.borders.map(border => {
                return (
                    <li key={border}>
                        <Link to={`/${border}`}>{border}</Link>
                    </li>
                );
            })}  
        </ul>
      </td>
    </tr>
  </tbody>
</table>
</>
 )}
</div>     
    );
};

export default CountryDetails;
