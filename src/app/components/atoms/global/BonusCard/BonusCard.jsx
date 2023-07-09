import React from "react";

const BonusCard = ({ count, title, description }) => {
  return (
    <div className="bg-arabica rounded-lg shadow p-6 flex">
      <p className="mr-6 text-white">{count}</p>
      <div>
        <h3 className="text-[20px] font-bold mb-2 text-white">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default BonusCard;