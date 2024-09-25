import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { login } from "../api/api";

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleLogin(event) {
    event.preventDefault();
    const obj = {
      userName: event.target["name"].value,
      password: event.target["password"].value,
    };

    const resultAction = await dispatch(login(obj)); // Dispatch the login thunk

    if (login.fulfilled.match(resultAction)) {
      navigate("/"); // Navigate on successful login
    } else {
      // Optionally handle login failure here if needed
      navigate("/signUp");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Log in to Exclusive
        </h2>
        <form onSubmit={handleLogin} className="flex flex-col">
          <input
            type="text"
            name="name"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Email address"
          />
          <input
            type="password"
            name="password"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Password"
          />
          <div className="flex items-center justify-between flex-wrap">
            <label
              htmlFor="remember-me"
              className="text-sm text-gray-900 cursor-pointer"
            >
              <input type="checkbox" id="remember-me" className="mr-2" />
              Remember me
            </label>
            <a
              href="#"
              className="text-sm text-blue-500 hover:underline mb-0.5"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-[100%] bg-gradient-to-r bg-[#DB4444] text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-[#db4444af] transition ease-in-out duration-150"
          >
            Login
          </button>
        </form>
        <p className="text-gray-900 mt-4">
          Don&apos;t have an account?{" "}
          <a
            href="#"
            className="text-sm text-blue-500 hover:underline mt-4"
            onClick={() => navigate("/signUp")}
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Form;
