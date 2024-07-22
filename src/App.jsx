import Navbar from "./components/Navbar"
import {Route,Routes} from "react-router-dom"
import HomePage from "./pages/HomePage"
import CountryDetailsPage from "./pages/CountryDetailsPage"

export default function App() {
  return (
    <div>
    <Navbar />
    <Routes>
   <Route element={<HomePage/>}path="/"/>
   <Route element={<CountryDetailsPage/>}path="/country/:id"/>
    </Routes>
    </div>
  )
}