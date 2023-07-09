import React from "react";
import Button from "../../atoms/button/Button";
import AboutImage from "../../../static/image/about__image.jpg";
import Image from "next/image";

const WorldMarket = () => {
  return (
    <setion>
      <div className="py-20">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center">
            <span className="text-fanta"> Basic </span> Questions
          </h1>
          <p className="text-gray-600 mb-8">
            Explore global products and trade opportunities
          </p>
        </div>
        <div className="text-center">FAQ</div>
      </div>
    </setion>
  );
};

export default WorldMarket;
