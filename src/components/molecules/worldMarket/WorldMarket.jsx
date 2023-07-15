"use client";
import React, { useEffect } from "react";
import Button from "../../atoms/button/Button";
import AboutImage from "../../../static/image/forex.jpg";
import Image from "next/image";
import AOS from "aos";

const WorldMarket = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });

    AOS.refresh();
  }, []);

  return (
    <section>
      <div className="flex flex-col items-center py-24" data-aos="fade-up">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Where the world does <br />
          <span className="text-fanta"> Market </span>
        </h1>
        <p className="text-gray-600 mb-8">
          Explore global products and trade opportunities
        </p>
        <div className="flex space-x-4">
          <Button variant="primary">Explore Now</Button>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-white p-4 rounded-lg shadow-md" data-aos="fade-up">
            <div className="w-48 sm:w-auto">
              <Image
                src={AboutImage}
                alt="hero__image"
                width={500}
                height={500}
                className="rounded-md"
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-2xl font-bold text-graphite py-4">
                Forex Trading
              </p>
              <div>
                <Button variant="primary">Trade Now</Button>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md" data-aos="fade-up">
            <div className="w-48 sm:w-auto">
              <Image
                src={AboutImage}
                alt="hero__image"
                width={500}
                height={500}
                className="rounded-md"
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-2xl font-bold text-graphite py-4">
                Crypto Trading
              </p>
              <div>
                <Button variant="primary">Trade Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMarket;
