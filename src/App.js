import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

import { Routes, Route, useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navigation />
      <Routes Location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
