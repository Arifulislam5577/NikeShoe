import { SpinnerGap } from "phosphor-react";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Fade from "react-reveal/Fade";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { signupAction } from "../../redux/Action";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector((state) => state.userSignup);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupAction(name, email, password));
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
        <Fade bottom cascade>
          <form
            className="m-auto w-full md:w-1/2 lg:2/3 lg:shadow-2xl  lg:p-10 md:p-5 md:shadow-xl"
            onSubmit={handleSubmit}
          >
            {error ? (
              <div className="mb-5 w-full m-auto">
                <h1 className="p-4 border-2 text-center uppercase bg-gray-900 text-primary">
                  {error?.split("USER validation failed:")?.map((el, i) => (
                    <p key={i}>{el}</p>
                  ))}
                </h1>
              </div>
            ) : (
              <div className="mb-5 w-full m-auto">
                <h1 className="p-4 border-2 text-center uppercase bg-slate-900 text-gray-50">
                  Signup
                </h1>
              </div>
            )}
            <div className="mb-5 w-full">
              <input
                type="text"
                className={`p-4 focus:outline-none shadow-md focus:shadow-xl ${
                  error ? "border border-primary" : "border border-gray-300"
                }  transition placeholder:text-sm placeholder:text-gray-500 w-full bg-gray-200`}
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
                  "Signup"
                )}
              </button>
            </div>
            <div className="my-2 w-full">
              <p>
                Already have an account?
                <Link
                  to={`/login?redirect=${redirect}`}
                  className="text-primary ml-2"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </Fade>
      </div>
    </section>
  );
};

export default Signup;
