import React from "react";
import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="bg-fanta hover:bg-[#e06f0c] rounded-lg shadow p-6 flex cursor-pointer shadow__global">
      <div className="mr-6">
      <AiOutlineUser className="text-white w-10 h-10"/>
      </div>
      <div>
        <h3 className="text-[20px] font-bold mb-2 text-white">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
