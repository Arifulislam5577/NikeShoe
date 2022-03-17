import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import { SpinnerGap } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { loginAction } from "../../redux/Action";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector((state) => state.userLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(email, password));
  };

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  useEffect(() => {
    if (Object.keys(userInfo ? userInfo : {}).length > 0) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);
  return (
    <section className="py-10">
      <div className="container">
        <Fade top cascade>
          <form
            className="m-auto w-full md:w-1/2 lg:2/3 lg:shadow-2xl  lg:p-10 md:p-5 md:shadow-xl"
            onSubmit={handleSubmit}
          >
            {error ? (
              <div className="mb-5 w-full m-auto">
                <h1 className="p-4 border-2 text-center uppercase bg-gray-900 text-primary">
                  {error}
                </h1>
              </div>
            ) : (
              <div className="mb-5 w-full m-auto">
                <h1 className="p-4 border-2 text-center uppercase bg-slate-900 text-gray-50">
                  Login
                </h1>
              </div>
            )}
            <div className="mb-5 w-full">
              <input
                type="email"
                className={`p-4 focus:outline-none shadow-md focus:shadow-xl ${
                  error ? "border border-primary" : "border border-gray-300"
                }  transition placeholder:text-sm placeholder:text-gray-500 w-full bg-gray-200`}
                placeholder="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5 w-full">
              <input
                type="password"
                className={`p-4 focus:outline-none shadow-md focus:shadow-xl ${
                  error ? "border border-primary" : "border border-gray-300"
                }  transition placeholder:text-sm placeholder:text-gray-500 w-full bg-gray-200`}
                placeholder="Your Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-5 w-full">
              <button
                type="submit"
                className="p-4 text-center w-full bg-primary uppercase text-gray-50"
              >
                {loading ? (
                  <SpinnerGap
                    className="spinner text-center m-auto"
                    size={24}
                    color="#fff"
                    weight="light"
                  />
                ) : (
                  "Login"
                )}
              </button>
            </div>
            <div className="my-2 w-full">
              <p>
                Create a new account
                <Link
                  to={`/signup?redirect=${redirect}`}
                  className="text-primary ml-2"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </Fade>
      </div>
    </section>
  );
};

export default Login;
