import React from "react";
import { SquaresFour } from "phosphor-react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const location = useLocation();
  const { userInfo } = useSelector((state) => state.userLogin);

  return (
    <nav class="lg:bg-transparent bg-slate-900  px-2 sm:px-4 py-2.5 ">
      <div class="container flex flex-wrap justify-between items-center mx-auto   ">
        <Link to="/" class="flex items-center">
          <h1 className="text-xl font-bold font-railway text-slate-900">
            <Link to="/">
              <span className="lg:text-slate-900 text-gray-50">Nike</span>
              <span className="text-primary">Shoe</span>
            </Link>
          </h1>
        </Link>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <SquaresFour
            size={32}
            color="#fff"
            weight="light"
            className="cursor-pointer"
          />
        </button>
        <div class="hidden w-full md:block md:w-auto z-50" id="mobile-menu">
          <ul
            className={`flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium gap-5 ${
              location.pathname === "/" ? "text-gray-50" : "text-slate-900"
            }`}
          >
            <li className="text-sm font-bold  uppercase p-2 px-3 hover:bg-primary hover:text-gray-50  transition duration-500	">
              <Link to="/">Home</Link>
            </li>
            <li className="text-sm font-bold  uppercase  p-2 px-3 hover:bg-primary hover:text-gray-50  transition duration-500">
              <Link to="#">Package</Link>
            </li>
            {userInfo ? (
              userInfo?.isAdmin ? (
                <li className="text-sm font-bold text-gray-50 uppercase mr-5  p-2 px-3 bg-primary  transition duration-500">
                  <Link to="/admin">Dashboard</Link>
                </li>
              ) : (
                <li className="text-sm font-bold text-gray-50 uppercase mr-5  p-2 px-3 bg-primary  transition duration-500">
                  <Link to="/profile">Profile</Link>
                </li>
              )
            ) : (
              <li className="text-sm font-bold text-gray-50 uppercase mr-5  p-2 px-3 bg-primary  transition duration-500 w-full">
                <Link to="/login">Join Us</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
