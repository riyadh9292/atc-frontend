import { useState, useClient } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useClient(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const progress = (scrolled / (documentHeight - windowHeight)) * 100;
      setShowButton(scrolled > 0);
      setScrollProgress(progress);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed bottom-6 right-6 bg-gray-900 text-white rounded-full p-2 shadow-md ${
        showButton ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <div
        className={`h-12 w-12 flex items-center justify-center border-4 border-gray-400 rounded-full transition-all ${
          scrollProgress > 0 ? "border-gray-500" : "border-transparent"
        }`}
      >
        <FaChevronUp className="h-6 w-6 text-white" />
      </div>
    </button>
  );
};

export default ScrollToTop;