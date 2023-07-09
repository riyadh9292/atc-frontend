import React from "react";
import Image from "next/image";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="bg-arabica rounded-lg shadow p-6 flex">
      <div className="mr-6">
        <Image
          src={image}
          alt="hero__image"
          width={100}
          height={100}
          className="rounded-md"
        />
      </div>
      <div>
        <h3 className="text-[20px] font-bold mb-2 text-white">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
