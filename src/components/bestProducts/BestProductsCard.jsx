import React from "react";

const BestProductsCard = ({ img, title, description, aosDelay }) => {
  return (
    <div
      className="flex flex-col gap-2 justify-end items-center w-72  relative h-[220px] p-3 rounded-xl cursor-pointer shadow-md group hover:bg-primary mt-32"
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      <img
        src={img}
        alt="Coffee"
        loading="lazy"
        className="w-[200px] absolute top-[-40%] group-hover:rotate-[5deg] group-hover:scale-110 transition-all duration-300"
      />
      <h2 className="text-xl font-semibold group-hover:text-white">{title}</h2>
      <p className="text-sm font-sans text-center group-hover:text-white text-gray-500">
        {description}
      </p>
    </div>
  );
};

export default BestProductsCard;
