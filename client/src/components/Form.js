import { SpinnerGap } from "phosphor-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dealsAction } from "../redux/Action";
import ErrorMessage from "../components/ErrorMessage";
const Form = () => {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const { loading, error, deal } = useSelector((state) => state.bigDeal);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(dealsAction(name, email, companyName, message));
    setName("");
    setCompanyName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="py-10">
      <div className="container">
        {error && <ErrorMessage error={error} />}
        <h2 className=" lg:text-5xl text-4xl  font-bold text-center mb-10   text-slate-900  ">
          Big <span className="text-primary">Deal?</span>
        </h2>
        {deal && (
          <p className=" text-xl my-3 p-3 font-bold text-center mb-10 bg-gray-200  text-slate-900  ">
            Deal created successfully. Please check your email
          </p>
        )}
        <form className=" lg:w-4/5 w-full m-auto " onSubmit={handleSubmit}>
          <div className="mb-5  w-full flex lg:flex-row flex-col items-center gap-5">
            <input
              type="text"
              className="p-4 focus:outline-none shadow-md focus:shadow-xl  border border-gray-300 transition placeholder:text-sm placeholder:text-gray-500 lg:w-1/2 w-full bg-gray-200"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="p-4 focus:outline-none shadow-md focus:shadow-xl border border-gray-300 transition placeholder:text-sm placeholder:text-gray-500 lg:w-1/2 w-full bg-gray-200"
              placeholder="Company Name"
              required
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div className="mb-5 w-full">
            <input
              type="email"
              className="p-4 focus:outline-none shadow-md focus:shadow-xl border border-gray-300 transition placeholder:text-sm placeholder:text-gray-500 w-full bg-gray-200"
              placeholder="Your Business Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5 w-full">
            <textarea
              type="text"
              className="p-4 focus:outline-none shadow-md focus:shadow-xl border border-gray-300 transition placeholder:text-sm placeholder:text-gray-500 w-full bg-gray-200"
              placeholder="Enter Your Business Deal Details"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="mb-5 w-full">
            <button
              type="submit"
              className="p-4 w-full bg-slate-900 uppercase text-gray-50"
            >
              {loading ? (
                <SpinnerGap
                  className="spinner text-center m-auto"
                  size={24}
                  color="#fff"
                  weight="light"
                />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
