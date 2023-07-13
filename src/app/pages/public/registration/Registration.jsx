"use client";
import Button from "@/app/components/atoms/button/Button";
import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Image from "next/image";
import LogoImage from "@/app/static/image/logo__primary.png";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleReferralCodeChange = (e) => {
    setReferralCode(e.target.value);
  };

  const handleTermsToggle = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handlePasswordVisibilityToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleConfirmPasswordVisibilityToggle = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-lg">
      <div className="flex justify-center pt-5 pb-14">
            <Image
              src={LogoImage}
              alt="hero__image"
              width={120}
              height={120}
              className="rounded-md"
            />
          </div>
        <form onSubmit={handleSubmit}>
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="border border-[#e1e1e1] p-2 rounded w-full focus:outline-none focus:border-fanta bg-gray-100"
                value={firstName}
                onChange={handleFirstNameChange}
                required
              />
            </div>
            <div className="w-1/2 ml-2">
              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="border border-[#e1e1e1] p-2 rounded w-full focus:outline-none focus:border-fanta bg-gray-100"
                value={lastName}
                onChange={handleLastNameChange}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-[#e1e1e1] p-2 rounded w-full focus:outline-none focus:border-fanta bg-gray-100"
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
                type={passwordVisible ? "text" : "password"}
                id="password"
                className="border border-[#e1e1e1] p-2 rounded w-full focus:outline-none focus:border-fanta bg-gray-100"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <div
                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                onClick={handlePasswordVisibilityToggle}
              >
                {passwordVisible ? <BsEye className="h-5 w-5 text-gray-400" /> : <BsEyeSlash  className="h-5 w-5 text-gray-400" />}
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 font-bold text-gray-700"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                id="confirmPassword"
                className="border border-[#e1e1e1] p-2 rounded w-full focus:outline-none focus:border-fanta bg-gray-100"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
              <div
                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                onClick={handleConfirmPasswordVisibilityToggle}
              >
                {confirmPasswordVisible ? <BsEye  className="h-5 w-5 text-gray-400"/> : <BsEyeSlash  className="h-5 w-5 text-gray-400"/>}
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 font-bold text-gray-700"
              htmlFor="referralCode"
            >
              Referral Code (Optional)
            </label>
            <input
              type="text"
              id="referralCode"
              className="border border-[#e1e1e1] p-2 rounded w-full focus:outline-none focus:border-fanta bg-gray-100"
              value={referralCode}
              onChange={handleReferralCodeChange}
            />
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
          <div className="py-5">
            <Button variant="primary" className="w-full">
              Sign Up
            </Button>
          </div>
        </form>
        <div className="mt-4 text-center text-gray-700">
          Already have an account? <a href="#" className="text-fanta">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default Registration;
