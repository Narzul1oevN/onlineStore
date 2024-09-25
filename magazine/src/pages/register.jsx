import React from "react";
import { saveToken } from "../utils/token";
import { axiosRequest } from "../utils/token";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    let obj = {
      userName: e.target["userName"].value,
      phoneNumber: e.target["userNumber"].value,
      email: e.target["userEmail"].value,
      password: e.target["userPassword"].value,
      confirmPassword: e.target["userConfirmPassword"].value,
    };

    if (obj.password !== obj.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    handleRegister(obj);
  }

  async function handleRegister(obj) {
    try {
      const { status, data } = await axios.post(
       import.meta.env.VITE_APP_API_URL + "/Account/register", obj );
      if (status == 200) {
        toast.success('Successfully toasted!')
        // saveToken(data.token);
        navigate("/logIn")
      }
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      toast.error("Error")
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Create an account</h2>
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
          <input
            name="userName"
            type="text"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4"
            placeholder="User name"
          />
          <input
            name="userNumber"
            type="number"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4"
            placeholder="Phone number"
          />
          <input
            name="userEmail"
            type="email"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4"
            placeholder="Email"
          />
          <input
            name="userPassword"
            type="password"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4"
            placeholder="Password"
          />
          <input
            name="userConfirmPassword"
            type="password"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4"
            placeholder="Confirm Password"
          />
          <button
            type="submit"
            className="w-[100%] bg-[#DB4444] text-white font-bold py-2 px-4 rounded-md mt-4"
          >
            Sign Up
          </button>
        </form>
        <p className="text-gray-900 mt-4">
              {" "}
              Do have account?{" "}
              <a
                href="#"
                className="text-sm text-blue-500 -200 hover:underline mt-4"
                onClick={() => navigate("/logIn")}
              >
                Log in
              </a>
            </p>
      </div>
    </div>
  );
};

export default SignUp;
