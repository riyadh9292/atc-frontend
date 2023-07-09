import React from "react";
import Image from "next/image";
import Button from "../../../atoms/global/Button/Button";
import HeroImage from "../../../static/image/hero__image.png";

const HeroSection = () => {
  return (
    <section>
      <div className="bg-gray-200 bg-section sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[600px] flex items-center">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 flex justify-start">
              <div>
                <p className="text-4xl font-bold text-white text-[58px] leading-tight">
                  Invest with stable
                  <span className="text-golden">platform</span>
                </p>
                <div className="py-5">
                  <p className="text-white">Make money fast money</p>
                  <p className="text-white">
                    Invest your money in A Trusted and reliable company
                  </p>
                </div>
                <Button variant="primary">Sign Up Now</Button>
              </div>
            </div>
            <div className="col-span-1 flex justify-end items-center mt-4 md:mt-0">
              <div className="w-48 sm:w-auto">
                <Image
                  src={HeroImage}
                  alt="hero__image"
                  width={300}
                  height={300}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
