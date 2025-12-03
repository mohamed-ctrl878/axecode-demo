import React, { useState } from "react";

// Component for a single feature
const FeatureItem = ({ feature }) => {
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
      <h3 style={{ marginBottom: "0.8rem", color: "#141413" }}>
        {feature.title}
      </h3>
      <p
        style={{ marginBottom: "1.2rem", lineHeight: "1.8", color: "#5c5b5b" }}
      >
        {feature.summary}
      </p>
      {expanded && (
        <p
          style={{
            marginBottom: "1.2rem",
            lineHeight: "1.8",
            color: "#5c5b5b",
          }}
        >
          {feature.details}
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
          transition: "0.3s ease",
        }}
      >
        {expanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

// Main Component for Next Features
const NextFeaturesPage = ({ data }) => {
  const hasFeatures = data.features_list && data.features_list.length > 0;

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

      {hasFeatures ? (
        data.features_list.map((feature) => (
          <FeatureItem key={feature.id} feature={feature} />
        ))
      ) : (
        <p
          style={{
            textAlign: "center",
            color: "#888",
            padding: "2rem",
            fontSize: "1.05rem",
          }}
        >
          No upcoming features are available yet. Stay tuned for updates!
        </p>
      )}
    </div>
  );
};

export default NextFeaturesPage;
