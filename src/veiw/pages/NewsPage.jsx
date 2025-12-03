import React, { useState } from "react";

// Component for a single news item
const NewsItem = ({ news }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      style={{
        marginBottom: "2.5rem",
        paddingBottom: "2rem",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <h3 style={{ marginBottom: "0.8rem", color: "#141413" }}>{news.title}</h3>
      <p
        style={{
          marginBottom: "0.8rem",
          fontSize: "0.9rem",
          color: "#888",
          fontStyle: "italic",
        }}
      >
        {news.date}
      </p>
      <p
        style={{ marginBottom: "1.2rem", lineHeight: "1.8", color: "#5c5b5b" }}
      >
        {news.summary}
      </p>

      {expanded && (
        <p
          style={{
            marginBottom: "1.2rem",
            lineHeight: "1.8",
            color: "#5c5b5b",
          }}
        >
          {news.content}
        </p>
      )}

      <button
        onClick={toggleExpanded}
        style={{
          backgroundColor: "#141413",
          color: "#fff",
          border: "none",
          padding: "0.6rem 1.2rem",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "600",
          marginRight: "1rem",
          transition: "0.3s ease",
          marginBottom: "1rem",
        }}
      >
        {expanded ? "Show Less" : "Read More"}
      </button>

      <a
        href={news.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          color: "#141413",
          textDecoration: "underline",
          fontWeight: "500",
          transition: "0.3s ease",
        }}
      >
        Go to Article →
      </a>
    </div>
  );
};

// Main News Page Component
const NewsPage = ({ data }) => {
  const hasNews = data.news_list && data.news_list.length > 0;

  return (
    <div
      style={{
        maxWidth: "1000px",
        marginX: "auto",
        paddingTop: "2rem",
        paddingBottom: "2rem",
        paddingInline: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "2.2rem",
          fontWeight: "700",
          marginBottom: "1rem",
          color: "#141413",
          letterSpacing: "0.3px",
        }}
      >
        {data.headline}
      </h1>
      <p
        style={{
          marginBottom: "2.5rem",
          lineHeight: "1.8",
          fontSize: "1.05rem",
          color: "#5c5b5b",
        }}
      >
        {data.subheadline}
      </p>

      {hasNews ? (
        data.news_list.map((news) => <NewsItem key={news.id} news={news} />)
      ) : (
        <p
          style={{
            textAlign: "center",
            color: "#888",
            padding: "2rem",
            fontSize: "1.05rem",
          }}
        >
          No news available at the moment. Stay tuned for updates!
        </p>
      )}
    </div>
  );
};

export default NewsPage;
