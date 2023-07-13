"use client";
import React, { useState } from 'react';
import faqData from '@/app/data/faqData.json';
import { BiDownArrow } from 'react-icons/bi';

const FAQItem = ({ title, content, isActive, onClick }) => {
  return (
    <div>
      <button
        className={`flex justify-between items-center w-full bg-fanta rounded-2xl py-6 text-white my-3 px-4 border-b border-gray-300 ${
          isActive ? 'bg-fanta text-white rounded-lg py-5' : ''
        }`}
        onClick={onClick}
      >
        <h2 className="text-lg font-medium">{title}</h2>
       <BiDownArrow/>
      </button>
      {isActive && <div className="p-4 bg-gray-100">{content}</div>}
    </div>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          title={item.title}
          content={item.content}
          isActive={index === activeIndex}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default FAQ;
