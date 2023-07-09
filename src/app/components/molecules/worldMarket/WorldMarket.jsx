import React from "react";
import Button from "../../atoms/button/Button";
import AboutImage from "../../../static/image/about__image.jpg";
import Image from "next/image";

const WorldMarket = () => {
  return (
    <setion>
      <div className="flex flex-col items-center py-24">
        <h1 className="text-5xl font-bold mb-4 text-center">
          Where the world does <br />{" "}
          <span className="text-fanta"> Market </span>
        </h1>
        <p className="text-gray-600 mb-8">
          Explore global products and trade opportunities
        </p>
        <div className="flex space-x-4">
          <Button variant="primary">Explore Now</Button>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="w-48 sm:w-auto">
              <Image
                src={AboutImage}
                alt="hero__image"
                width={500}
                height={500}
                className="rounded-md"
              />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="w-48 sm:w-auto">
              <Image
                src={AboutImage}
                alt="hero__image"
                width={500}
                height={500}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </setion>
  );
};

export default WorldMarket;
