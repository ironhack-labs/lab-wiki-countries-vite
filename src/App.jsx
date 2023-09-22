import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountryDetails from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (

    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countryDetailsPage/:countryId" element={<CountryDetails />} />


        <Route path="*" element={<ErrorPage />} />  
      </Routes>
    </div>



  );
}

export default App;
