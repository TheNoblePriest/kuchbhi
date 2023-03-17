"use client";

import React from "react";

function Login() {
  return (
    <div className=" relative flex justify-center items-center  bg-[#e36c4d] w-full h-screen">
      <div className=" flex justify-center flex-col space-y-3 items-center">
        <h1 className=" md:text-5xl text-3xl drop-shadow-2xl text-white font-thin">
          Timely Chat Application
        </h1>
        <img
          className="w-[500px]"
          src="https://i.pinimg.com/originals/3f/82/40/3f8240fa1d16d0de6d4e7510b43b37ba.gif"
          alt=""
        />
        <div className="text-white shadow-lg cursor-pointer shadow-white  font-bold  flex justify-center items-center rounded-md bg-orange-800 px-4 py-1">
          <button className="text-white  font-bold  flex justify-center items-center rounded-md px-4 py-1">
            Continue with google
          </button>
          <img className="w-10" src="/arrow.gif" alt="..." />
        </div>
      </div>
      <div className=" bg-orange-800 p-2 rounded-full right-10 absolute bottom-10">
        <img className=" w-10" src="/gmail.gif" alt="" />
      </div>
    </div>
  );
}

export default Login;
