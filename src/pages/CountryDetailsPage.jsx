import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const CountryDetails = () => {
	const { countryId } = useParams()
	const [country, setCountry] = useState('')

	const { name, capital, area, borders, alpha3Code } = country

	useEffect(() => {
		axios
			.get(`https:ih-countries-api.herokuapp.com/countries/${countryId}`)
			.then(({ data }) => {
				setCountry(data)
			})
			.catch(err => console.log(err))
	}, [countryId])
	if (!country) {
		return (
			<div className='CountryDetails'>
				<h1>"Country Details"</h1>
				<p>...loading</p>
			</div>
		)
	} else {
		return (
			<div className='CountryDetails'>
				<div className='container'>
					<p style={{ fontSize: '24px', fontWeight: 'bold' }}>Country Details</p>

					<h1>{name.common}</h1>

					<table className='table'>
						<thead></thead>
						<tbody>
							<tr>
								<td style={{ width: '30%' }}>Capital</td>
								<td>{capital}</td>
							</tr>
							<tr>
								<td>Area</td>
								<td>
									{area} km
									<sup>2</sup>
								</td>
							</tr>
							<tr>
								<td>Borders</td>
								<td>
									{borders.map(eachBorder => {
										return (
											<p key={eachBorder}>
												<Link to={`/${eachBorder}`}>{eachBorder}</Link>
											</p>
										)
									})}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}

export default CountryDetails
