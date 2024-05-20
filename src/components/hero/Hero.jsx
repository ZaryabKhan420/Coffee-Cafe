import React from "react";
import CoffeImage from "../../assets/coffee2.png";
const Hero = () => {
  return (
    <div className="bg-brandDark py-20">
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-10">
        {/* ------------- Left Part --------------- */}
        <div className="flex flex-col justify-center gap-5 items-start order-2 sm:order-1 ">
          <h1
            className="text-white text-5xl font-sans font-bold sm:text-6xl md:text-7xl"
            data-aos="fade-up"
          >
            We serve the richest{" "}
            <span className="text-primary font-cursive " data-aos="fade-up">
              Coffee
            </span>{" "}
            in the city
          </h1>
          <button
            className="text-white hover:scale-105 py-2 px-4 bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full transition-all duration-200 text-sm font-cusive"
            data-aos="fade-up"
          >
            Coffee And Code
          </button>
        </div>
        {/* ------------- Right Part --------------- */}
        <div className="relative order-1 sm:order-2 min-h-[450px] flex justify-center items-center ">
          <img
            src={CoffeImage}
            alt="Coffee"
            loading="lazy"
            className="w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin"
            data-aos="zoom-in"
          />
          <button
            className="text-white p-3 bg-gradient-to-r from-primary to-secondary rounded-lg transition-all duration-200 text-sm font-cusive absolute top-10 left-10"
            data-aos="fade-left"
          >
            Hey Coder
          </button>
          <button
            className="text-white p-3 bg-gradient-to-r from-primary to-secondary rounded-lg transition-all duration-200 text-sm font-cusive absolute  bottom-10 right-10 "
            data-aos="fade-right"
          >
            Best Coffee
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
