import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "../src/pages/HomePage";
import Navbar from './components/Navbar'
import CountryDetails from "../src/pages/CountryDetailsPage";

const App = () => {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:countryId" element={<CountryDetails />} />


      </Routes>
    </div>
  )
}

export default App
