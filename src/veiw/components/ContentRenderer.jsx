import React from "react";

const ContentRenderer = ({ data }) => {
  const renderHeadline = (text, depth) => {
    const HeadingTag = `h${Math.min(depth, 6)}`;
    return <HeadingTag>{text}</HeadingTag>;
  };

  const renderList = (ul, depth) => {
    if (!ul) return null;

    return (
      <ul className="ul-feature">
        {ul.map((item, idx) => (
          <li key={idx}>
            {item.li}
            {item.ul && renderList(item.ul, depth + 1)}
          </li>
        ))}
      </ul>
    );
  };

  const renderContent = (content, depth = 2) => {
    return content.map((section, idx) => (
      <div key={idx} style={{ marginLeft: depth * 10 }}>
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
