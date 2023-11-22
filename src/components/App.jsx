import "./App.css"

import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar/Navbar"

import HomePage from "../pages/HomePage"
import CountryDetailsPage from "../pages/CountryDetailsPage"

function App() {
  return (

    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:countryId" element={<CountryDetailsPage />} />
      </Routes>
    </div>
  )
}

export default App