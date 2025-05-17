import "./App.css";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Spinner from "./components/SVG/Spinner";

const Navbar = React.lazy(() =>
  import(
    /* webpackChunkName: "Navbar" */
    "./components/Navbar/Navbar"
  )
);
const AboutSection = React.lazy(() =>
  import(
    /* webpackChunkName: "AboutSection" */
    "./components/Section/AboutSection/AboutSection"
  )
);
const Contact = React.lazy(() =>
  import(
    /* webpackChunkName: "ContactSection" */
    "./components/Section/ContactSection/Contact"
  )
);
const EndBar = React.lazy(() =>
  import(
    /* webpackChunkName: "EndBar" */
    "./components/Section/Footer/EndBar"
  )
);
const HeroSection = React.lazy(() =>
  import(
    /* webpackChunkName: "HeroSection" */
    "./components/Section/HeroSection/HeroSection"
  )
);
const Project = React.lazy(() =>
  import(
    /* webpackChunkName: "ProjectSection" */
    "./components/Section/ProjectSection/Project"
  )
);
const Footer = React.lazy(() =>
  import(
    /* webpackChunkName: "Footer" */
    "./components/Section/Footer/Footer"
  )
);

const DynamicLoader1 = ({ component: Component }) => (
  <Suspense>
    <Component />
  </Suspense>
);

const DynamicLoader = ({ component: Component }) => (
  <Suspense
    fallback={
      <div role="status" className="flex items-center justify-center h-screen">
        <Spinner />
        <span className="sr-only">Loading...</span>
      </div>
    }
  >
    <Component />
  </Suspense>
);

function App() {
  return (
    <div className="bg-[#1a202c]">
      {/* 3. INDEPENDENT LOADING FOR EACH COMPONENT */}
      <DynamicLoader1 component={Navbar} />
      <DynamicLoader component={HeroSection} />
      <DynamicLoader1 component={AboutSection} />
      <DynamicLoader1 component={Project} />
      <DynamicLoader1 component={Contact} />
      <DynamicLoader1 component={Footer} />
      <DynamicLoader1 component={EndBar} />
    </div>
  );
}

// 5. INTERSECTION OBSERVER IMPLEMENTATION
const LazyOnVisible = ({ children, threshold = 0.05 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>{isVisible ? children : <div className="h-[300px]" />}</div>
  );
};

export default App;
