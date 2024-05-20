import React from "react";
import { Link } from "react-router-dom";
import footerImage from "../../assets/website/coffee-footer.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
function Footer() {
  const links = [
    {
      id: 1,
      name: "Home",
      path: "/#",
    },
    {
      id: 2,
      name: "About",
      path: "/#",
    },
    {
      id: 3,
      name: "Contact",
      path: "/#",
    },
    {
      id: 4,
      name: "Blog",
      path: "/#",
    },
  ];

  return (
    <div
      className="py-12 px-5"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${footerImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16  items-start min-h-72 ">
          <div className="flex flex-col justify-center items-start gap-4">
            <h2 className="text-white text-3xl font-bold font-cursive">
              {" "}
              Coffee Cafe
            </h2>

            <p className="text-white text-[16px] font-sans ">
              Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect
              Espresso Escape
            </p>

            <button className="text-sm text-white font-sans px-4 py-2 bg-[#3d2517] rounded-full">
              Visit our Youtube Channel
            </button>
          </div>

          <div className="flex justify-between w-3/5 sm:w-full">
            <div className="flex flex-col gap-3">
              <h2 className="text-white text-xl font-sans font-bold mb-2">
                Footer Links
              </h2>
              {links.map((value) => {
                return (
                  <Link
                    to={value.path}
                    key={value.id}
                    className="text-white text-[16px] font-sans w-fit hover:scale-105 transition-all duration-300"
                  >
                    {value.name}
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-white text-xl font-sans font-bold mb-2">
                Quick Links
              </h2>
              {links.map((value) => {
                return (
                  <Link
                    to={value.path}
                    key={value.id}
                    className="text-white hover:scale-105  transition-all w-fit text-[16px] font-sans duration-300"
                  >
                    {value.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col justify-start items-start sm:items-center gap-3 ">
            <div className="flex items-center gap-3 justify-start mb-3 w-full lg:w-2/4">
              <FaInstagram className="text-white text-3xl" />
              <FaFacebook className="text-white text-3xl" />
              <FaLinkedin className="text-white text-3xl" />
            </div>
            <div className="flex items-center  gap-3 justify-start   w-full lg:w-2/4	">
              <FaLocationArrow className="text-white text-xl" />
              <h2 className="text-white">Gujrat, Pakistan</h2>
            </div>

            <div className="flex items-center justify-start gap-3 w-full lg:w-2/4">
              <FaMobileAlt className="text-white text-xl" />
              <h2 className="text-white">+92 123456789</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
