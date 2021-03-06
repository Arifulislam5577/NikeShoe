import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fade, Zoom } from "react-reveal";
import { OrderAction, signoutAction } from "../../redux/Action";
import ErrorMessage from "../ErrorMessage";
import Loader from "../Loader";
const Profile = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { orders, loading, error } = useSelector((state) => state.userOrder);
  const handleLogout = () => {
    dispatch(signoutAction());
  };

  useEffect(() => {
    dispatch(OrderAction());
  }, [dispatch]);
  return (
    <section className="">
      <Fade cascade top>
        <div className=" flex items-center gap-5 justify-center bg-primary text-gray-50  py-10">
          <div className="user-img border-r-4 border-gray-50">
            <img
              src="https://res.cloudinary.com/dwrpcntox/image/upload/v1645614915/Shopping-cart/Untitled_design_shndgt.png"
              alt="user"
              className="w-20 h-20 rounded-full mr-5"
            />
          </div>
          <div className="user-details flex flex-col gap-2">
            <h1 className="font-bold text-3xl uppercase">
              Hi,Mr. {userInfo?.name}
            </h1>
            <h3>{userInfo?.email}</h3>
            <button
              className="p-1 hover:bg-slate-900 hover:border-slate-900 transition uppercase text-sm border-2 border-gray-50"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </Fade>
      <div className="container py-10">
        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorMessage error={error} />
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
              <Zoom>
                <div className="border-l-4 border-primary box lg:col-span-1 w-full p-5 bg-gray-200   shadow-md hover:shadow transition">
                  <h1 className="text-3xl inline-block w-20 h-20 bg-slate-900 font-bold uppercase text-gray-50 text-center leading-extra -mt-28 shadow-2xl">
                    {orders?.length}
                  </h1>
                  <h1 className="text-xl my-2 font-bold uppercase text-slate-700">
                    Order
                  </h1>
                  <p className="text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Modi, sunt asperiores! Suscipit velit hic nam.
                  </p>
                </div>
              </Zoom>
              <Zoom>
                <div className="border-l-4 border-primary box lg:col-span-1 w-full p-5 bg-gray-200   shadow-md hover:shadow transition">
                  <h1 className="text-3xl  inline-block w-28 h-20 bg-slate-900 font-bold uppercase text-gray-50 text-center leading-extra -mt-28 shadow-2xl">
                    $
                    {orders?.reduce(
                      (prev, acc) => prev + acc.billingInfo.Price,
                      0
                    )}
                  </h1>
                  <h1 className="text-xl my-2 font-bold uppercase text-slate-700">
                    total price
                  </h1>
                  <p className="text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Modi, sunt asperiores! Suscipit velit hic nam.
                  </p>
                </div>
              </Zoom>
              <Zoom>
                <div className="border-l-4 border-primary box lg:col-span-1 w-full p-5 bg-gray-200   shadow-md hover:shadow transition">
                  <h1 className="text-3xl inline-block w-20 h-20 bg-slate-900 font-bold uppercase text-gray-50 text-center leading-extra -mt-28 shadow-2xl">
                    {orders?.length >= 3 ? "A+" : "A-"}
                  </h1>
                  <h1 className="text-xl my-2 font-bold uppercase text-slate-700">
                    status
                  </h1>
                  <p className="text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Modi, sunt asperiores! Suscipit velit hic nam.
                  </p>
                </div>
              </Zoom>
            </div>
            <div className="">
              <h1 className="font-bold text-3xl uppercase mb-5">My Order</h1>

              {orders?.map((order, index) => {
                return (
                  <ul
                    className="flex lg:flex-row flex-col lg:items-center items-start gap-3 border-2 my-1 hover:bg-slate-900 transition hover:text-gray-50 border-gray-200 p-2 justify-between"
                    key={order._id}
                  >
                    <li>{index + 1}</li>
                    <li>{order._id}</li>
                    <li>{order?.billingInfo?.Name}</li>
                    <li>${order?.billingInfo?.Price}</li>
                    <li>
                      {order?.shippingInfo?.isDelivered
                        ? "Delivered"
                        : "Processing"}
                    </li>
                  </ul>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Profile;
