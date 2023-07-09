import React from "react";
import Button from "../../atoms/Button/Button";
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
          <div className="flex flex-col items-start ">
            <Image
              src={HeroImage}
              alt="hero__image"
              width={100}
              height={100}
              className="rounded-md"
            />
          </div>
          <div className="">Our services</div>
          <div className="">Terms & Privacy policy</div>
          <div className="">Contact Us</div>
        </div>
        <div className="flex justify-center items-center h-12">
          <p className="text-white">All rights reserved By ATC © 2023</p>
        </div>
      </div>
    </section>
  );
}
