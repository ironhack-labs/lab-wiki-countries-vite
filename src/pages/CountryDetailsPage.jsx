import CountryDetails from "../components/CountryDetails"

function CountryDetailsPage(props) {

  return (
    <div className="CountryDetailsPage">
      <div className="conatiner">
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>
          Country Details
        </p>
      </div>
      <CountryDetails />
    </div>
  )
}

export default CountryDetailsPage