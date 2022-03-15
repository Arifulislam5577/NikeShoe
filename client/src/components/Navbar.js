import React, { useState } from "react";
import { SquaresFour } from "phosphor-react";

const Navbar = () => {
  const myStyle = {
    height: "10vh",
    backgroundColor: "transparent",
  };

  const [active, setActive] = useState(false);
  return (
    <nav className="navbar relative flex items-center " style={myStyle}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="logo-box">
            <h1 className="text-xl font-bold font-railway text-slate-900">
              Nike<span className="text-primary">Shoe</span>
            </h1>
          </div>
          <div className="lg:block hidden z-50">
            <menu className="flex items-center justify-between gap-10 ">
              <li className="text-sm font-bold  uppercase p-2 px-3 hover:bg-primary text-gray-50 transition duration-500	">
                Home
              </li>
              <li className="text-sm font-bold  uppercase  p-2 px-3 hover:bg-primary text-gray-50 transition duration-500">
                Plans
              </li>
              <li className="text-sm font-bold  uppercase mr-5  p-2 px-3 bg-primary text-gray-50 transition duration-500">
                Contact
              </li>
            </menu>
          </div>
          <div className="lg:hidden z-50  w-full">
            <menu
              className={`absolute right-0 transition bg-slate-900 text-gray-50 mt-5 h-screen flex items-center duration-500 justify-center flex-col gap-10 w-1/2 ${
                active ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <li className="text-sm font-bold  uppercase p-2 px-3	">Home</li>
              <li className="text-sm font-bold  uppercase  p-2 px-3 ">Plans</li>
              <li className="text-sm font-bold  uppercase   p-2 px-3">
                Contact
              </li>
            </menu>
          </div>
          <div className="hamburger z-50 mr-5 lg:hidden block ">
            <SquaresFour
              size={32}
              color="#000"
              weight="light"
              className="cursor-pointer"
              onClick={() => setActive(!active)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
