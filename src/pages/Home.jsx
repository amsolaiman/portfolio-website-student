import React from "react";
// components
import HomeHeader from "../components/home/HomeHeader";
import HomeFirst from "../components/home/HomeFirst";
import HomeSecond from "../components/home/HomeSecond";
import ServiceThird from "../components/service/ServiceThird";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeFirst />
      <HomeSecond />
      <ServiceThird />
    </>
  );
};

export default Home;
