import "./App.css";
import CountryDetails from "./pages/CountryDetailsPage";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (


    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/:countryId" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
