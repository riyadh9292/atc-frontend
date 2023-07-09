import React from "react";

import "./Footer.css";
import HeroImage from "../../../static/image/logo__primary.png";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="h-[600px] relative bg-[#151552]">
      <div class="custom-shape-divider-top-1688931017">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>{" "}
      <div className="container text-white pt-[200px]">
        <div className="grid grid-cols-4 text-center">
          <div className="flex flex-col items-start gap-2.5">
            <Image
              src={HeroImage}
              alt="hero__image"
              width={100}
              height={100}
              className="rounded-md pb-4"
            />
            <p className="text-xl font-[400] leading-[30px]">© 2023, ATC</p>
            <p className="text-xl font-[400] leading-[30px]">
              All rights reserved .
            </p>
          </div>
          <div className="flex flex-col items-start gap-2.5  ">
            <p className="text-[25px] font-bold leading-[38px] pb-4">
              Our Service
            </p>
            <p className="text-xl font-[400] leading-[30px]">Trading FOREX</p>
            <p className="text-xl font-[400] leading-[30px]">Trading Crypto</p>
            <p className="text-xl font-[400] leading-[30px]">Easy income</p>
          </div>
          <div className="flex flex-col items-start gap-2.5">
            <p className="text-[25px] font-bold leading-[38px]  pb-4">
              Terms & Privacy policy
            </p>
            <p className="text-xl font-[400] leading-[30px]">ATC Overview</p>
            <p className="text-xl font-[400] leading-[30px]">Privacy</p>
            <p className="text-xl font-[400] leading-[30px]">
              Terms & Conditions
            </p>
          </div>
          <div className="flex flex-col items-start gap-2.5 pl-8">
            <p className="text-[25px] font-bold leading-[38px]  pb-4 ">
              Contact Us
            </p>
            <p className="text-xl font-[400] leading-[30px]">
              Dhaka, Bangladesh
            </p>
            <p className="text-xl font-[400] leading-[30px]">support@atc.com</p>
          </div>
        </div>
        {/* <div className="flex justify-center items-center h-12">
          <p className="text-white">All rights reserved By ATC © 2023</p>
        </div> */}
      </div>
    </section>
  );
}
