import { Route, Routes } from 'react-router-dom'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
import CountryDetails from './pages/CountryDetailsPage/CountryDetailsPage'
import HomePage from './pages/HomePage/HomePage'
import SurprisePage from './pages/Surprise/SurprisePage'

function App() {

  return (

    <div className="App">

      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/surprise' element={<SurprisePage />} />
        <Route path='/:alpha3Code' element={<CountryDetails />} />
      </Routes>

    </div>
  )
}

export default App
