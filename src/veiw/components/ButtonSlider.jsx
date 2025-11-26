import React from "react";
import ArrowSVG from "./ArrowSVG";

const ButtonSlider = ({ children }) => {
  return (
    <div className="slider-content">
      <button className="btn btn-black">
        join us <ArrowSVG></ArrowSVG>
      </button>
      <div className="content-slided">{children}</div>
    </div>
  );
};

export default ButtonSlider;
