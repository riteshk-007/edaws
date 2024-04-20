"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaMoneyBillAlt,
  FaUserAlt,
  FaEnvelope,
  FaIdCard,
  FaPhoneAlt,
} from "react-icons/fa";
import Checkout from "./Checkout";

const Pay = () => {
  const [checkoutData, setCheckoutData] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setCheckoutData(data);
  };

  return (
    <div
      className=" py-12 flex justify-center items-center w-full "
      style={{
        backgroundImage: "url('/back.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <div className="shadow-lg rounded-lg p-8 w-full max-w-md bg-orange-100 ">
        <h2 className="text-3xl font-bold mb-6 text-center text-orange-500">
          Donation Form
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label htmlFor="name" className=" font-bold mb-2 flex items-center">
              <FaUserAlt className="inline-block mr-2 text-gray-500" />
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
            />
            {errors.name && (
              <div className="text-red-500 mt-2">{errors.name.message}</div>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className=" font-bold mb-2 flex items-center"
            >
              <FaEnvelope className="inline-block mr-2 text-gray-500" />
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
              })}
              className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
            {errors.email && (
              <div className="text-red-500 mt-2">{errors.email.message}</div>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="phone"
              className=" font-bold mb-2 flex items-center"
            >
              <FaPhoneAlt className="inline-block mr-2 text-gray-500" />
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone", { required: "Phone number is required" })}
              className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <div className="text-red-500 mt-2">{errors.phone.message}</div>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="panNumber"
              className=" font-bold mb-2 flex items-center"
            >
              <FaIdCard className="inline-block mr-2 text-gray-500" />
              PAN Number
            </label>
            <input
              type="text"
              id="panNumber"
              {...register("panNumber", {
                required: "PAN number is required",
                pattern: {
                  value: /^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/,
                  message: "Invalid PAN number format",
                },
              })}
              className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              placeholder="Enter your PAN number"
            />
            {errors.panNumber && (
              <div className="text-red-500 mt-2">
                {errors.panNumber.message}
              </div>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="amount"
              className=" font-bold mb-2 flex items-center"
            >
              <FaMoneyBillAlt className="inline-block mr-2 text-gray-500" />
              Donation Amount (INR{" "}
              <span className="text-green-500 font-bold">₹</span>)
            </label>
            <input
              type="number"
              id="amount"
              min={1}
              {...register("amount", {
                required: "Donation amount is required",
              })}
              className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              placeholder="Enter your donation amount"
            />
            {errors.amount && (
              <div className="text-red-500 mt-2">{errors.amount.message}</div>
            )}
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg w-full"
          >
            Submit Donation
          </button>
        </form>
      </div>
      {checkoutData && <Checkout data={checkoutData} />}
    </div>
  );
};

export default Pay;
