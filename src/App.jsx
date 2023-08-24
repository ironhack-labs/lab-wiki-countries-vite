import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";
import { Route, Routes } from 'react-router-dom'



function App() {
  return (
    <>
      <Navbar />


      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/:countryId' element={<CountryDetails />} />

      </Routes>


    </>








  )
}

export default App;
