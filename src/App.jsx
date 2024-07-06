import "./App.css";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";
// import { Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";  // <== IMPORT


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element= {<HomePage/>} />
      <Route path="/:country" element= {<CountryDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
