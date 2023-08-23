import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./NavBar/Navbar";
import HomePage from "../pages/HomePage/HomePage";
import CountryDetailsPage from "../pages/CountryDetailsPage/CountryDetailsPage"

const App = () => {


  return (
    <div className="countries">
      <Navbar />

      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/:countryId' element={<CountryDetailsPage />} />

      </Routes>
    </div>
  );
}

export default App;
