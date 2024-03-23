import "./App.css";
import Navbar from "./components/Navbar";
import CountryDetailsPage from "./pages/CountryDetailsPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import { Routes, Route } from "react-router-dom";

function App() {

  <Routes>
  <Route path="/" element={ <HomePage /> } />
  </Routes>

  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:alpha3Code" element={<CountryDetailsPage />} />
        </Routes>
    </div>
  );
}

export default App;
