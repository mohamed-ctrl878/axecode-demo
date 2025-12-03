import React from "react";

const JobCard = ({ job }) => {
  return (
    <div
      style={{
        marginBottom: "2.5rem",
        paddingBottom: "2rem",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <h3 style={{ marginBottom: "0.8rem", color: "#141413" }}>{job.title}</h3>
      <p style={{ marginBottom: "0.6rem", fontSize: "0.95rem", color: "#888" }}>
        {job.department} | {job.location} | {job.employment_type}
      </p>
      <p style={{ marginBottom: "1.5rem", lineHeight: "1.8" }}>
        {job.description}
      </p>

      <div style={{ marginBottom: "1.5rem" }}>
        <h4
          style={{
            marginBottom: "0.8rem",
            fontSize: "1rem",
            fontWeight: "600",
          }}
        >
          Responsibilities:
        </h4>
        <ul style={{ marginLeft: "2rem", lineHeight: "1.8" }}>
          {job.responsibilities.map((resp, idx) => (
            <li key={idx} style={{ marginBottom: "0.5rem" }}>
              {resp}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <h4
          style={{
            marginBottom: "0.8rem",
            fontSize: "1rem",
            fontWeight: "600",
          }}
        >
          Requirements:
        </h4>
        <ul style={{ marginLeft: "2rem", lineHeight: "1.8" }}>
          {job.requirements.map((req, idx) => (
            <li key={idx} style={{ marginBottom: "0.5rem" }}>
              {req}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <h4
          style={{
            marginBottom: "0.8rem",
            fontSize: "1rem",
            fontWeight: "600",
          }}
        >
          Benefits:
        </h4>
        <ul style={{ marginLeft: "2rem", lineHeight: "1.8" }}>
          {job.benefits.map((benefit, idx) => (
            <li key={idx} style={{ marginBottom: "0.5rem" }}>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <a
        href={job.apply_link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          backgroundColor: "#141413",
          color: "#fff",
          padding: "0.7rem 1.5rem",
          borderRadius: "4px",
          textDecoration: "none",
          fontWeight: "600",
          transition: "0.3s ease",
          boxShadow: "2px 2px 0px rgba(0,0,0,0.1)",
        }}
      >
        Apply Now
      </a>
    </div>
  );
};

const CareerCTA = ({ cta }) => {
  return (
    <div
      style={{
        backgroundColor: "#f9f7f3",
        padding: "3rem",
        borderRadius: "8px",
        textAlign: "center",
        marginTop: "3rem",
        border: "1px solid #e0ddd5",
      }}
    >
      <h2
        style={{ marginBottom: "1rem", fontSize: "1.8rem", color: "#141413" }}
      >
        {cta.headline}
      </h2>
      <p style={{ marginBottom: "2rem", lineHeight: "1.8", color: "#5c5b5b" }}>
        {cta.text}
      </p>
      <a
        href={cta.submit_cv_link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          backgroundColor: "#141413",
          color: "#fff",
          padding: "0.8rem 2rem",
          borderRadius: "4px",
          textDecoration: "none",
          fontWeight: "600",
          transition: "0.3s ease",
          boxShadow: "2px 2px 0px rgba(0,0,0,0.1)",
        }}
      >
        Submit Your CV
      </a>
    </div>
  );
};
const CareerPage = ({ data }) => {
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
          textAlign: "center",
          letterSpacing: "0.3px",
        }}
      >
        {data.headline}
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "#5c5b5b",
          marginBottom: "3rem",
          lineHeight: "1.8",
          fontSize: "1.05rem",
        }}
      >
        {data.subheadline}
      </p>

      <div style={{ marginBottom: "2rem" }}>
        {data.job_listings.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      <CareerCTA cta={data.cta_section} />
    </div>
  );
};

export default CareerPage;
