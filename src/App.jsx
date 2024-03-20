import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage.jsx";
import { Routes, Route } from "react-router-dom";


const BASE_API_URL = "https://ih-countries-api.herokuapp.com"

function App() {

  <Routes>
  <Route path="/" element={ <HomePage /> } />
  </Routes>

  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
    </div>
  );
}

export default App;
