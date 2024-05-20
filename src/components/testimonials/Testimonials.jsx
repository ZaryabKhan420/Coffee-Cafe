import React from "react";
import Slider from "react-slick";
import { Heading } from "../Index";
import TestimonialCard from "./TestimonialCard";
import img1 from "../../assets/website/90-104x104.jpg";
import img2 from "../../assets/website/330-103x103.jpg";
import img3 from "../../assets/website/829-101x101.jpg";
import img4 from "../../assets/website/984-104x104.jpg";
import img5 from "../../assets/website/1004-103x103.jpg";
import img6 from "../../assets/website/1025-101x101.jpg";
import img7 from "../../assets/website/1054-102x102.jpg";

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      name: "John Doe",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni consequuntur, tenetur atque obcaecati blanditiis.",
      img: img1,
    },
    {
      id: 2,
      name: "Noah",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni consequuntur, tenetur atque obcaecati blanditiis.",
      img: img2,
    },
    {
      id: 3,
      name: "George",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni consequuntur, tenetur atque obcaecati blanditiis.",
      img: img3,
    },
    {
      id: 4,
      name: "Arthur",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni consequuntur, tenetur atque obcaecati blanditiis.",
      img: img4,
    },
    {
      id: 5,
      name: "Aaron Paul",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni consequuntur, tenetur atque obcaecati blanditiis.",
      img: img5,
    },
    {
      id: 6,
      name: "Oliver",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni consequuntur, tenetur atque obcaecati blanditiis.",
      img: img6,
    },
    {
      id: 7,
      name: "Muhammad",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni consequuntur, tenetur atque obcaecati blanditiis.",
      img: img7,
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100">
      <div className="container py-16">
        <Heading
          children="Testimonials"
          className="text-center mb-16"
          data-aos="fade-up"
        />
        <div className="grid my-5 grid-cols-1" data-aos="zoom-in">
          <Slider {...settings}>
            {testimonialData.map((value) => {
              return <TestimonialCard value={value} key={value.id} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
