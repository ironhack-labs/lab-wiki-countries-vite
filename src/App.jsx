import "./App.css";
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:countryId" element={<CountryDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
