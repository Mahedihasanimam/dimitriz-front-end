"use client";
import React, { useState } from "react";
import { Rate, Tabs } from "antd";
import Image from "next/image";

import instactor from "./Instructor.png";
import ratingimage from "./srahkhan.png";

import { ArrowUpOutlined, PlayCircleOutlined } from "@ant-design/icons";
import CourseCard from "@/components/ui/CourseCard";
import ReviewCard from "@/components/ui/ReviewCard";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useGetLoginUserByIdQuery } from "@/redux/features/users/UserApi";
import { imageUrl } from "@/redux/baseApi";
const page = ({ params }) => {
  const [activeKey, setActiveKey] = useState("1");


  const user = useSelector((state) => state?.user?.user);

  const {data}=useGetLoginUserByIdQuery(user?._id)
  console.log('user', data);
 






  return (
    <div>
      <div className="max-w-[838px] mx-auto xl:px-6 p-4">
        <div className=" lg:mt-28 md:mt-24 mt-12  w-full ">
          <h1 className="text-3xl font-bold mb-24 text-[#1D2939] font-Merriweather">
            Instructor
          </h1>
          <div className="lg:flex md:flex flex-wrap items-center justify-between">
            <div className="flex  items-center justify-start px-2 mb-9">
              <Image
                height={56}
                width={56}
                src={ imageUrl + data?.data?.image}
                alt="instructor"
                className=" rounded-full object-cover mr-4 w-16 h-16"
              />
              <div>
                <h3 className="text-lg  font-semibold border-b-2 text-[#1D2939] border-[#1D2939] w-fit ">
                 {data?.data?.name}
                </h3>
                <p className="text-[#475467] text-[16px] font-normal">
                 {
                   data?.data?.profession
                 }
                </p>
              </div>
            </div>
            <div className="bg-[#F2F4F7] py-4 px-8 w-fit rounded-md">
              <p className="text-sm text-[#101828]">Students trained</p>
              <h1 className="text-2xl font-bold text-[#101828]">8,250</h1>
            </div>
          </div>
        </div>

        {/* about section -------------------------------------------------------------- */}
        {/* <div className="bg-white my-12   xl:max-w-2xl w-full  relative">
          <h2 className="text-lg font-semibold text-[#475467] mb-4">About</h2>
          <div className={`relative`}>
            <p className="text-[#475467] mb-4">
              I'm Angela, I'm a developer with a passion for teaching. I'm
              the lead instructor at the London App Brewery, London's
              leading Programming Bootcamp. I've helped hundreds of thousands of
              students learn to code and change their lives by becoming a
              developer. I've been invited by companies such as Twitter,
              Facebook and Google to teach their employees
            </p>
            <p className="text-[#475467]">
              My first foray into programming was when I was just 12 years old,
              wanting to build my own Space Invader game. Since then, I've
              made hundred of websites, apps and games. But most importantly, I
              realised that my greatest passion is teaching.
            </p>
          </div>
        </div> */}


        {/* Course cards for each category */}
        <h1 className="text-3xl font-bold mb-4 text-[#1D2939] font-Merriweather">Courses</h1>
        <div className="grid  sm:grid-cols-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {data?.data?.uploadedCourses?.map((item) => (
            <CourseCard
              key={item.id}
             data={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
