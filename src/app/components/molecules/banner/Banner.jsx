import React from "react";
import Button from "@/app/components/atoms/button/Button";
import "./Banner.css";

const Banner = () => {
  return (
    <section>
      <div className="bg-gray-200 bg-section sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[600px] flex items-center">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 flex justify-start">
              <div>
                <p className="text-4xl font-bold text-white sm:text-6xl md:text-7xl xl:text-6xl leading-tight blink__text">
                  Profitability
                </p>
                <p className="text-fanta text-5xl sm:text-6xl md:text-7xl xl:text-6xl font-bold">
                  on the rise
                </p>
                <div className="pb-5 pt-7">
                  <p className="text-white font-semibold">
                    ATC has provided innovative ideas and income <br />
                    opportunities to live a life in balance.
                  </p>
                </div>
                <Button variant="primary">Sign Up Now</Button>
              </div>
            </div>
            <div className="col-span-1 flex justify-end items-center mt-4 md:mt-0">
              <div className="w-48 sm:w-auto">
                {/* <Image
                  src={HeroImage}
                  alt="hero__image"
                  width={300}
                  height={300}
                  className="rounded-md"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
