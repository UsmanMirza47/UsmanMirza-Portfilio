import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AboutSection from "./components/Section/AboutSection/AboutSection";
import Contact from "./components/Section/ContactSection/Contact";
import EndBar from "./components/Section/Footer/EndBar";
import Footer from "./components/Section/Footer/Footer";
import HeroSection from "./components/Section/HeroSection/HeroSection";
import Project from "./components/Section/ProjectSection/Project";

function App() {
  return (
    <div className="bg-[#1a202c]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Project />
      <Contact />
      <Footer />
      <EndBar />
    </div>
  );
}

export default App;
