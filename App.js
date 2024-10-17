import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import Apointment from "./Pages/Apointment";
import Auth from "./Pages/Auth";

function App() {
 
  return (
    <>
        <Router>
        <Navbar/>
    <Routes>
    
    <Route path="/apointment" element={<Apointment/>} />
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/login" element={<Auth/>} />
    </Routes>

    <Footer/>
    </Router>

    </>
  );
}

export default App;
