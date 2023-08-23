import { Route, Routes } from 'react-router-dom'
import HomePage from './../pages/HomePage'
import CountryDetailsPage from './../pages/CountryDetailsPage'
import ErrorPage from './../pages/ErrorPage'
import Navbar from './NavBar/Navbar'


import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:countryId' element={<CountryDetailsPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
