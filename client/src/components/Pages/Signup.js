import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <section className="py-10">
      <div className="container">
        <Fade bottom cascade>
          <form className="m-auto w-full md:w-1/2 lg:2/3 lg:shadow-2xl  lg:p-10 md:p-5 md:shadow-xl">
            <div className="mb-5 w-full m-auto">
              <h1 className="p-4 border-2 text-center uppercase bg-slate-900 text-gray-50">
                Signup
              </h1>
            </div>
            <div className="mb-5 w-full">
              <input
                type="text"
                className="p-4 focus:outline-none shadow-md focus:shadow-xl border border-gray-300 transition placeholder:text-sm placeholder:text-gray-500 w-full bg-gray-200"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-5 w-full">
              <input
                type="email"
                className="p-4 focus:outline-none shadow-md focus:shadow-xl border border-gray-300 transition placeholder:text-sm placeholder:text-gray-500 w-full bg-gray-200"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-5 w-full">
              <input
                type="password"
                className="p-4 focus:outline-none shadow-md focus:shadow-xl border border-gray-300 transition placeholder:text-sm placeholder:text-gray-500 w-full bg-gray-200"
                placeholder="Your Password"
                required
              />
            </div>

            <div className="mb-5 w-full">
              <button
                type="submit"
                className="p-4 w-full bg-primary uppercase text-gray-50"
              >
                Signup
              </button>
            </div>
            <div className="my-2 w-full">
              <p>
                Already have an account?
                <Link to="/login" className="text-primary ml-2">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </Fade>
      </div>
    </section>
  );
};

export default Signup;
