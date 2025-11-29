import React from "react";
import HeroSection from "../components/HeroSection";
import homeData from "../../model/data/homeData.json";
import Donate from "../components/Donate";
import VidSection from "../components/VidSection";
import GroupOfCarts from "../components/GroupOfCarts";
import cartsData from "../../model/data/cartsData.json";
import cartsData2 from "../../model/data/cartsData2.json";
const Home = () => {
  return (
    <main>
      <HeroSection data={homeData}>
        <Donate></Donate>
      </HeroSection>
      <VidSection homeData={homeData}></VidSection>
      <GroupOfCarts
        cartStyle={"card-horizontal"}
        cartsColor={""}
        cartsData={cartsData}
      ></GroupOfCarts>
      <GroupOfCarts
        cartsData={cartsData2}
        cartStyle={"carts-w-colors"}
      ></GroupOfCarts>
    </main>
  );
};

export default Home;
