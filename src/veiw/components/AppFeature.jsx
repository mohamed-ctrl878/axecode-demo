import React from "react";

const DataSection = ({ headline, content }) => {
  return (
    <div>
      <h2>{headline}</h2>
      {content.map((block, index) => (
        <div key={index} className="mb-6">
          <h3>{block.headline}</h3>
          <ul className="ul-feature">
            {block.ul.map((item, i) => (
              <li key={i}>{item.li}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const AppFeatures = ({ data }) => {
  return (
    <>
      <h1>AXE CODE - Version 1.0 Features</h1>
      {data.sections.map((section, idx) => (
        <DataSection
          key={idx}
          headline={section.headline}
          content={section.content}
        />
      ))}
    </>
  );
};

export default AppFeatures;
