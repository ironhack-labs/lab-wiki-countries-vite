import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx"
import HomePage from "./pages/HomePage.jsx";
import CountryDetails from "./pages/CountryDetailsPage.jsx";

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:countryId' element={<CountryDetails />} />
      </Routes>

    </div>
  );
}

export default App;
