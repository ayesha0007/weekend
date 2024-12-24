import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';
import Home from './pages/Home';
import Tours from './components/TourDetails/Tours';
import TourDetails from './components/TourDetails/TourDetails';
import Country from './pages/Country/Country';
import Weather from './pages/Country/Weather';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/tours' element={<Tours/>}/>
      <Route path="tour-details" element={<TourDetails />} />
      <Route path="/country-details" element={<Country />} />
      <Route path="/weather/:countryName" element={<Weather />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
