import React from "react";

const ContentRenderer = ({ data }) => {
  const renderHeadline = (text, depth) => {
    const HeadingTag = `h${Math.min(depth, 6)}`;
    const fontSize =
      {
        1: "2.2rem",
        2: "1.8rem",
        3: "1.4rem",
        4: "1.1rem",
        5: "1rem",
        6: "0.95rem",
      }[depth] || "1rem";

    return (
      <HeadingTag
        style={{
          fontSize: fontSize,
          marginBottom: Math.max(0.8, 2 - (depth - 1) * 0.3) + "rem",
          marginTop: Math.max(0.4, 1.5 - (depth - 1) * 0.2) + "rem",
          fontWeight: depth === 1 ? 700 : 600,
          letterSpacing: depth === 1 ? "0.3px" : "0.1px",
        }}
      >
        {text}
      </HeadingTag>
    );
  };

  const renderList = (ul, depth) => {
    if (!ul) return null;

    return (
      <ul
        style={{
          marginLeft: depth === 2 ? "5rem" : depth === 3 ? "2rem" : "1.5rem",
          marginBottom: "1.5rem",
          marginTop: depth > 2 ? "0.8rem" : "0",
          listStyle: depth === 2 ? "disc" : "circle",
          lineHeight: depth === 2 ? "2.1" : "1.8",
          paddingLeft: "1rem",
        }}
      >
        {ul.map((item, idx) => (
          <li key={idx} style={{ marginBottom: "0.6rem" }}>
            {item.li}
            {item.ul && renderList(item.ul, depth + 1)}
          </li>
        ))}
      </ul>
    );
  };

  const renderContent = (content, depth = 2) => {
    return content.map((section, idx) => (
      <div key={idx}>
        {renderHeadline(section.headline, depth)}
        {renderList(section.ul, depth)}
      </div>
    ));
  };

  return (
    <div>
      {renderHeadline(data.headline, 1)}
      {renderContent(data.content)}
    </div>
  );
};

export default ContentRenderer;
