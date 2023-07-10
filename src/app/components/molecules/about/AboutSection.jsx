import React from "react";
import Image from "next/image";
import AboutImage from "../../../static/image/about__image.jpg";
import Button from "@/app/components/atoms/button/Button";

const AboutSection = () => {
  return (
    <section data-aos="zoom-in-up">
      <div className="bg-white h-[500px] sm:h-[600px] md:h-[700px] lg:h-[600px] xl:h-[600px] flex items-center">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 flex justify-start items-center mt-4 md:mt-0">
              <div className="w-48 sm:w-auto">
                <Image
                  src={AboutImage}
                  alt="hero__image"
                  width={500}
                  height={500}
                  className="rounded-md"
                />
              </div>
            </div>

            <div className="col-span-1 flex justify-start items-center">
              <div>
                <p className="text-4xl font-bold text-graphite text-[58px] leading-tight">
                  About <span className="text-fanta">Us</span>
                </p>
                <div className="py-5">
                  <p className="text-graphite py-4">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using Content here, content here, making it look like
                    readable English.
                  </p>
                  <Button variant="primary">Read More</Button>
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