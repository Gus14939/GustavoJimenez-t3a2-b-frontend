// import './styles/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import FooterComp from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';

import ProfileLogin from './pages/profile/Profile_Login';
import ProfileSignup from './pages/profile/Profile_Signup';
import ProfileView from './pages/profile/Profile_View';

import Listings from './pages/listings/ListingsPage';
import PostYourPlant from './pages/listings/PostYourPlant';
import PlantDetails from './pages/listings/PlantDetails';

function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />

        <div className="AppContainer">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/postYourPlant' element={<PostYourPlant />} />
            <Route path='/plantDetails' element={<PlantDetails />} />
            <Route path='/listingsPage' element={<Listings />} />
          
          
            <Route path='/profile' element={<ProfileView />} />
            <Route path='/profile/login' element={<ProfileLogin />} />
            <Route path='/profile/signup' element={<ProfileSignup />} />
            <Route path='/faq' element={<FAQPage />} />
            <Route path='/about' element={<AboutPage />} />
          
          </Routes>
        </div>

        <FooterComp />

      </div>
    </Router>
  );
}

export default App;