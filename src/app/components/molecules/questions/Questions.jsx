import React from "react";
import FAQ from "../faq/FAQ";

const Questions = () => {
  return (
    <section>
      <div className="container mx-auto py-20">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center">
            <span className="text-fanta">Basic</span> Questions
          </h1>
          <p className="text-gray-600 mb-8 text-center">
            Our goal is to provide our investors with <br/> a reliable source of high
            income with fast and safe.
          </p>
        </div>

        <div className="py-5">
          <FAQ />
        </div>
      </div>
    </section>
  );
};

export default Questions;
