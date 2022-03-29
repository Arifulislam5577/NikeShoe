import { Link } from "react-router-dom";
import React from "react";
import { Fade, Zoom } from "react-reveal";
const Hero = () => {
  return (
    <section className="hero z-10 block ">
      <div className="container">
        <div className="flex flex-col lg:flex-row  items-center justify-between lg:gap-5">
          <Fade bottom cascade>
            <div className="hero-text w-full lg:w-1/2 lg:order-1 order-2 ">
              <h1 className="lg:text-6xl text-4xl font-bold tracking-tight 	lg:leading-[4.5rem] leading-[3.5rem]">
                Start Anywhere <span className="text-primary ">Where </span>
                All Alhletes Belong
              </h1>

              <p className="text-slate-900 my-3 text-base">
                Upper mesh material provides proper ventilation and reduction in
                the weight of the shoes.A shoe built with purpose and to take
                your game to the next level.
              </p>
              <Link
                to="/login"
                className="p-3 bg-primary px-10 inline-block font-bold text-gray-50 my-3 rounded-full"
              >
                Join Us
              </Link>
            </div>
          </Fade>
          <Fade right>
            <div className="hero-img w-full lg:w-1/2 lg:bg-primary flex items-center z-10 lg:order-2 order-1">
              <Zoom>
                <img
                  src="./img/header-img.png"
                  alt="header"
                  className="scale-125 "
                />
              </Zoom>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Hero;
