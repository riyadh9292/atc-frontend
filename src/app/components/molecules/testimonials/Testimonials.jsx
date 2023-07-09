import React from "react";

const Testimonials = () => {
  return (
    <section>
      <div className="container mx-auto py-20">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center">
            <span className="text-fanta">ATC</span> Working on
          </h1>
          <p className="text-gray-600 mb-8">
            Explore global products and trade opportunities
          </p>
        </div>

        <div className="flex gap-5 justify-between items-center py-14">
          <div>
            <div>
              <p className="text-4xl font-bold pt-3 text-graphite">
                We are proud of Our <br />
                <span className="text-fanta"> mission</span>
              </p>
            </div>
          </div>
          <div className="flex gap-32">
            <div>
              <p className="font-bold text-4xl">1000 +</p>
              <p className="text-2xl font-semibold text-fanta">Our Team</p>
            </div>
            <div>
              <p className="font-bold text-4xl">1000 +</p>
              <p className="text-2xl font-semibold text-fanta">Our Team</p>
            </div>
            <div>
              <p className="font-bold text-4xl">1000 +</p>
              <p className="text-2xl font-semibold text-fanta">Our Team</p>
            </div>
          </div>
        </div>

        <div>
            Hello Test
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
