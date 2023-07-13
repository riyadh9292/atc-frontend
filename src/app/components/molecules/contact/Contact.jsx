import React from "react";
import Button from "../../atoms/button/Button";
import Image from "next/image";
import AboutImage from "../../../static/image/map.jpg";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto py-16 bg-contact rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8 bg-white">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-fanta">GET</span>IN TOUCH
          </h1>
          <p className="text-gray-600 mb-8">
            Convinced yet? Let make something great together.
          </p>
          <div className="w-48 sm:w-auto">
                <Image
                  src={AboutImage}
                  alt="hero__image"
                  width={220}
                  height={220}
                  className="rounded-md"
                />
              </div>
        </div>

        <div>
          <form className="max-w-md">
            <div className="mb-6">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-fanta"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-6">
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-fanta resize-none"
                id="message"
                rows="6"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="">
              <Button variant="primary">Submit Message</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;