import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function HomePage() {

    const url = "https://ih-countries-api.herokuapp.com/countries";

    const [data, setData] = useState([]);

    const fetchInfo = () => {
        axios
            .get(url)
            .then((res) => setData(res.data))
            .catch(error => console.log(error))
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    return (

        <div className="container" style={{ maxHeight: "90vh", overFlow: "scroll" }}>

            <h1 style={{ fontSize: "24px" }}>WikiCountries: Your Guide to the World</h1>

            <div className="list-group">

                {
                    data.map((dataObj, index) => {
                        return (
                            <Link to={`/${dataObj.alpha3Code}`}>
                                <div key={index} className="list-group-item list-group-item-action">
                                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${dataObj.alpha2Code.toLowerCase()}.png`} alt={dataObj.name.common} />{dataObj.name.common}
                                </div>
                            </Link>
                        )
                    })
                }

            </div>
        </div >

    )
}

export default HomePage;
