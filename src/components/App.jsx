import { Route, Routes, useParams } from 'react-router-dom'
import "./App.css";
import Navbar from "./Navbar/Navbar"
import HomePage from '../pages/HomePage/HomePage';
import CountryDetailsPage from '../pages/CountryDetailsPage/CountryDetailsPage'
import axios from 'axios'


const App = () => {

  return (

    <div className="App">

      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:countryId' element={<CountryDetailsPage />} />
      </Routes>

    </div>
  )
}

export default App
