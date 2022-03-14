import React from "react";

const Navbar = () => {
  const myStyle = {
    height: "10vh",
    backgroundColor: "transparent",
  };
  return (
    <nav className="navbar flex items-center " style={myStyle}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="logo-box">
            <h1 className="text-xl font-bold font-railway text-slate-900">
              Nike<span className="text-primary">Shoe</span>
            </h1>
          </div>
          <div className="lg:block hidden z-50">
            <menu className="flex items-center justify-between gap-10 ">
              <li className="text-sm font-bold  uppercase     p-2 px-3 hover:bg-primary text-gray-50 transition duration-500	">
                Home
              </li>
              <li className="text-sm font-bold  uppercase       p-2 px-3 hover:bg-primary text-gray-50 transition duration-500">
                Plans
              </li>
              <li className="text-sm font-bold  uppercase mr-5      p-2 px-3 bg-primary text-gray-50 transition duration-500">
                Contact
              </li>
            </menu>
          </div>
          <div className="hamburger z-50 mr-5 lg:hidden block bg-primary">
            <img src="./img/hamburger.svg" alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
