import React, { useRef } from "react";
import { Carousel } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";
import SignupImage from "/public/images/signupimage2.png"; // Update the image path if necessary
import SignupImage1 from "/public/images/medium-shot-smiley-woman.jpg"; // Update the image path if necessary
import girlimage from "/public/images/medium-shot-smiley-woman.jpg";

const SignupCarousel = () => {
  const carouselRef = useRef(null);

  // Handle next slide
  const nextSlide = () => {
    carouselRef.current.next();
  };

  // Handle previous slide
  const prevSlide = () => {
    carouselRef.current.prev();
  };

  return (
    <div className="relative h-full lg:p-0 md:p-0 overflow-hidden"> {/* Added h-screen and overflow-hidden */}
      {/* Custom Left Arrow */}
      <div
        className="absolute xl:bottom-8 lg:bottom-8 bottom-8 xl:left-[60%] lg:left-[40%] left-[40%] transform -translate-y-1/2 bg-transparent border rounded-full h-[56px] w-[56px] flex items-center justify-center z-10 cursor-pointer"
        onClick={prevSlide}
      >
        <ArrowLeftOutlined style={{ color: "#fff", fontSize: "20px" }} />
      </div>

      {/* Carousel */}
      <Carousel ref={carouselRef} dots={false} arrows={false} infinite>
        {/* First Slide */}
        <div className="relative h-screen w-full rounded-bl-[10%] rounded-tl-[10%] overflow-hidden"> {/* Updated to h-full */}
          {/* Image */}
          <Image
            className="w-full h-full object-cover rounded-bl-[10%] rounded-tl-[10%]" // Ensures the image covers the entire container
            src={SignupImage}
            alt="carousel1"
          />

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000b4] top-[#00000080] flex flex-col justify-end items-start p-4 text-white text-start font-Merriweather rounded-bl-[10%] rounded-tl-[10%]">
            <div className="xl:p-11 lg:p-11 p-6">
              <h1 className="xl:text-[36px] lg:text-[28px] text-[24px] text-[#FCFCFD] font-bold mb-4">
                “We’ve been using PANTAGONOSTIS to kick start every new course
                and can’t imagine working without it.”
              </h1>
              <h3 className="xl:text-xl text-sm font-bold text-[#FFFFFF] font-Inter xl:py-4 lg:py-4">
                Amélie Laurent
              </h3>
              <h3 className="xl:text-lg text-sm font-Inter text-[#FFFFFF] font-medium">
                Lead Designer, Layers
              </h3>
              <h3 className="xl:text-[16px] text-sm text-[#FFFFFF] font-medium font-Inter opacity-70">
                Web Development Agency
              </h3>
            </div>
          </div>
        </div>

        {/* Second Slide */}
        <div className="relative h-screen w-full rounded-bl-[10%] rounded-tl-[10%] overflow-hidden"> {/* Updated to h-full */}
          {/* Image */}
          <Image
            className="w-full h-full  object-cover rounded-bl-[10%] rounded-tl-[10%]" // Ensures the image covers the entire container
            src={SignupImage1}
            alt="carousel1"
          />

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000b4] top-[#00000080] flex flex-col justify-end items-start p-4 text-white text-start font-Merriweather rounded-bl-[10%] rounded-tl-[10%]">
            <div className="xl:p-11 lg:p-11 p-6">
              <h1 className="xl:text-[36px] lg:text-[28px] text-[24px] text-[#FCFCFD] font-bold mb-4">
                “We’ve been using PANTAGONOSTIS to kick start every new course
                and can’t imagine working without it.”
              </h1>
              <h3 className="xl:text-xl text-sm font-bold text-[#FFFFFF] font-Inter xl:py-4 lg:py-4">
                Amélie Laurent
              </h3>
              <h3 className="xl:text-lg text-sm font-Inter text-[#FFFFFF] font-medium">
                Lead Designer, Layers
              </h3>
              <h3 className="xl:text-[16px] text-sm text-[#FFFFFF] font-medium font-Inter opacity-70">
                Web Development Agency
              </h3>
            </div>
          </div>
        </div>

        {/* Third Slide */}
        <div className="relative h-screen w-full rounded-bl-[10%] rounded-tl-[10%] overflow-hidden"> {/* Updated to h-full */}
          {/* Image */}
          <Image
            className="w-full h-full object-cover rounded-bl-[10%] rounded-tl-[10%]" // Ensures the image covers the entire container
            src={SignupImage}
            alt="carousel1"
          />

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000b4] top-[#00000080] flex flex-col justify-end items-start p-4 text-white text-start font-Merriweather rounded-bl-[10%] rounded-tl-[10%]">
            <div className="xl:p-11 lg:p-11 p-6">
              <h1 className="xl:text-[36px] lg:text-[28px] text-[24px] text-[#FCFCFD] font-bold mb-4">
                “We’ve been using PANTAGONOSTIS to kick start every new course
                and can’t imagine working without it.”
              </h1>
              <h3 className="xl:text-xl text-sm font-bold text-[#FFFFFF] font-Inter xl:py-4 lg:py-4">
                Amélie Laurent
              </h3>
              <h3 className="xl:text-lg text-sm font-Inter text-[#FFFFFF] font-medium">
                Lead Designer, Layers
              </h3>
              <h3 className="xl:text-[16px] text-sm text-[#FFFFFF] font-medium font-Inter opacity-70">
                Web Development Agency
              </h3>
            </div>
          </div>
        </div>
      </Carousel>

      {/* Custom Right Arrow */}
      <div
        className="absolute right-[10%] xl:bottom-8 lg:bottom-8 bottom-8 transform -translate-y-1/2 bg-transparent border rounded-full h-[56px] w-[56px] flex items-center justify-center z-10 cursor-pointer"
        onClick={nextSlide}
      >
        <ArrowRightOutlined style={{ color: "#fff", fontSize: "25px" }} />
      </div>
    </div>
  );
};

export default SignupCarousel;
