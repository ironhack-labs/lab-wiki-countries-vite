import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CountryDetails() {

    const { countryId } = useParams()
    const [countryInfo, setCountryInfo] = useState(null)

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`).then((response) => {
            // console.log(response.data)
            setCountryInfo(response.data);
        });
    }, []);

    if (countryInfo === null) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (

        <>
            <div>

                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Country Details</p>


                <div class="container">

                    <img src={` https://flagpedia.net/data/flags/icon/72x54/${(countryInfo.alpha2Code).toLowerCase()}.png`} />
                    <p>{countryInfo.name.common}</p>

                    <hr class="line" />

                    <div className="row">
                        <div className="col">
                            <p>Capital</p>
                        </div>
                        <div className="col">
                            <p>{countryInfo.capital}</p>
                        </div>
                    </div>

                    <hr class="line" />

                    <div className="row">
                        <div className="col">
                            <p>Area</p>
                        </div>
                        <div className="col">
                            <p>{countryInfo.area} km2</p>
                        </div>
                    </div>

                    <hr class="line" />

                    <div className="row">
                        <div className="col">
                            <p>Borders</p>
                        </div>
                        <div className="col">
                            <p>{countryInfo.borders}</p>
                        </div>
                    </div>


                </div>
            </div>
        </>


    )

}

export default CountryDetails;




