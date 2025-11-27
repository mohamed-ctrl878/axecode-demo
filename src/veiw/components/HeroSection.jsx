import React from "react";

const HeroSection = ({ data, children }) => {
  return (
    <div className="container hero-section">
      <h1>{data?.headline}</h1>
      <p>{data?.paragraph}</p>
      {children}
    </div>
  );
};

export default HeroSection;
