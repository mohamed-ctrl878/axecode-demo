import React from "react";
import HeroSection from "../components/HeroSection";
import homeData from "../../model/data/homeData.json";
import Donate from "../components/Donate";
import VidSection from "../components/VidSection";
import GroupOfCarts from "../components/GroupOfCarts";
import cartsData from "../../model/data/cartsData.json";
const Home = () => {
  return (
    <main>
      <HeroSection headcontent={homeData.headline}>
        <Donate></Donate>
      </HeroSection>
      <VidSection homeData={homeData}></VidSection>
      <GroupOfCarts
        cartStyle={"card-horizontal"}
        cartsColor={""}
        cartsData={cartsData}
      ></GroupOfCarts>
    </main>
  );
};

export default Home;
