import React from "react";
import Button from "../../atoms/button/Button";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto py-16 bg-white rounded-lg">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center">
            <span className="text-fanta">GET</span>IN TOUCH
          </h1>
          <p className="text-gray-600 mb-8">
            Convinced yet? Lets make something great together.
          </p>

          <form className="w-full max-w-md">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-fanta"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-fanta resize-none"
                  id="message"
                  rows="6"
                  placeholder="Enter your message"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center">
            <Button variant="primary">Submit Message</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
