import { Route, Routes, } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Service from './Components/Service';
import Appdiv from './Components/Sub Component/Appdiv';
import Webdiv from './Components/Sub Component/Webdiv'
import DigiMdiv from './Components/Sub Component/DigiMdiv'
import CookieConsent from 'react-cookie-consent';
import Privacy from './Components/Sub Component/Privacy';
import { NavLink } from 'react-router-dom';
function App() {
  return (
    <>
      <div >
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} >
          </Route>
          <Route path='/contact' element={<Contact />} />
          <Route path='/service/web-dev' element={<Webdiv />} />
          <Route path='/service/app-dev' element={<Appdiv />} />
          <Route path='/service/digi-mrkt' element={<DigiMdiv />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
        <CookieConsent  debug={true} buttonStyle={{color:"black" , fontWeight:"800"}} >
          This site uses Cookies. See our  <NavLink to="/privacy">Privacy Policy</NavLink> for more.
        </CookieConsent>
      </div>
    </>
  );
}

export default App;
