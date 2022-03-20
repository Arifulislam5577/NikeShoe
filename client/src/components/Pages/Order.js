import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { countries } from "countries-list";
import { useDispatch, useSelector } from "react-redux";
import { createOrderAction, singlePackageAction } from "../../redux/Action";
import { SpinnerGap } from "phosphor-react";
import { Fade } from "react-reveal";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const Order = () => {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [isPaid, setIsPaid] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pack } = useSelector((state) => state.singlePack);
  const {
    error: orderError,
    loading: orderLoading,
    success,
  } = useSelector((state) => state.order);

  const countryDetail = Object.values(countries);
  const [Stripetoken, setStripetoken] = useState(null);

  const onToken = (token) => {
    setStripetoken(token);
  };

  const makeRequset = async () => {
    try {
      const { data } = await axios.post("/api/v1/payment", {
        tokenId: Stripetoken.id,
        amount: pack?.Price,
      });

      data !== null && setIsPaid(true);
    } catch (error) {
      console.log(error);
    }
  };

  Stripetoken !== null && makeRequset();

  const handleSubmit = (e) => {
    e.preventDefault();

    const shippingInfo = {
      name,
      companyName,
      email,
      phone,
      country,
      city,
      zipcode,
      houseNumber,
    };

    const billingInfo = {
      paid: true,
      amount: pack?.Price,
      Pair: pack?.Pair,
      Color: pack?.Color,
      Delivery: pack?.Delivery,
      Shipping: pack?.Shipping,
      ItemsPrice: pack?.ItemsPrice,
      Size: pack?.Size,
      Price: pack?.Price,
      Img: pack?.Img,
      Name: pack?.Name,
    };

    dispatch(createOrderAction(shippingInfo, billingInfo));
  };

  useEffect(() => {
    dispatch(singlePackageAction(id));
    if (success) {
      navigate("/profile");
    }
  }, [dispatch, id, success, navigate]);

  return (
    <section>
      <Fade cascade>
        <div className="flex items-center justify-center text-center bg-primary text-gray-50 uppercase py-10">
          <h1 className="font-bold text-3xl">{pack?.Name}</h1>
        </div>
      </Fade>
      <div className="container  py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <Fade>
            <div className="w-full lg:col-span-2 ">
              {orderError && (
                <h1 className="py-5 text-center bg-slate-900 text-primary font-bold text-3xl uppercase">
                  {orderError}
                </h1>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-5 w-full flex gap-5 lg:flex-row flex-col justify-between items-center">
                  <input
                    type="text"
                    className={`p-4 focus:outline-none shadow-md focus:shadow-xl border border-gray-300  transition placeholder:text-sm placeholder:text-gray-500 w-full bg-gray-200`}
                    placeholder="Your Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="text"
                    className={`p-4 focus:outline-none shadow-md focus:shadow-xl border border-gray-300  transition placeholder:text-sm placeholder:text-gray-500 w-full bg-gray-200`}
                    placeholder="Your Company Name"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                <div className="mb-5 w-full">
                  <input
                    type="email"
                    className={`p-4 focus:outline-none shadow-md focus:shadow-xl border border-gray-300  transition placeholder:text-sm placeholder:text-gray-500 w-full bg-gray-200`}
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-5 w-full">
                  <input
                    type="text"
                    className={`p-4 focus:outline-none shadow-md focus:shadow-xl border border-gray-300  transition placeholder:text-sm placeholder:text-gray-500 w-full bg-gray-200`}
                    placeholder="Your Phone Number"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mb-5 w-full flex gap-5 lg:flex-row flex-col justify-between items-center">
                  <select
                    type="text"
                    className={`p-4 focus:outline-none shadow-md focus:shadow-xl border border-gray-300  transition placeholder:text-sm placeholder:text-gray-500 w-full bg-gray-200`}
                    placeholder="Your Country"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
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
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="mb-5 w-full flex gap-5 lg:flex-row flex-col justify-between items-center">
                  <input
                    type="text"
                    className={`p-4 focus:outline-none shadow-md focus:shadow-xl border border-gray-300  transition placeholder:text-sm placeholder:text-gray-500 w-full bg-gray-200`}
                    placeholder="Zip Code"
                    required
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                  />
                  <input
                    type="text"
                    className={`p-4 focus:outline-none shadow-md focus:shadow-xl border border-gray-300  transition placeholder:text-sm placeholder:text-gray-500 w-full bg-gray-200`}
                    placeholder="House No"
                    required
                    value={houseNumber}
                    onChange={(e) => setHouseNumber(e.target.value)}
                  />
                </div>
                <div className="mb-5 w-full">
                  <button
                    type="submit"
                    className="p-4 w-full bg-slate-900 uppercase text-gray-50"
                    disabled={!isPaid}
                  >
                    {orderLoading ? (
                      <SpinnerGap
                        className="spinner text-center m-auto"
                        size={24}
                        color="#fff"
                        weight="light"
                      />
                    ) : isPaid ? (
                      "Order"
                    ) : (
                      "Pay First"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </Fade>
          <Fade>
            <div className="w-full flex flex-col justify-between lg:col-span-1 p-5 bg-gray-200  border-primary text-slate-900">
              <h1 className="text-center uppercase text-2xl font-bold p-4 bg-slate-900 text-gray-50">
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
              <div className=" w-full ">
                <StripeCheckout
                  name="Nike Shoe"
                  image="https://res.cloudinary.com/dwrpcntox/image/upload/v1647746321/Shopping-cart/header-img_bcqrvg.png"
                  description={`You total is $${pack?.Price}`}
                  amount={pack?.Price * 100}
                  token={onToken}
                  stripeKey={process.env.REACT_APP_STRIPE_KEY}
                >
                  <button
                    className={`p-4 w-full block  text-sm  bg-slate-900 uppercase text-gray-50`}
                    disabled={isPaid}
                  >
                    {isPaid ? "Paid Successfully" : "Pay Now"}
                  </button>
                </StripeCheckout>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Order;
