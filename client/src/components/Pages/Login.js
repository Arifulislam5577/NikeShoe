import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <section className="py-10">
      <div className="container">
        <Fade top cascade>
          <form className="m-auto w-full md:w-1/2 lg:2/3 lg:shadow-2xl  lg:p-10 md:p-5 md:shadow-xl">
            <div className="mb-5 w-full m-auto">
              <h1 className="p-4 border-2 text-center uppercase bg-slate-900 text-gray-50">
                Login
              </h1>
            </div>
            <div className="mb-5 w-full">
              <input
                type="email"
                className="p-4 focus:outline-none shadow-md focus:shadow-xl border border-gray-300 transition placeholder:text-sm placeholder:text-gray-500 w-full bg-gray-200"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-5 w-full">
              <input
                type="password"
                className="p-4 focus:outline-none shadow-md focus:shadow-xl border border-gray-300 transition placeholder:text-sm placeholder:text-gray-500 w-full bg-gray-200"
                placeholder="Your Password"
              />
            </div>

            <div className="mb-5 w-full">
              <button
                type="submit"
                className="p-4 w-full bg-primary uppercase text-gray-50"
              >
                Login
              </button>
            </div>
            <div className="my-2 w-full">
              <p>
                Create a new account
                <Link to="/signup" className="text-primary ml-2">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </Fade>
      </div>
    </section>
  );
};

export default Login;
