import React from "react";
import { FaEnvelope, FaLock, FaIdBadge, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthImage, AuthHeader } from "../../../components/export";

const RegisterAlumni = () => {
  return (
    <div className="container mx-auto flex py-8 gap-2  p-2 sm:p-0 mt-10">
      <AuthImage />

      <div className="w-full md:w-[70%] lg:w-[60%] ml-auto justify-end border rounded-md p-8 space-y-4 border-slate-300 bg-white ">
        <AuthHeader />
        <form action="">
          <div className="flex items-center border rounded-md shadow-md p-2">
            <FaUserAlt size={25} className="mx-2" />
            <input
              type="name"
              name="name"
              placeholder="Name"
              className="outline-none p-2  "
            />
          </div>

          <div className="flex items-center border rounded-md shadow-md p-2">
            <FaIdBadge size={25} className="mx-2" />
            <input
              type="number"
              name="number"
              placeholder="ID Number"
              className="outline-none  p-2  "
            />
          </div>

          <div className="flex items-center border rounded-md shadow-md p-2">
            <FaEnvelope size={25} className="mx-2" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="outline-none p-2  "
            />
          </div>

          <div className="flex items-center border rounded-md shadow-md p-2">
            <FaLock size={25} className="mx-2" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="outline-none p-2  "
            />
          </div>

          <div className="flex text-sm p-4 ">
            <input type="checkbox" name="check" className="mx-1" />
            <p>Remember me</p>
          </div>

          <button className="w-full p-4 bg-main rounded-md text-white">
            Login
          </button>
          <p className="text-[16px] mt-[20px] text-center">
            Already have an account?
            <span className=" text-second underline px-2">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterAlumni;
