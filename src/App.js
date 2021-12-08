import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Career from "./components/Career";
import Info from "./components/Info";
import "./App.css";
import Login from "./components/Login";
import About from "./components/About";

const App = () => (
  <>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/career" element={<Career />} />
      <Route path="/info" element={<Info />} />
    </Routes>
  </>
);

export default App;
