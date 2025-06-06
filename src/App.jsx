import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Links from "./Pages/Links";
import AboutPage from "./Pages/AboutPage";
import Projects from "./Pages/Projects";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
         <Route path="/about" element={<AboutPage />} />
         <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
