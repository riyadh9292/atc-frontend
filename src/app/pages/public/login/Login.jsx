"use client";
import Button from "@/app/components/atoms/button/Button";
import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Image from "next/image";
import LogoImage from "@/app/static/image/logo__primary.png";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../features/auth/authActions";

const Login = () => {
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleTermsToggle = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // need to work here
    dispatch(userLogin(e.target.value));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center py-6">
            <Image
              src={LogoImage}
              alt="hero__image"
              width={120}
              height={120}
              className="rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 font-bold text-gray-700"
              htmlFor="password"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-[#e1e1e1] p-2 rounded w-full focus:outline-none focus:border-blue-500 bg-gray-100"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="border border-[#e1e1e1] p-2 rounded w-full focus:outline-none focus:border-blue-500 bg-gray-100"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <BsEye className="h-5 w-5 text-gray-400" />
                ) : (
                  <BsEyeSlash className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="terms"
              className="form-checkbox h-4 w-4 text-blue-500"
              checked={termsAccepted}
              onChange={handleTermsToggle}
            />
            <label htmlFor="terms" className="ml-2 text-gray-700">
              I accept the terms and conditions
            </label>
          </div>
          <div className="py-10">
            <Button variant="primary" className="w-full">
              Sign In
            </Button>
          </div>
        </form>
        <div className="mt-4 text-center text-gray-700">
          Do not have account{" "}
          <a className="text-fanta" href="#">
            Sign Up
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default Login;
