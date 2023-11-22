import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";

function App() {
  return (

    < div className="App" >
      <h1>LAB | React WikiCountries</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:countryId" element={<CountryDetailsPage />}></Route>
      </Routes>
    </div >
  );
}

export default App;
