import React from "react";
import Image from "next/image";
import "./Footer.css";
import HeroImage from "../../../static/image/logo__primary.png";
import AW1 from "../../../static/image/63011.jpg";
import AW2 from "../../../static/image/1036660_6702.jpg";
import AW3 from "../../../static/image/1111731_8444.jpg";

import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import ScrollToTop from "../../atoms/scrollToTop/ScrollToTop";

export default function Footer() {
  return (
    <section>
      <div className="h-[560px] relative bg-[#111127]">
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
        </div>
        <div className="container text-white pt-[200px]">
          <div className="grid grid-cols-4 text-center gap-4">
            <div className="flex flex-col items-start gap-1">
              <Image
                src={HeroImage}
                alt="hero__image"
                width={100}
                height={100}
                className="rounded-md pb-4"
              />
              <p className="text-base font-[400] cursor-pointer leading-[30px]">
                © 2023, ATC
              </p>
              <p className="text-base font-[400] cursor-pointer leading-[30px]">
                All rights reserved .
              </p>
              <div className="mt-5">
                <p className="text-[16px] font-bold leading-[38px] pb-4 text-fanta text-left">
                  Awards and Recognition
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <Image
                    src={AW1}
                    alt="hero__image"
                    width={50}
                    height={50}
                    className="rounded-md  cursor-pointer hover:border hover:border-fanta"
                  />
                  <Image
                    src={AW2}
                    alt="hero__image"
                    width={50}
                    height={50}
                    className="rounded-md cursor-pointer hover:border hover:border-fanta"
                  />
                  <Image
                    src={AW3}
                    alt="hero__image"
                    width={50}
                    height={50}
                    className="rounded-md cursor-pointer hover:border hover:border-fanta"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-1  ">
              <p className="text-[25px] font-bold leading-[38px] pb-4 text-fanta">
                Our Service
              </p>

              <p className="text-base font-[400] cursor-pointer hover:underline hover:text-[#e6e6e6] leading-[30px]">
                Trading FOREX
              </p>
              <p className="text-base font-[400] cursor-pointer hover:underline hover:text-[#e6e6e6] leading-[30px]">
                Trading Crypto
              </p>
              <p className="text-base font-[400] cursor-pointer hover:underline hover:text-[#e6e6e6] leading-[30px]">
                Easy income
              </p>
            </div>
            <div className="flex flex-col items-start gap-1">
              <p className="text-[25px] font-bold leading-[38px] text-fanta pb-4">
                Terms & condition
              </p>
              <p className="text-base font-[400] cursor-pointer hover:underline hover:text-[#e6e6e6] leading-[30px]">
                ATC Overview
              </p>
              <p className="text-base font-[400] cursor-pointer hover:underline hover:text-[#e6e6e6] leading-[30px]">
                Privacy
              </p>
              <p className="text-base font-[400] cursor-pointer hover:underline hover:text-[#e6e6e6] leading-[30px]">
                Terms & Conditions
              </p>
            </div>
            <div className="flex flex-col items-start gap-1 pl-20">
              <p className="text-[25px] font-bold leading-[38px]  pb-4 text-fanta ">
                Contact Us
              </p>
              <p className="text-base font-[400] cursor-pointer hover:underline hover:text-[#e6e6e6] leading-[30px]">
                Dhaka, Bangladesh
              </p>
              <p className="text-base font-[400] cursor-pointer hover:underline hover:text-[#e6e6e6] leading-[30px]">
                support@atc.com
              </p>
              <div className="flex items-center gap-5 py-4">
                <BsFacebook className="text-1xl cursor-pointer hover:text-fanta" />
                <BsLinkedin className="text-1xl cursor-pointer hover:text-fanta" />
                <BsInstagram className="text-1xl cursor-pointer hover:text-fanta" />
                <BsTwitter className="text-1xl cursor-pointer hover:text-fanta" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </section>
  );
}
