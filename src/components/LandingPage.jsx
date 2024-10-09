import React from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Showreel from "./Showreel";
import Testimonials from "./Testimonials";
import ContactMe from "./ContactMe";
import AnimatedSection from "./AnimatedSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
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
};

export default LandingPage;
