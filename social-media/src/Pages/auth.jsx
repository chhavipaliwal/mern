import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../actions/AuthAction";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpass: "",
  });
  const [confirmPass, setConfirmPass] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handlSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  };

  const restForm = () => {
    setConfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpass: "",
    });
  };

  return (
    <div className="min-h-screen w-full bg-[#f8f9fb] flex items-center justify-center px-4 py-10 overflow-hidden relative">
      {/* Glow backgrounds */}
      <div className="absolute -left-32 top-10 w-[350px] h-[350px] bg-blue-300 opacity-20 blur-3xl rounded-full z-0" />
      <div className="absolute -right-32 bottom-10 w-[350px] h-[350px] bg-purple-300 opacity-20 blur-3xl rounded-full z-0" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-6xl">
        {/* Left Side (Logo + Text) */}
        <div className="flex  items-center md:items-start text-center md:text-left gap-4 w-full md:w-[45%]">
          <img
            src="/twitter.png"
            alt="Logo"
            className=" h-20 mx-auto md:mx-0"
          />
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-blue-700">Welcome !</h2>
            <p className="text-gray-700 text-sm font-medium leading-snug">
              Explore the ideas throughout the world.
            </p>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="w-full md:w-[55%] flex justify-center">
          <form
            onSubmit={handlSubmit}
            className="w-full sm:w-4/5 md:w-full lg:w-[420px] bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl animate-fade-in-up flex flex-col gap-6"
          >
            <h2 className="text-2xl font-bold text-center text-gray-800">
              {isSignUp ? "Sign Up" : "Log In"}
            </h2>

            {isSignUp && (
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="firstname"
                  value={data.firstname}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full bg-gray-100 p-3 rounded-md outline-none"
                />
                <input
                  type="text"
                  name="lastname"
                  value={data.lastname}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full bg-gray-100 p-3 rounded-md outline-none"
                />
              </div>
            )}

            <input
              type="text"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full bg-gray-100 p-3 rounded-md outline-none"
            />

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full bg-gray-100 p-3 rounded-md outline-none"
              />
              {isSignUp && (
                <input
                  type="password"
                  name="confirmpass"
                  value={data.confirmpass}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="w-full bg-gray-100 p-3 rounded-md outline-none"
                />
              )}
            </div>

            {!confirmPass && (
              <span className="text-red-500 text-sm self-end">
                * Confirm Password is not same
              </span>
            )}

            <div className="text-sm text-right">
              <span
                className="cursor-pointer text-blue-600 hover:underline"
                onClick={() => {
                  setIsSignUp((prev) => !prev);
                  restForm();
                }}
              >
                {isSignUp
                  ? "Already have an account? Login here"
                  : "Don't have an account? SignUp here"}
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:opacity-90 transition-opacity"
            >
              {loading ? "Loading..." : isSignUp ? "Sign Up" : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
