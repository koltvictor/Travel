import "./App.css";
import Home from "./pages/Home";
import Travel from "./pages/Travel";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Logo from "./components/Logo";
import Contact from "./pages/Contact";
import Confirmation from "./pages/Confirmation";
import PDFs from "./pages/PDFs";
import PDFdetails from "./pages/PDFdetails";

import { Routes, Route, useLocation } from "react-router-dom";
import Gallery from "./pages/Gallery";

export default function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navigation logo={<Logo />} />
      <Routes Location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/pdfs" element={<PDFs />} />
        <Route path="/:id" element={<PDFdetails />} />
      </Routes>
    </div>
  );
}
