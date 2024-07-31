import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";

function App() {


  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route exact path="/:alpha3code" element={<CountryDetailsPage />} />
      </Routes>
  );
}

export default App;
