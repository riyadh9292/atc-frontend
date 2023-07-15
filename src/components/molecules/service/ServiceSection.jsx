import React from "react";
import Image from "next/image";
import ServiceCard from "@/components/atoms/serviceCard/ServiceCard";
import serviceData from "../../../data/serviceData.json";
import ForexIcon from "../../../static/image/forex__icon.png";
import Button from "../../atoms/button/Button";

const ServiceSection = () => {
  return (
    <section>
      <div className="container mx-auto py-20">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center">
            <span className="text-fanta"> ATC </span> Working on
          </h1>
          <p className="text-gray-600 mb-8">
            Explore global products and trade opportunities
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
