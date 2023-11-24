import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"


function CountryDetails() {

    const { countryId } = useParams()
    const baseURL = `https://ih-countries-api.herokuapp.com/countries/${countryId}`;
    const [idCountry, setIdCountry] = useState()



    useEffect(() => {
        axios
            .get(baseURL)
            .then((response) => setIdCountry(response.data))
            .catch(err => console.log(err))
    }, [])

    console.log(idCountry)


    return (
        idCountry
            ?
            <>
                <h1>"Detalles del país"</h1>
                <p>nombre:{idCountry.name.common}</p>
                <p>capital:{idCountry.capital}</p >
                <p>area:{idCountry.area}</p >
                {/* {

                idCountry.map(elm => {
                    return (
                        <div key={elm._id}>
                            <p>{elm.name.common}</p>
                        </div>
                    )
                })
            } */}
            </>
            :
            <h1>loading...</h1>
    )

}
export default CountryDetails;



