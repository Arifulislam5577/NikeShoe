import React from "react";

const ShoeGallery = () => {
  return (
    <section className="py-5 shoe-Gallary  ">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center justify-between">
          <div className="gallery">
            <img src="./img/b-shoe.png" alt="shoe" />
          </div>

          <div className="gallery-text">
            <figure>
              <h1 className="title text-3xl font-bold  ">
                <span className="text-primary">Nike </span> Shoe
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoeGallery;
