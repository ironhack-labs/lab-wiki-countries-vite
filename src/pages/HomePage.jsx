import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
    const [countries, setCountries] = useState([]);

    //sempre usar o try catch com async
    const getCountries = async () => {
        try {
            const response = await axios.get(
                'https://ih-countries-api.herokuapp.com/countries'
            );
            //array of countries
            console.log(response.data);
            setCountries(response.data);
            
        } catch (error) {
            console.log('error fetching countries');
            
        }
    };

    //para pegar a informaçao do api. determina o momento que pega a informaçao. cria um setInterval constantemente
    //async function nao pode estar dentro do useEffect e depois chama a funçao dentro do useEffect
    useEffect(() => {
        getCountries();
    }, []);


    return (
        <div 
        className="container" 
        tyle={{maxHeight: "90vh", overflow: "scroll"}}>

        <h1 style={{fontSize: "24px"}}>
            WikiCountries: Your Guide to the World
            </h1>

        <div className="list-group">
            {countries.map(country => {
                return (
                    <Link key={country._id} 
                    className="list-group-item list-group-item-action" to= {country.alpha3Code}>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
                        <p>{country.name.common}</p>

                    </Link>

                );
            })}
          
          
        </div>
      </div>
    );


};

export default HomePage;
