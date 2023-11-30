import "./App.css";
import { Routes, Route } from "react-router-dom";
//This line imports specific components (Routes and Route) from the react-router-dom library. These components are used for defining routes in a React application.
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:countryId" element={<CountryDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
