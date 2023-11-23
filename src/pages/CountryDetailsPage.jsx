import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function CountryDetails() {

    const { alpha3Code } = useParams()

    // console.log(alpha3Code)

    const url = `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`

    const [data, setData] = useState();

    const fetchInfo = () => {
        axios
            .get(url)
            .then((res) => setData(res.data))
            .catch(error => console.log(error))
    };

    useEffect(() => {
        fetchInfo();
    }, [data, setData]);



    return (
        data
            ?
            <div className="container">
                <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>

                <h1>{data.name.common}</h1>

                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: "30%" }}>Capital</td>
                            {
                                data.capital.map((e, i) => {
                                    return (
                                        <td key={i}>{e}</td>
                                    )
                                })
                            }
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {data.area} km
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {
                                        data.borders.map((e, i) => {
                                            return (
                                                <Link to={`/${e}`} key={i}><li style={{ listStyleType: "none" }}>{e}</li></Link>
                                            )
                                        })
                                    }

                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            :
            <h1>LOADING....</h1>



    )

}

export default CountryDetails;
