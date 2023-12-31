import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { BsPeople } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import HeroImage from "../../../static/image/logo__primary.png";

const menuItems = [
  {
    label: "Home",
    link: "/",
    sectionId: "home",
    hasSectionId: true,
    icon: (
      <BsPeople className="inline-block mr-1 h-5 w-5 text-graphite md:hidden" />
    ),
  },
  {
    label: "About US",
    link: "/",
    sectionId: "about-us",
    hasSectionId: true,
    icon: (
      <BsPeople className="inline-block mr-1 h-5 w-5 text-graphite md:hidden" />
    ),
  },
  {
    label: "HotLine",
    link: "/",
    sectionId: "hotline",
    hasSectionId: true,
    icon: (
      <BsPeople className="inline-block mr-1 h-5 w-5 text-graphite md:hidden" />
    ),
  },
  {
    label: "Contact",
    link: "/",
    sectionId: "contact",
    hasSectionId: true,
    icon: (
      <BsPeople className="inline-block mr-1 h-5 w-5 text-graphite md:hidden" />
    ),
  },
];

const Header = ({ isMenuOpen, onToggleMenu }) => {
  return (
    <header className="bg-white">
      <div className="container">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <Link href="/home">
              <span className="font-bold text-16 text-graphite">
                <Image
                  src={HeroImage}
                  alt="hero__image"
                  width={100}
                  height={100}
                  className="rounded-md"
                />
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <nav className="flex space-x-4 justify-center items-center">
              {menuItems.map((item, index) => (
                <Link
                  href={`${item.link}${
                    item.hasSectionId ? `#${item.sectionId}` : ""
                  }`}
                  key={index}
                >
                  <span className="hover:bg-fanta flex items-center px-3 py-2 rounded-md text-sm font-medium">
                    {item.icon}
                    <span className="hidden md:inline text-graphite hover:text-white">
                      {item.label}
                    </span>
                  </span>
                </Link>
              ))}
              <div className="bg-fanta p-3 rounded-lg cursor-pointer">
                <AiOutlineUser className="text-white" />
              </div>
            </nav>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={onToggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <TiThMenu className="text-white" />
              ) : (
                <TiThMenu className="text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
