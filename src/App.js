// import './styles/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import FooterComp from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

import ProfileLogin from './pages/profile/Profile_Login';
import ProfileSignup from './pages/profile/Profile_Signup';
import ProfileView from './pages/profile/Profile_View';

import Listings from './pages/listings/ListingsPage';
import PostYourPlant from './pages/listings/PostYourPlant';
import PlantDetails from './pages/listings/PlantDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <FooterComp />
    </div>
  );
}

export default App;