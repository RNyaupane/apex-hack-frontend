import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex flex-wrap h-screen">
        <section className="relative mx-auto">
          {/* navbar */}
          <nav className="flex justify-between bg-gray-900 text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <a className="text-3xl font-bold font-heading" href="#">
                Logo Here.
              </a>
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                {navLinks.map((item, index) => {
                  return (
                    <li key={index}>
                      <a
                        className="hover:text-gray-200 hover:underline"
                        href="#"
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Header Icons */}
              <div className="hidden md:flex items-center space-x-5 items-center">
                {/* Sign In / Register */}
                <a className="flex items-center hover:text-gray-200" href="#">
                  <CgProfile className="text-3xl" />
                </a>
              </div>
            </div>
            {/* Responsive navbar */}
            {/* <a className="xl:hidden flex mr-6 items-center" href="#">
              <CgProfile className="text-3xl" />
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </a> */}
            <div className="navbar flex justify-center items-center">
              <a
                className="navbar-burger self-center mr-12 md:hidden"
                href="#"
                onClick={toggleMenu}
              >
                <RxHamburgerMenu className="text-3xl" />
              </a>

              {/* Other navbar content goes here */}
            </div>
          </nav>
          {/* Sidebar */}
          {isMenuOpen && (
            <div className="min-h-screen flex flex-row ">
              <div className="flex flex-col w-56 bg-white shadow-xl overflow-hidden">
                <ul className="flex flex-col py-4">
                  {navLinks.map((item, index) => {
                    return (
                      <li key={index}>
                        <a
                          href="#"
                          className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                        >
                          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                            <RxHamburgerMenu className="text-3xl" />
                          </span>
                          <span className="text-sm font-medium">
                            {item.label}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
};
export default Navbar;
