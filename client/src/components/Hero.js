import React from "react";

const Hero = () => {
  const myStyle = {
    height: "100vh",
    marginTop: "-2rem",
  };

  return (
    <section className="hero z-10 block" style={myStyle}>
      <div className="container">
        <div className="flex flex-col lg:flex-row  items-center justify-between lg:gap-5">
          <div className="hero-text w-full lg:w-1/2">
            <h1 className="text-6xl font-bold tracking-tight	">
              Start Anywhere <span className="text-primary">Where </span>
              All Alhletes Belong
            </h1>
            <p className="text-slate-900 my-3 text-base">
              Upper mesh material provides proper ventilation and reduction in
              the weight of the shoes.A shoe built with purpose and to take your
              game to the next level.
            </p>
            <button className="p-3  bg-primary px-10 font-bold text-gray-50 my-3 rounded-full">
              Join Us
            </button>
          </div>
          <div
            className="hero-img w-full lg:w-1/2 lg:bg-primary flex items-center z-10 "
            style={myStyle}
          >
            <img
              src="./img/header-img.png"
              alt="header"
              className="scale-125 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
