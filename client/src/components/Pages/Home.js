import React from "react";
import Famous from "../Famous";
import Form from "../Form";
import Hero from "../Hero";
import Offer from "../Offer";
import Package from "../Package";
import ShoeGallery from "../ShoeGallery";
import { Fade } from "react-reveal";

const Home = () => {
  return (
    <main>
      <Hero />
      <ShoeGallery />
      <Famous />
      <Fade bottom>
        <Package />
      </Fade>
      <Fade bottom>
        <Form />
      </Fade>
      <Offer />
    </main>
  );
};

export default Home;
