import "./App.css";
import Navbar from "./components/Navbar.jsx";
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CountryDetailsPage from "./pages/CountryDetailsPage.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:code" element={<CountryDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
