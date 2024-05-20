import React from "react";
import { Heading } from "../Index";
import BestProductsCard from "./BestProductsCard";
import CoffeeImage from "../../assets/coffee2.png";
const BestProducts = () => {
  const productsData = [
    {
      id: 1,
      img: CoffeeImage,
      title: "Espresso",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni.",
      aosDelay: "0",
    },
    {
      id: 2,
      img: CoffeeImage,
      title: "Americano",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit.",
      aosDelay: "200",
    },
    {
      id: 3,
      img: CoffeeImage,
      title: "Cappuccino",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit.",
      aosDelay: "400",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container">
        {/* ---------------- Heading ------------------ */}
        <Heading children="Best Coffee For You" className="text-center" />

        {/* ---------------- Cards ------------------ */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center ">
          {productsData.map((product) => {
            return (
              <BestProductsCard
                key={product.id}
                img={product.img}
                title={product.title}
                description={product.description}
                aosDelay={product.aosDelay}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
