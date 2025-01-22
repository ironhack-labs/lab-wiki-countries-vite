import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/:countryId" element={ <CountryDetails /> } />
      </Routes>
    </div>
  );
}

export default App;
