import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import CountryDetailsPage from "./pages/CountryDetailsPage"
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countries" element={<HomePage />} />
        <Route path="/:alpha3Code" element={<CountryDetailsPage />} />

      </Routes>

    </>
  );

}


export default App;
