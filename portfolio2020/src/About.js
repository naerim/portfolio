import React from "react";
import AboutHeader from "./Components/AboutHeader";
import AboutSection1 from "./Components/AboutSection1";
import AboutSection2 from "./Components/AboutSection2";

const About = () => {
  return (
    <div>
      <AboutHeader />
      <div className="AboutSection">
        <AboutSection1 />
        <AboutSection2 />
      </div>
    </div>
  );
};

export default About;
