import React from "react";

const Cart = ({ cartsColor, data }) => {
  return (
    <div className={`cart ${cartsColor}`}>
      {data?.img && <img src={data?.img} alt="explane" />}
      {data?.headline && <h3>{data?.headline}</h3>}
      {data?.paragraph && <p>{data?.paragraph}</p>}
    </div>
  );
};

export default Cart;
