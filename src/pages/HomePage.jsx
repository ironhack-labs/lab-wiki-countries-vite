import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function HomePage() {
    const [countries, setCountries] = useState(null);

    useEffect(() => {
        axios
            .get("https://ih-countries-api.herokuapp.com/countries")
            .then((response) => {
                setCountries(response.data);
            })
            .catch((e) => {
                console.log("", e);
            });
    }, []);

    const renderList = () => {
        if (countries === null) {
            return <p>loading...</p>;
        }
        return countries.map((countrieObj) => {
            const image = countrieObj.alpha2Code.toLowerCase();
            return (
                <div key={countrieObj._id}
                    className="container"
                    style={{ maxHeight: "90vh", overflow: "scroll" }}
                >
                    <div className="list-group">
                        <Link
                            to={"/" + countrieObj.alpha3Code}
                            className="list-group-item list-group-item-action"
                        >
                            <img
                                src={
                                    "https://flagpedia.net/data/flags/icon/72x54/" +
                                    image +
                                    ".png"
                                }
                                alt=""
                            />
                            <h3>{countrieObj.name.common}</h3>
                        </Link>
                    </div>
                </div>
            );
        });
    };

    return renderList();
}
export default HomePage;
