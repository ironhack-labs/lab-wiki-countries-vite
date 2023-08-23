import "./App.css";

import {Routes, Route} from "react-router-dom"

import Navbar from "./components/Navbar"
import Homepage from "./pages/HomePage"
import CountryDetailsPage from "./pages/CountryDetailsPage";

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/:countryId" element={<CountryDetailsPage />} />

      </Routes>

    </div>
  );
}

export default App;
