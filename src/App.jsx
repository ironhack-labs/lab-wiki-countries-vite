import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage'
import Navbar from "./components/Navbar";
import CountryDetails from './pages/CountryDetailsPage'
import "./App.css";

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/:countryId'} element={<CountryDetails />} />
      </Routes>

    </div>
  );
}

export default App;
