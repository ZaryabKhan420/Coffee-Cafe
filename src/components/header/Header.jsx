import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/website/coffee_logo.png";
const Header = () => {
  return (
    <div className="bg-gradient-to-r to-secondary/90 from-secondary ">
      <div className="container flex justify-between items-center py-3">
        {/* ------------ Logo ------------ */}
        <div
          className="flex justify-center items-center gap-2"
          data-aos="fade-down"
        >
          <img src={Logo} alt="Logo" loading="lazy" className="w-14" />
          <h2 className="text-white text-3xl font-bold font-cursive">
            {" "}
            Coffee Cafe
          </h2>
        </div>
        {/* ------------ Navbar ------------ */}
        <div
          className="flex justify-center items-center gap-10 "
          data-aos="fade-down"
          data-aos-delay="250"
        >
          <Link
            to="/#"
            className="hover:text-white text-md text-white/70 hidden sm:block"
          >
            Home
          </Link>
          <Link
            to="/#"
            className="hover:text-white text-md text-white/70 hidden sm:block"
          >
            Services
          </Link>
          <Link
            to="/#"
            className="hover:text-white text-md text-white/70 hidden sm:block"
          >
            About
          </Link>

          <button className="bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3 text-white">
            Order
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 640 512"
              className="text-xl cursor-pointer"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
