import React from "react";
import { Fade, Zoom } from "react-reveal";
const Famous = () => {
  return (
    <section className="py-10 ">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center justify-between">
          <Fade left>
            <figure>
              <h1 className="title lg:text-5xl text-4xl font-bold  ">
                Why We
                <span className="text-primary"> Famous?</span>
              </h1>
              <p className="py-4 text-slate-900">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                inventore dolorum, molestiae officia nulla modi repellendus
                eveniet non saepe unde, hic odio veritatis dolor magni
                reiciendis minus assumenda quasi quae.
              </p>
              <button className="p-3 bg-primary px-10 font-bold text-gray-50 my-3 rounded-full">
                Show Package
              </button>
            </figure>
          </Fade>
          <div className="gallery">
            <Zoom>
              <img src="./img/b-shoe.png" alt="shoe" />
            </Zoom>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Famous;
