import React from "react";
import Image from "next/image";
import AboutImage from "../../../static/image/About__Image.png";

const AboutSection = () => {
  return (
    <section>
      <div className="bg-arabica sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[600px] flex items-center">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 flex justify-start items-center mt-4 md:mt-0">
              <div className="w-48 sm:w-auto">
                <Image
                  src={AboutImage}
                  alt="hero__image"
                  width={300}
                  height={300}
                  className="rounded-md"
                />
              </div>
            </div>

            <div className="col-span-1 flex justify-start">
              <div>
                <p className="text-4xl font-bold text-white text-[58px] leading-tight">
                  About Us
                </p>
                <div className="py-5">
                  <p className="text-white py-4">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
                  </p>
                  <p className="text-white py-4">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
