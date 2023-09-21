import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function CountryDetails() {

    const { countryId } = useParams();
    const [country, setCountry] = useState({});
    const [fetching, setFetching] = useState(true);
    console.log(countryId)


    useEffect(() => {
        const apiURL = `https://ih-countries-api.herokuapp.com/countries/${countryId}`;
        // axios.get(apiURL)
        //     .then((response) => {
        //         setCountry(response.data);
        //         setFetching(false);
        //     })


        const details = async () => {
            const detailsResult = await axios.get(apiURL)
            console.log(detailsResult)
            setCountry(detailsResult.data);
            setFetching(false);

        }

        details()

    }, [countryId]);

    return (
        <div>
            <h1>{country.alpha3Code}</h1>
        </div>
    );
}


export default CountryDetails;
