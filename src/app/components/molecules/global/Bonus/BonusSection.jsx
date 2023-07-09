import React from "react";
import Image from "next/image";
import ServiceCard from "../../../atoms/global/ServiceCard/ServiceCard";
import serviceData from "../../../data/serviceData.json";
import ForexIcon from "../../../static/image/forex__icon.png";
import BonusCard from "../../../atoms/global/BonusCard/BonusCard";

const BonusSection = () => {
  return (
    <section className="bg-section py-28">
      <div className="container mx-auto">
        <p className="font-bold mb-6 flex justify-center text-white text-[38px]">
          ATC <span className="text-golden pl-2">Working On</span>
        </p>
        <div className="flex justify-center py-10">
          {/* <Image
            src={ForexIcon}
            alt="hero__image"
            width={200}
            height={200}
            className="rounded-md"
          /> */}
        </div>
        <div className="grid grid-cols-3 gap-6">
          {serviceData.map((service, index) => (
            <BonusCard
              key={index}
              count={service.count}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
