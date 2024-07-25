import "./App.css";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";



function App() {
  



  return (
    <div className="App">
      <Navbar />
      <h1>LAB | React WikiCountries</h1>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/:countryId" element={ <CountryDetailsPage /> } />
        </Routes>

    </div>
  );
}

export default App;