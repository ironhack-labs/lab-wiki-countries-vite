import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import CountryDetailsPage from "./pages/CountryDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:countryId" element={<CountryDetailsPage />} />
    </Routes>
  );
}

export default App;

{/* <div className="App">
      <Navbar />
      <HomePage />
    </div> */}
