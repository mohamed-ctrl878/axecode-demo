import React from "react";

const Feature = ({ data }) => {
  return (
    <main className="container feature">
      <h1>{data.headline}</h1>
      <ul className="ul-feature">
        {data?.children?.map((e) => (
          <>
            <li>{e} </li>
            <ul>
              <li>kdfjkjdfnkdfjnvkdfjnvkdjfn</li>
            </ul>
          </>
        ))}
      </ul>
    </main>
  );
};

export default Feature;
