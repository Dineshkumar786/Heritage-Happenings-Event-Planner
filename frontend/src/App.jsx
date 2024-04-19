
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import Services from './components/Services.jsx';
import AboutUs from './components/About.jsx';
import Contact from  './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <Router>
    <Navbar/>
    <HeroSection/>
    <Services/>
    <AboutUs/>
    <Contact/>
    <Footer/>
    <Toaster/>
    </Router>
  )
}

export default App
