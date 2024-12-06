"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import emptycart from "/public/images/emptystates-empty-cart.png";
import {
  ClockCircleOutlined,
  UsergroupDeleteOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import { Button, Rate } from "antd";
const page = () => {
  const carditems = [
    {
      id: 1,
      instructor: "John Michael",
      rating: 4.7,
      reviews: 3242,
      courseTitle: "Product Management Basic - Course",
      duration: "40 Hours",
      students: 176,
      price: "€ 29.00",
      enrollLink: "ENROLL NOW",
      imageLink: "https://i.ibb.co.com/17pL5Qj/caourse1.png",
      category: "All courses",
    },
    {
      id: 2,
      instructor: "John Michael",
      rating: 4.7,
      reviews: 3242,
      courseTitle: "Advanced Product Strategy - Course",
      duration: "45 Hours",
      students: 150,
      price: "€ 35.00",
      enrollLink: "ENROLL NOW",
      imageLink: "https://i.ibb.co.com/xLN7bSQ/category2.png",
      category: "Graphic Design",
    },
    {
      id: 3,
      instructor: "John Michael",
      rating: 4.6,
      reviews: 2987,
      courseTitle: "Product Roadmaps for Success",
      duration: "38 Hours",
      students: 200,
      price: "€ 27.00",
      enrollLink: "ENROLL NOW",
      imageLink: "https://i.ibb.co.com/vPfYHr7/category1.png",
      category: "UI/UX Design",
    },
    {
      id: 4,
      instructor: "John Michael",
      rating: 4.8,
      reviews: 3500,
      courseTitle: "Mastering Agile Product Management",
      duration: "50 Hours",
      students: 250,
      price: "€ 40.00",
      enrollLink: "ENROLL NOW",
      imageLink: "https://i.ibb.co.com/xLN7bSQ/category2.png",
      category: "Programming",
    },
  ];

  return (
    <>
      {carditems.length === 0 ? (
        <div className="container mx-auto px-6">
          <h1 className="text-[#000000] text-2xl font-bold lg:py-12 py-4">
            Shoppingcart
          </h1>
          <div className="pt-6 border-b-2 border-[#F2F4F7] pb-4 flex items-center justify-between">
            <h3 className=" font-semibold text-[#475467]  text-[16px]">
              3 courses added in your cart
            </h3>
            <Link href="/checkout">
              <Button
                className="text-[#FFFFFF] text-[16px] font-semibold lg:p-6 p-4"
                size="large"
                type="primary"
              >
                Checkout all
                <span>
                  {" "}
                  <ArrowUpOutlined className="rotate-45 text-xl" />
                </span>
              </Button>
            </Link>
          </div>
          <div>
            {carditems.map((item) => (
              <div
                key={item.id}
                className=" w-full xl:flex lg:flex md:flex flex-row pb-8 my-4 bg-white border-b-2 border-dashed border-gray-200 overflow-hidden"
              >
                {/* COURSE CARD BANNER IMGE HERE */}
                <Image
                  className="w-72 rounded-xl h-64 object-cover"
                  src={item.imageLink}
                  alt="Course"
                  height={500}
                  width={500}
                />
                {/* COURSE CARD DETAILS HERE */}
                <div className="p-5 w-full ">
                  <div className="flex justify-between items-center w-full pt-5">
                    <p className="text-sm text-[#475467] mb-2">
                      by{" "}
                      <Link
                        href={`browseCourse/instructor/${item.id}`}
                        className=" text-[#1D2939] border-b-2 text-sm font-semibold border-[#1D2939]"
                      >
                        {item.instructor}
                      </Link>
                    </p>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-yellow-500 text-sm">
                        <Rate allowHalf count={1} defaultValue={item.rating} />{" "}
                        <span className="text-[#475467] font-bold text-[16px]">
                          {item.rating}
                        </span>
                      </span>
                      <span className="text-[#475467] font-normal text-sm ml-2">
                        ({item.reviews})
                      </span>
                    </div>
                  </div>
                  <h5 className="text-lg font-bold tracking-tight text-[#1D2939] mb-2">
                    {item.courseTitle}
                  </h5>
                  <div className="flex items-center justify-start text-[#475467] text-sm py-4 border-b border-[#E5E7EB]">
                    <span className="mr-4 flex items-center font-normal">
                      <ClockCircleOutlined className="text-lg pr-2" />
                      {item.duration} Hours
                    </span>
                    <span className="flex items-center font-normal">
                      <UsergroupDeleteOutlined className="text-lg pr-2" />
                      {item.students} Students
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <span className="text-xl font-semibold text-[#000000]">
                      € 29.00
                    </span>
                    <div className="flex items-center justify-center xl:gap-12 lg:gap-12 md:gap-12 gap-4">
                      <button className="text-[16px] text-[#B42318] border-b-2 border-[#B42318] font-normal">
                        Remove
                      </button>
                      <Link
                        href={`/checkout`}
                        className="inline-flex items-center text-[#14698A] border-b-2 border-[#14698A] text-[16px] font-semibold "
                      >
                        Checkout
                        <ArrowUpOutlined className="rotate-45 text-xl pl-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-6">
          <h1 className="text-[#000000] text-2xl font-bold lg:py-12 py-4">
            Shoppingcart
          </h1>
          <div className="pt-6 border-b-2 border-[#F2F4F7] pb-4 flex items-center justify-between">
            <h3 className=" font-semibold text-[#475467]  text-[16px]">
              3 courses added in your cart
            </h3>
            <Link href="/checkout">
              <Button
                className="text-[#FFFFFF] text-[16px] font-semibold lg:p-6 p-4"
                size="large"
                type="primary"
              >
                Checkout all
                <span>
                  {" "}
                  <ArrowUpOutlined className="rotate-45 text-xl" />
                </span>
              </Button>
            </Link>
          </div>
          <div>
            {carditems.map((item) => (
              <div
                key={item.id}
                className=" w-full xl:flex lg:flex md:flex flex-row pb-8 my-4 bg-white border-b-2 border-dashed border-gray-200 overflow-hidden"
              >
                {/* COURSE CARD BANNER IMGE HERE */}
                <Image
                  className="w-72 rounded-xl h-64 object-cover"
                  src={item.imageLink}
                  alt="Course"
                  height={500}
                  width={500}
                />
                {/* COURSE CARD DETAILS HERE */}
                <div className="p-5 w-full ">
                  <div className="flex justify-between items-center w-full pt-5">
                    <p className="text-sm text-[#475467] mb-2">
                      by{" "}
                      <Link
                        href={`browseCourse/instructor/${item.id}`}
                        className=" text-[#1D2939] border-b-2 text-sm font-semibold border-[#1D2939]"
                      >
                        {item.instructor}
                      </Link>
                    </p>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-yellow-500 text-sm">
                        <Rate allowHalf count={1} defaultValue={item.rating} />{" "}
                        <span className="text-[#475467] font-bold text-[16px]">
                          {item.rating}
                        </span>
                      </span>
                      <span className="text-[#475467] font-normal text-sm ml-2">
                        ({item.reviews})
                      </span>
                    </div>
                  </div>
                  <h5 className="text-lg font-bold tracking-tight text-[#1D2939] mb-2">
                    {item.courseTitle}
                  </h5>
                  <div className="flex items-center justify-start text-[#475467] text-sm py-4 border-b border-[#E5E7EB]">
                    <span className="mr-4 flex items-center font-normal">
                      <ClockCircleOutlined className="text-lg pr-2" />
                      {item.duration} Hours
                    </span>
                    <span className="flex items-center font-normal">
                      <UsergroupDeleteOutlined className="text-lg pr-2" />
                      {item.students} Students
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <span className="text-xl font-semibold text-[#000000]">
                      € 29.00
                    </span>
                    <div className="flex items-center justify-center xl:gap-12 lg:gap-12 md:gap-12 gap-2">
                      <button className="text-[16px] text-[#B42318] border-b-2 border-[#B42318] font-normal">
                        Remove
                      </button>
                      <Link
                        href={`/checkout`}
                        className="inline-flex items-center text-[#14698A] border-b-2 border-[#14698A] lg:text-[16px] text-sm font-semibold "
                      >
                        Checkout
                        <div className="xl:block md:block hidden">
                        <ArrowUpOutlined className="rotate-45 text-xl pl-2" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default page;
