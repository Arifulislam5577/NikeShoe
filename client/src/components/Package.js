import React from "react";

const Package = () => {
  const Package = [
    {
      id: 1,
      package_name: "Mini Pack",
      package_img: "./img/p-1.png",
      pair: 100,
      Color: "All",
      Size: "All",
      Delivery: "3d",
      Shipping: 100,
      Item_Price: 45,
      Price: 4600,
    },
    {
      id: 2,
      package_name: "Medium Pack",
      package_img: "./img/p-2.png",
      pair: 300,
      Color: "All",
      Size: "All",
      Delivery: "7d",
      Shipping: 0,
      Item_Price: 45,
      Price: 13500,
    },
    {
      id: 3,
      package_name: "Large Pack",
      package_img: "./img/p-3.png",
      pair: 500,
      Color: "All",
      Size: "All",
      Delivery: "10d",
      Shipping: 0,
      Item_Price: 45,
      Price: 22500,
    },
  ];
  return (
    <section className="py-5">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {Package.map((pack) => {
            return (
              <figure
                className="p-5 text-center  transition duration-300 shadow-md rounded-md border-t-4 border-t-primary text-slate-900 font-bold"
                key={pack.id}
              >
                <div className="package-img  m-auto h-32">
                  <img
                    src={pack.package_img}
                    alt={pack.package_name}
                    className="w-32 m-auto"
                  />
                </div>
                <h2 className=" text-2xl border-2 border-primary font-bold text-center my-5 inline-block bg-slate-900 text-gray-50 p-3 px-10 m-auto skew-y-12 transform-gpu shadow-2xl	 ">
                  <span className="text-primary">
                    {pack.package_name.split(" ")[0]}
                  </span>

                  {pack.package_name.split(" ")[1]}
                </h2>
                <ul className="flex flex-col gap-1">
                  <li className="flex items-center justify-between">
                    <span>Pair</span>
                    <span> {pack.pair}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Color</span>
                    <span> {pack.Color}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Sizes</span>
                    <span> {pack.Size}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Delivery</span>
                    <span>{pack.Delivery}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Shipping</span>
                    <span> ${pack.Shipping}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Item Price</span>
                    <span> ${pack.Item_Price}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Price</span>
                    <span> ${pack.Item_Price * pack.pair + pack.Shipping}</span>
                  </li>
                </ul>
                <button className="p-3  bg-slate-900 px-10 font-bold text-gray-50 my-3 rounded-full m-auto w-full">
                  Parchage Now
                </button>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Package;
