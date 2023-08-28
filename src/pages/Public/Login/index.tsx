import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

import { AuthImage, AuthHeader } from "../../../components/export";

const Login = () => {
  return (
    <div className="container mx-auto flex py-8 gap-2 p-2 sm:p-0 pt-5 mt-10">
      <AuthImage />
      <div className="w-full md:w-[70%] lg::w-[60%] ml-auto justify-end border rounded-md p-8 space-y-4 border-slate-300 bg-white ">
        <AuthHeader />

        <form>
          <div className="flex items-center border rounded-md shadow-md p-2">
            <FaEnvelope size={25} className="mx-2" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="outline-none flex-1 p-2  "
            />
          </div>

          <div className="flex items-center border rounded-md shadow-md p-2">
            <FaLock size={25} className="mx-2" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="outline-none flex-1 p-2  "
            />
          </div>

          <div className="flex text-sm p-4">
            <input type="checkbox" name="check" className="mx-1" />
            <p>Remember me</p>

            <p className="ml-auto place-self-end text-second">
              <Link to="/forgotpassword">Forgot Password</Link>
            </p>
          </div>

          <button className="w-full p-4 bg-main rounded-md text-white">
            Login
          </button>

          <p className="text-[16px] mt-[20px] text-center">
            Dont have an account? Register as{" "}
            <span className=" text-second underline px-2">
              <Link to="/register/alumni">Alumni</Link>
            </span>
            or
            <span className=" text-second underline px-2">
              <Link to="/register/company">Company</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
