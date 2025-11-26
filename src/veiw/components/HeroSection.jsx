import React from "react";

const HeroSection = ({ headcontent, children }) => {
  return (
    <div className="container hero-section">
      <h1>{headcontent}</h1>
      {children}
    </div>
  );
};

export default HeroSection;
