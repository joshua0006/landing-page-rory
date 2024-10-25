import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Showreel from "./components/Showreel";
import Testimonials from "./components/Testimonials";
import ContactMe from "./components/ContactMe";
import AnimatedSection from "./components/AnimatedSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-gradient-to-br from-purple-600 to-blue-500">
        <Header />
      </div>
      <div className="bg-gray-800 text-gray-100">
        <AnimatedSection index={0}>
          <AboutMe />
        </AnimatedSection>
        <AnimatedSection index={1}>
          <Showreel />
        </AnimatedSection>
        <AnimatedSection index={2}>
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection index={3}>
          <ContactMe />
        </AnimatedSection>
      </div>
    </div>
  );
}

export default App;
