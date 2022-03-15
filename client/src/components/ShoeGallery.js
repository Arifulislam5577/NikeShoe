import React from "react";
import { Fade, Zoom } from "react-reveal";
const ShoeGallery = () => {
  return (
    <section className="py-10 shoe-Gallary overflow-hidden ">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center justify-between">
          <div className="gallery">
            <Zoom>
              <img src="./img/b-shoe.png" alt="shoe" />
            </Zoom>
          </div>

          <Fade right>
            <figure>
              <h1 className="title text-5xl font-bold  ">
                Nike
                <span className="text-primary"> Shoe</span>
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
        </div>
      </div>
    </section>
  );
};

export default ShoeGallery;
