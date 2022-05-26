import { Route, Routes } from 'react-router-dom';
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
          <Route path='/service/:web-dev' element={<Webdiv/>} />
          <Route path='/service/:app-dev' element={<Appdiv/>} />
          <Route path='/service/:digi-mrkt' element={<Appdiv/>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
