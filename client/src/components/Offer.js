import React from "react";

const Offer = () => {
  return (
    <section className="py-10 offer">
      <div className="container">
        <h1 className=" lg:text-5xl text-2xl uppercase font-bold  my-5   text-gray-50  ">
          Subscribe news letter
        </h1>

        <form>
          <div className="mb-5 w-full">
            <input
              type="email"
              className="p-4 focus:outline-none shadow-md focus:shadow-xl border border-gray-300 transition placeholder:text-sm placeholder:text-gray-500 lg:w-1/2 w-full bg-gray-200"
              placeholder="Your Business Email"
            />
          </div>
          <button className="bg-slate-900 p-4 text-gray-50 px-10">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Offer;
