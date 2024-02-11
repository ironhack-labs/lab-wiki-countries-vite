import { useEffect, useState } from "react";
import { getCountries } from "../services/countryServices";
import ListItem from "../components/ListItem";

function HomePage() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries()
            .then((countriesApi) => {
                setCountries(countriesApi)
            })
            .catch((err) => console.error(err))
    }, []);

    return(
        <div className="container" style={{ maxHeight: "90vh", overflow: "scroll" }}>
        <h1 style={{ fontSize: '24'}}>WikiCountries: Your Guide to the World</h1>
        <div className="list-group">
            {countries.map((country) => {
                return (
                    <ListItem key={country.name.common} country ={country}/>
                )
            })}
        </div>
        </div>
    )

}

export default HomePage;
