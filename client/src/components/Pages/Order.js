import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { countries } from "countries-list";
import { useDispatch, useSelector } from "react-redux";
import { singlePackageAction } from "../../redux/Action";
import { SpinnerGap } from "phosphor-react";
const Order = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, error, pack } = useSelector((state) => state.singlePack);

  const countryDetail = Object.values(countries);

  useEffect(() => {
    dispatch(singlePackageAction(id));
  }, [dispatch, id]);

  // name,company name,email,phone,country,city,zipcode,house number
  return (
    <section>
      {loading ? (
        <div className="py-5">
          <SpinnerGap size={128} weight="regular" className="spinner m-auto" />
        </div>
      ) : error ? (
        <div className="flex items-center justify-center text-center bg-primary text-gray-50 uppercase py-10">
          <h1 className="font-bold text-3xl">{error}</h1>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-center text-center bg-primary text-gray-50 uppercase py-10">
            <h1 className="font-bold text-3xl">{pack?.Name}</h1>
          </div>
          <div className="container py-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="w-full lg:col-span-2 ">
                <form>
                  <div className="mb-5 w-full flex gap-5 lg:flex-row flex-col justify-between items-center">
                    <input
                      type="text"
                      className={`p-4 focus:outline-none shadow-md focus:shadow-xl border border-gray-300  transition placeholder:text-sm placeholder:text-gray-500 w-full bg-gray-200`}
                      placeholder="Your Name"
                      required
                    />
                    <input
                      type="text"
                      className={`p-4 focus:outline-none shadow-md focus:shadow-xl border border-gray-300  transition placeholder:text-sm placeholder:text-gray-500 w-full bg-gray-200`}
                      placeholder="Your Company Name"
                      required
                    />
                  </div>
                  <div className="mb-5 w-full">
                    <input
                      type="email"
                      className={`p-4 focus:outline-none shadow-md focus:shadow-xl border border-gray-300  transition placeholder:text-sm placeholder:text-gray-500 w-full bg-gray-200`}
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="mb-5 w-full">
                    <input
                      type="text"
                      className={`p-4 focus:outline-none shadow-md focus:shadow-xl border border-gray-300  transition placeholder:text-sm placeholder:text-gray-500 w-full bg-gray-200`}
                      placeholder="Your Phone Number"
                      required
                    />
                  </div>
                  <div className="mb-5 w-full flex gap-5 lg:flex-row flex-col justify-between items-center">
                    <select
                      type="text"
                      className={`p-4 focus:outline-none shadow-md focus:shadow-xl border border-gray-300  transition placeholder:text-sm placeholder:text-gray-500 w-full bg-gray-200`}
                      placeholder="Your Country"
                      required
                    >
                      {countryDetail.map((co) => (
                        <option value={co.name} key={co.name}>
                          {co.name}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      className={`p-4 focus:outline-none shadow-md focus:shadow-xl border border-gray-300  transition placeholder:text-sm placeholder:text-gray-500 w-full bg-gray-200`}
                      placeholder="Your City"
                      required
                    />
                  </div>
                  <div className="mb-5 w-full flex gap-5 lg:flex-row flex-col justify-between items-center">
                    <input
                      type="text"
                      className={`p-4 focus:outline-none shadow-md focus:shadow-xl border border-gray-300  transition placeholder:text-sm placeholder:text-gray-500 w-full bg-gray-200`}
                      placeholder="Zip Code"
                      required
                    />
                    <input
                      type="text"
                      className={`p-4 focus:outline-none shadow-md focus:shadow-xl border border-gray-300  transition placeholder:text-sm placeholder:text-gray-500 w-full bg-gray-200`}
                      placeholder="House No"
                      required
                    />
                  </div>
                  <div className="mb-5 w-full">
                    <button
                      type="submit"
                      className="p-4 w-full bg-primary uppercase text-gray-50"
                    >
                      {loading ? (
                        <SpinnerGap
                          className="spinner text-center m-auto"
                          size={24}
                          color="#fff"
                          weight="light"
                        />
                      ) : (
                        "Order"
                      )}
                    </button>
                  </div>
                </form>
              </div>
              <div className="w-full flex flex-col justify-between lg:col-span-1 p-5 bg-gray-200 border-t-4 border-primary text-slate-900">
                <h1 className="text-center uppercase text-2xl font-bold p-4">
                  order summary
                </h1>
                <ul className="flex flex-col gap-2 slate-900">
                  <li className="flex items-center justify-between border-b">
                    <span>Pair</span>
                    <span> {pack?.Pair}</span>
                  </li>
                  <li className="flex items-center justify-between border-b">
                    <span>Color</span>
                    <span> {pack?.Color}</span>
                  </li>
                  <li className="flex items-center justify-between border-b">
                    <span>Sizes</span>
                    <span> {pack?.Size}</span>
                  </li>
                  <li className="flex items-center justify-between border-b">
                    <span>Delivery</span>
                    <span>{pack?.Delivery}</span>
                  </li>
                  <li className="flex items-center justify-between border-b">
                    <span>Shipping</span>
                    <span> ${pack?.Shipping}</span>
                  </li>
                  <li className="flex items-center justify-between border-b">
                    <span>Item Price</span>
                    <span> ${pack?.ItemsPrice}</span>
                  </li>
                  <li className="flex items-center justify-between border-b">
                    <span>Price</span>
                    <span> ${pack?.Price}</span>
                  </li>
                </ul>
                <div className="mt-auto w-full flex items-center justify-between gap-3">
                  <button className="p-3 bg-slate-900 uppercase text-gray-50">
                    Apply Coupon
                  </button>
                  <button className="p-3 bg-slate-900 uppercase text-gray-50">
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Order;
