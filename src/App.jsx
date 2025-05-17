import "./App.css";
import React, { Suspense } from "react";
import Spinner from "./components/SVG/Spinner";

const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));
const AboutSection = React.lazy(() =>
  import("./components/Section/AboutSection/AboutSection")
);
const Contact = React.lazy(() =>
  import("./components/Section/ContactSection/Contact")
);
const EndBar = React.lazy(() => import("./components/Section/Footer/EndBar"));
const HeroSection = React.lazy(() =>
  import("./components/Section/HeroSection/HeroSection")
);
const Project = React.lazy(() =>
  import("./components/Section/ProjectSection/Project")
);
const Footer = React.lazy(() => import("./components/Section/Footer/Footer"));

function App() {
  return (
    <div className="bg-[#1a202c]">
      <Suspense
        fallback={
          <div
            role="status"
            className="flex items-center justify-center h-screen"
          >
            <Spinner />
            <span className="sr-only">Loading...</span>
          </div>
        }
      >
        <Navbar />
        <HeroSection />
        <AboutSection />
        <Project />
        <Contact />
        <Footer />
        <EndBar />
      </Suspense>
    </div>
  );
}

export default App;
