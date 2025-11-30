import React from "react";

const Feature = ({ data }) => {
  return (
    <main className="container feature">
      <h1>{data.headline}</h1>
      <ul>
        {data?.children?.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    </main>
  );
};

export default Feature;
