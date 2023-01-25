import "./App.css";
import Home from "./pages/Home";
import Travel from "./pages/Travel";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";

import { Routes, Route, useLocation } from "react-router-dom";
import Gallery from "./pages/Gallery";

export default function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Logo className="logo" />
      <Navigation />
      <Routes Location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}
