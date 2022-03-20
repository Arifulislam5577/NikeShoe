import React from "react";
import { Fade, Zoom } from "react-reveal";
const Profile = () => {
  return (
    <section className="">
      <Fade cascade top>
        <div className=" flex items-center gap-5 justify-center bg-primary text-gray-50  py-10">
          <div className="user-img border-r-4 border-gray-50">
            <img
              src="https://i.imgur.com/zLCYdR9.jpg"
              alt="user"
              className="w-20 h-20 rounded-full mr-5"
            />
          </div>
          <div className="user-details flex flex-col gap-2">
            <h1 className="font-bold text-3xl uppercase">Hi,Mr. Arif</h1>
            <h3>arif1@gmail.com</h3>
            <button className="p-1 hover:bg-slate-900 hover:border-slate-900 transition uppercase text-sm border-2 border-gray-50">
              Logout
            </button>
          </div>
        </div>
      </Fade>
      <div className="container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
          <Zoom>
            <div className="border-l-4 border-primary box lg:col-span-1 w-full p-5 bg-gray-200   shadow-md hover:shadow transition">
              <h1 className="text-3xl inline-block w-20 h-20 bg-slate-900 font-bold uppercase text-gray-50 text-center leading-extra -mt-28 shadow-2xl">
                5
              </h1>
              <h1 className="text-xl my-2 font-bold uppercase text-slate-700">
                Order
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
                sunt asperiores! Suscipit velit hic nam.
              </p>
            </div>
          </Zoom>
          <Zoom>
            <div className="border-l-4 border-primary box lg:col-span-1 w-full p-5 bg-gray-200   shadow-md hover:shadow transition">
              <h1 className="text-3xl  inline-block w-28 h-20 bg-slate-900 font-bold uppercase text-gray-50 text-center leading-extra -mt-28 shadow-2xl">
                $5000
              </h1>
              <h1 className="text-xl my-2 font-bold uppercase text-slate-700">
                total price
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
                sunt asperiores! Suscipit velit hic nam.
              </p>
            </div>
          </Zoom>
          <Zoom>
            <div className="border-l-4 border-primary box lg:col-span-1 w-full p-5 bg-gray-200   shadow-md hover:shadow transition">
              <h1 className="text-3xl inline-block w-20 h-20 bg-slate-900 font-bold uppercase text-gray-50 text-center leading-extra -mt-28 shadow-2xl">
                A+
              </h1>
              <h1 className="text-xl my-2 font-bold uppercase text-slate-700">
                status
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
                sunt asperiores! Suscipit velit hic nam.
              </p>
            </div>
          </Zoom>
        </div>
        <div className="">
          <Fade>
            <h1 className="font-bold text-3xl uppercase mb-5">My Order</h1>
          </Fade>
          <Fade bottom>
            <ul className="flex items-center border-2 my-1 hover:bg-slate-900 transition hover:text-gray-50 border-gray-200 p-2 justify-between">
              <li>1</li>
              <li>34324defe335fdft55</li>
              <li>Mini Package</li>
              <li>$4600</li>
            </ul>
          </Fade>
          <ul className="flex items-center border-2 my-1 hover:bg-slate-900 transition hover:text-gray-50 border-gray-200 p-2 justify-between">
            <li>1</li>
            <li>34324defe335fdft55</li>
            <li>Mini Package</li>
            <li>$4600</li>
          </ul>
          <ul className="flex items-center border-2 my-1 hover:bg-slate-900 transition hover:text-gray-50 border-gray-200 p-2 justify-between">
            <li>1</li>
            <li>34324defe335fdft55</li>
            <li>Mini Package</li>
            <li>$4600</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;
