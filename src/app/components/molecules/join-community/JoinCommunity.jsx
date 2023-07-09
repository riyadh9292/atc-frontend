import React from "react";

import "./JoinCommunity.css";
import Button from "../../atoms/Button/Button";

const JoinCommunity = () => {
  return (
    <section>
      <div className="parallax bg-parallax">
        <div className="container mx-auto pt-28 text-white">
          <h6 className="py-1 text-xl text-white font-semibold flex items-center gap-2">
            <span className="bg-gray-300 w-8 h-1 block"></span>
            JOIN OUR COMMUNITY
          </h6>
          <p className="leading-10 text-3xl font-bold py-8">
            We are trusted by over 5000+ <br />
            members . Join us, use our services, and <br />
            grow your business.
          </p>
          <Button variant="primary">Read More</Button>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
