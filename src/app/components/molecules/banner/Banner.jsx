import React from "react";
import Button from "@/app/components/atoms/button/Button";

const Banner = () => {
  return (
    <section>
      <div className="bg-gray-200 bg-section sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[600px] flex items-center">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 flex justify-start">
              <div>
                <p className="text-4xl font-bold text-white text-[58px] leading-tight">
                  Profitability on the
                  <span className="text-fanta">rise</span>
                </p>
                <div className="py-5">
                  <p className="text-white">
                    ATC has provided innovative ideas and income opportunities
                    to live a life in balance.
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
