import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fade, Zoom } from "react-reveal";
import {
  adminOrderAction,
  getDealsAction,
  signoutAction,
  totalUserAction,
  updateOrderAction,
} from "../../redux/Action";
import { ORDER_UPDATE_RESET } from "../../redux/Constants";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
const Admin = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { error, loading, orders } = useSelector((state) => state.adminOrder);
  const { users } = useSelector((state) => state.users);
  const { success } = useSelector((state) => state.orderUpdate);
  const { deals } = useSelector((state) => state.getBigDeal);

  const handleLogout = () => {
    dispatch(signoutAction());
  };

  const updateOrderHandler = (id) => {
    dispatch(updateOrderAction(id));
  };

  React.useEffect(() => {
    if (success) {
      dispatch({ type: ORDER_UPDATE_RESET });
    }
    dispatch(adminOrderAction());
    dispatch(totalUserAction());
    dispatch(getDealsAction());
  }, [dispatch, success]);

  return (
    <section className="">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Fade cascade top>
            <div className=" flex items-center gap-5 justify-center bg-primary text-gray-50  py-10">
              <div className="user-img border-r-4 border-gray-50">
                <h1 className="font-bold text-4xl uppercase mr-3">ADMIN</h1>
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
              <ErrorMessage />
            ) : (
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
                    <h1 className="text-3xl  inline-block w-20 h-20 bg-slate-900 font-bold uppercase text-gray-50 text-center leading-extra -mt-28 shadow-2xl">
                      {users?.length}
                    </h1>
                    <h1 className="text-xl my-2 font-bold uppercase text-slate-700">
                      users
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
                      {deals?.length}
                    </h1>
                    <h1 className="text-xl my-2 font-bold uppercase text-slate-700">
                      custom order
                    </h1>
                    <p className="text-sm">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Modi, sunt asperiores! Suscipit velit hic nam.
                    </p>
                  </div>
                </Zoom>
              </div>
            )}
          </div>
          <div className="container py-10">
            <h1 className="text-3xl font-bold uppercase text-slate-900">
              All Orders
            </h1>

            {orders?.map((order, index) => {
              return (
                <ul
                  className="flex items-center  border-2 my-1 hover:bg-slate-900 transition hover:text-gray-50 border-gray-200 p-2 justify-between bg-gray-200"
                  key={order._id}
                >
                  <li>{index + 1}</li>

                  <li>{order?.billingInfo?.Name}</li>
                  <li>${order?.billingInfo?.Price}</li>
                  <li>
                    <button
                      className="hover:text-primary"
                      onClick={() => updateOrderHandler(order._id)}
                    >
                      {order?.shippingInfo?.isDelivered
                        ? "Delivered"
                        : "Mark As Delivered"}
                    </button>
                  </li>
                </ul>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default Admin;
