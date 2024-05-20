import React from "react";
import BackgroundImage from "../../assets/website/coffee-beans-bg.png";
import GoogleImage from "../../assets/website/play_store.png";
import AppleImage from "../../assets/website/app_store.png";
const AvaliablePlatform = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="bg-gray-100 mt-5"
    >
      <div
        className="container flex flex-col justify-center items-start gap-5 py-16"
        data-aos="fade-up"
      >
        <div>
          <h1 className="text-white text-4xl font-semibold ">
            Coffee Cafe is available for{" "}
          </h1>
          <h1 className="text-white text-4xl font-sans font-semibold ">
            {" "}
            Android and IOS
          </h1>
        </div>
        <div className="flex justify-start items-center gap-3">
          <img
            src={AppleImage}
            alt="Apple"
            loading="lazy"
            className="w-[150px] sm:[250px] "
          />
          <img
            src={GoogleImage}
            alt="Apple"
            loading="lazy"
            className="w-[150px] sm:[250px] "
          />
        </div>
      </div>
    </div>
  );
};

export default AvaliablePlatform;
