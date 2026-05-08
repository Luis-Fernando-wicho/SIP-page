import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import { Routes, Route } from "react-router-dom";

import HomePage from "./components/pages/HomePage/HomePage.jsx";

import ElectricalProjects from "./components/pages/Mains/ElectricalProjects.jsx";
import Automation from "./components/pages/Mains/Automation.jsx";
import SecurityCameras from "./components/pages/Mains/SecurityCameras.jsx";
import SolarPanels from "./components/pages/Mains/SolarPanels.jsx";

import Contact from "./components/pages/Contact/Contact.jsx";

import PageNotFound from "./components/pages/PageNotFoud/PageNotFound.jsx";

import "./App.css";
function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/ElectricalProjects" element={<ElectricalProjects />} />
          <Route path="/Automation" element={<Automation />} />
          <Route path="/SecurityCameras" element={<SecurityCameras />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/SolarPanels" element={<SolarPanels />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
