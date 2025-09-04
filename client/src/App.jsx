import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Discover from "./components/Discover/Discover.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import Bookatrip from "./components/Bookatrip/Bookatrip.jsx";
import TelaiyaDam from "./components/TelaiyaDam/TelaiyaDam.jsx";
import VrindahaWaterfall from "./components/VrindahaWaterfall/VrindahaWaterfall.jsx";
import RadhaKrishnaMandir from "./components/RadhaKrishnaMandir/RadhaKrishnaMandir.jsx";
import PetroWaterfall from "./components/PetroWaterfall/PetroWaterfall.jsx";
import KodermaWildlifeSanctuary from "./components/KodermaWildlifeSanctuary/KodermaWildlifeSanctuary.jsx";
import MaaChanchalaDeviMandir from "./components/MaaChanchalaDeviMandir/MaaChanchalaDeviMandir.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/book" element={<Bookatrip />} />
        <Route path="/discover/TelaiyaDam" element={<TelaiyaDam />} />
        <Route path="/discover/VrindahaWaterfall" element={<VrindahaWaterfall />} />
        <Route path="/discover/RadhaKrishnaMandir" element={<RadhaKrishnaMandir />} />
        <Route path="/discover/PetroWaterfall" element={<PetroWaterfall />} />
        <Route path="/discover/MaaChanchalaDeviMandir" element={<MaaChanchalaDeviMandir />} />
        <Route path="/discover/KodermaWildlifeSanctuary" element={<KodermaWildlifeSanctuary />} />
        <Route path="/discover/KodermaWildlifeSanctuary" element={<KodermaWildlifeSanctuary />} />
        {/* <Route path="/discover/PanchkheroDam" element={<PanchkheroDam />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
