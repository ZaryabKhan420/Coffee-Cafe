import React from "react";
import BackgroundImg from "../../assets/website/coffee-texture.jpg";
import CoffeeImage from "../../assets/coffee-white.png";
import Heading from "../utility/Heading";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
const PremiumProduct = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="bg-gray-100 mt-5"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
          <div className="flex justify-center items-center" data-aos="zoom-in">
            <img
              src={CoffeeImage}
              alt="Coffee"
              loading="lazy"
              className="w-[300px] sm:w-[420px] spin"
            />
          </div>
          <div className="flex flex-col gap-7 justify-center items-start">
            <div
              className="flex flex-col gap-7 items-start justify-center"
              data-aos="fade-up"
            >
              <Heading children="Premium Blen Coffee" className="text-left" />
              <p className="text-sm text-gray-500 font-sans">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                reiciendis inventore iste ratione ex alias quis magni at optio
              </p>
            </div>

            <div className="grid grid-cols-2">
              <div className=" flex flex-col justify-center items-start gap-5 p-3 border-2 border-r-primary/50">
                <div
                  className="flex justify-start items-center gap-5  "
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="p-3 bg-[#FEE2E2]rounded-full">
                    <GrSecure className="text-2xl " />
                  </div>
                  <p>Premiuim Coffee</p>
                </div>

                <div
                  className="flex justify-start items-center gap-5"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="p-3 bg-[#FFEDD5] rounded-full">
                    <IoFastFood className="text-2xl " />
                  </div>
                  <p>Hot Coffee</p>
                </div>

                <div
                  className="flex justify-start items-center gap-5"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <div className="p-3 bg-[#FEF9C3] rounded-full">
                    <GiFoodTruck className="text-2xl " />
                  </div>
                  <p>Cold Coffee</p>
                </div>
              </div>
              <div
                className="flex flex-col gap-3  p-3 pl-4 border-2 border-l-primary/50"
                data-aos="fade-left"
              >
                <Heading children="Tea Lover" className="text-2xl" />
                <p className="text-sm text-gray-500 font-sans ">
                  Much like writing code, brewing the perfect cup of tea
                  requires patience, precision, and a dash of passion to create
                  a comforting blend of flavors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumProduct;
