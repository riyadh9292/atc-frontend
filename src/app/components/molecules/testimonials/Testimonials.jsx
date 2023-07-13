import React from "react";

const Testimonials = () => {
  return (
    <section>
      <div className="container mx-auto py-11">
        <div className="flex gap-5 justify-between items-center py-14  p-10 rounded-xl bg-white">
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
      </div>
    </section>
  );
};

export default Testimonials;
