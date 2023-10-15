import React from 'react'
import {useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function CountryDetailsPage() {
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
      fetch(`https://ih-countries-api.herokuapp.com/countries/${params.alpha3Code}`)
      .then(res => res.json()) 
      .then(data => {
          setData(data)  
      })
  }, []);

  return <>
  <h3>{data?.name.common}</h3>
  <p>capital {data?.capital}</p>
  <p>area {data?.area}m2</p>
  <div>
  {data?.borders.map((border) => (
     <div key={border}>
     <Link to={`/countries/${border}`}>{border}</Link> )
     </div>
    ))}
  </div>
  </>
}

