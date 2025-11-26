import React from "react";
import Cart from "./Cart";

const GroupOfCarts = ({cartsColor, cartStyle, cartsData }) => {
  return (
    <section className={`${cartStyle} container`}>
      {cartsData?.map((data) => (
        <Cart cartsColor={cartsColor} data={data} />
      ))}
    </section>
  );
};

export default GroupOfCarts;
