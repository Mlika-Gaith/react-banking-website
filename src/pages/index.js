import React, { useState } from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeDataOne,
  homeDataThree,
  homeDataTwo,
} from "../components/InfoSection/data";
import Services from "../components/ServiceSection";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Topbar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeDataOne} />
      <InfoSection {...homeDataTwo} />
      <Services />
      <InfoSection {...homeDataThree} />
      <Footer />
    </>
  );
};

export default Home;
