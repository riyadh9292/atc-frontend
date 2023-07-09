import React from "react";

import "./JoinCommunity.css";
import Button from "../../atoms/Button/Button";

const JoinCommunity = () => {
  return (
    <div className="py-5">
      <div className="parallax">
        <div className="container mx-auto pt-28 text-white">
          <h6 className="py-2.5 text-xl text-white font-semibold flex items-center gap-2">
            <span className="bg-gray-300 w-[30px] h-[2px] block"></span>
            JOIN OUR COMMUNITY
          </h6>
          <p className="leading-10 text-3xl font-extrabold pb-2.5">
            We are trusted by over 5000+ <br />
            members . Join us, use our services, and <br />
            grow your business.
          </p>
          <Button className="bg-white px-5 py-2 rounded text-black hover:bg-black hover:text-white transition-all ">
            Join Us
          </Button>
        </div>
      </div>
      <div className="parallax-content "></div>
    </div>
  );
};

export default JoinCommunity;
