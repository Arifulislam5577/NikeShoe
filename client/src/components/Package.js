import React, { useEffect } from "react";
import { SpinnerGap } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { packageAction } from "../redux/Action";

const Package = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, packages } = useSelector((state) => state.package);

  useEffect(() => {
    dispatch(packageAction());
  }, [dispatch]);

  return (
    <section className="py-10" id="#package">
      <div className="container">
        <h2 className=" text-5xl  font-bold text-center mb-10   text-slate-900  ">
          Our <span className="text-primary">Package</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
          {loading ? (
            <div className="flex items-center justify-center py-5">
              <SpinnerGap size={128} weight="regular" className="spinner" />
            </div>
          ) : error ? (
            <div>
              <h1>{error}</h1>
            </div>
          ) : (
            packages?.map((pack) => {
              return (
                <figure
                  className="p-5 text-center  transition duration-300 shadow-xl  border-t-4 border-t-primary text-slate-900 font-bold"
                  key={pack._id}
                >
                  <div className="package-img  m-auto h-32">
                    <img
                      src={pack.Img}
                      alt={pack.Name}
                      className="w-32 m-auto"
                    />
                  </div>
                  <h2 className=" text-2xl border-2 border-primary font-bold text-center my-5 inline-block bg-gradient-to-r from-slate-900 to-primary text-gray-50 p-3 px-10 m-auto skew-y-12 transform-gpu shadow-2xl">
                    {pack.Name}
                  </h2>
                  <ul className="flex flex-col gap-1">
                    <li className="flex items-center justify-between border-b">
                      <span>Pair</span>
                      <span> {pack.Pair}</span>
                    </li>
                    <li className="flex items-center justify-between border-b">
                      <span>Color</span>
                      <span> {pack.Color}</span>
                    </li>
                    <li className="flex items-center justify-between border-b">
                      <span>Sizes</span>
                      <span> {pack.Size}</span>
                    </li>
                    <li className="flex items-center justify-between border-b">
                      <span>Delivery</span>
                      <span>{pack.Delivery}</span>
                    </li>
                    <li className="flex items-center justify-between border-b">
                      <span>Shipping</span>
                      <span> ${pack.Shipping}</span>
                    </li>
                    <li className="flex items-center justify-between border-b">
                      <span>Item Price</span>
                      <span> ${pack.ItemsPrice}</span>
                    </li>
                    <li className="flex items-center justify-between ">
                      <span>Price</span>
                      <span> ${pack.Price}</span>
                    </li>
                  </ul>
                  <button
                    onClick={() =>
                      navigate(`/login?redirect=/plan/${pack._id}`)
                    }
                    className="p-3 block hover:bg-slate-900 bg-slate-800 transition px-10 font-bold text-gray-50 my-3 rounded-full m-auto w-full"
                  >
                    Parchage Now
                  </button>
                </figure>
              );
            })
          )}
          {}
        </div>
      </div>
    </section>
  );
};

export default Package;
