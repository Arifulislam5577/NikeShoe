import React from "react";

const Form = () => {
  return (
    <section className="py-10">
      <div className="container">
        <h2 className=" text-5xl  font-bold text-center mb-10   text-slate-900  ">
          Big <span className="text-primary">Deal?</span>
        </h2>
        <form className=" lg:w-4/5 w-full m-auto ">
          <div className="mb-5  w-full flex lg:flex-row flex-col items-center gap-5">
            <input
              type="text"
              className="p-4 focus:outline-none shadow-md focus:shadow-xl  border border-gray-300 transition placeholder:text-sm placeholder:text-gray-500 lg:w-1/2 w-full bg-gray-200"
              placeholder="Your Name"
            />
            <input
              type="text"
              className="p-4 focus:outline-none shadow-md focus:shadow-xl border border-gray-300 transition placeholder:text-sm placeholder:text-gray-500 lg:w-1/2 w-full bg-gray-200"
              placeholder="Company Name"
            />
          </div>
          <div className="mb-5 w-full">
            <input
              type="email"
              className="p-4 focus:outline-none shadow-md focus:shadow-xl border border-gray-300 transition placeholder:text-sm placeholder:text-gray-500 w-full bg-gray-200"
              placeholder="Your Business Email"
            />
          </div>
          <div className="mb-5 w-full">
            <textarea
              type="text"
              className="p-4 focus:outline-none shadow-md focus:shadow-xl border border-gray-300 transition placeholder:text-sm placeholder:text-gray-500 w-full bg-gray-200"
              placeholder="Enter Your Business Deal Details"
            />
          </div>
          <div className="mb-5 w-full">
            <button
              type="submit"
              className="p-4 w-full bg-slate-900 uppercase text-gray-50"
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
