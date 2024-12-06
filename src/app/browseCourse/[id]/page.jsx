"use client";
import { Card, Avatar, Button, Rate } from "antd";
import { message } from "antd";
import React, { useState } from "react";
import instactor from "./Instructor.png";
import instactor2 from "./Instructor2.png";
import student from "./Instructor.png";
import Image from "next/image";
import { Collapse } from "antd";
import {
  ClockCircleOutlined,
  PlayCircleOutlined,
  RocketOutlined,
  MobileOutlined,
  CheckSquareOutlined,
  CalendarOutlined,
  CheckOutlined,
  FolderOutlined,
  FileOutlined,
  ArrowUpOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import ReviewCard from "@/components/ui/ReviewCard";
// import student from "./Instructor.png";
import Link from "next/link";
import CourseCard from "@/components/ui/CourseCard";
import { useRouter } from "next/navigation"; // Correct import
import { useTranslations } from "next-intl";
// import coursevideo from '/public/video/video1.mp4'
const page = ({ params }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter(); // Correct usage
  const t=useTranslations()
  // course curriculam data
  const { Panel } = Collapse;
  const panels = [
    { id: "01", title: "Getting started", time: "02:30 min", isVideo: true },
    { id: "02", title: "Basic Fundamental", time: "10:30 min", isVideo: true },
    { id: "03", title: "Practice Project", fileSize: "5.3 MB", isVideo: false },
    { id: "04", title: "Basic Fundamental", time: "10:30 min", isVideo: true },
    { id: "05", title: "Basic Fundamental", time: "10:30 min", isVideo: true },
    { id: "06", title: "Basic Fundamental", time: "10:30 min", isVideo: true },
  ];

  // review data
  const reviews = [
    {
      name: "Sarah Khan",
      avatar: student,
      rating: 5,
      time: "a month ago",
      comment:
        "This is a good course for someone how does not know how to code, but is interested.Each lection has projects, this is an enormous help to internalize the code. Additionally, for some projects, you need to use Google to get some specific help to get your code to work.I've learned how to code with this course, and would definitely recommend it!",
    },
    {
      name: "John Doe",
      avatar: student,
      rating: 4,
      time: "2 weeks ago",
      comment:
        "This is a good course for someone how does not know how to code, but is interested.Each lection has projects, this is an enormous help to internalize the code. Additionally, for some projects, you need to use Google to get some specific help to get your code to work.I've learned how to code with this course, and would definitely recommend it!",
    },
    {
      name: "Emily Smith",
      avatar: student,
      rating: 5,
      time: "3 weeks ago",
      comment:
        "This is a good course for someone how does not know how to code, but is interested.Each lection has projects, this is an enormous help to internalize the code. Additionally, for some projects, you need to use Google to get some specific help to get your code to work.I've learned how to code with this course, and would definitely recommend it!",
    },
    {
      name: "David Johnson",
      avatar: student,
      rating: 4,
      time: "a month ago",
      comment:
        "This is a good course for someone how does not know how to code, but is interested.Each lection has projects, this is an enormous help to internalize the code. Additionally, for some projects, you need to use Google to get some specific help to get your code to work.I've learned how to code with this course, and would definitely recommend it!",
    },
  ];

  // FAKE JSON DATA FOR DEMO PURPOSES ONLY
  const courseone = [
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
  ];
  const coursetwo = [
    {
      id: 8,
      instructor: "John Michael",
      rating: 4.7,
      reviews: 3242,
      courseTitle: "Product Analytics for Beginners",
      duration: "48 Hours",
      students: 220,
      price: "€ 33.00",
      enrollLink: "ENROLL NOW",
      imageLink: "https://i.ibb.co.com/17pL5Qj/caourse1.png",
      category: "Sports",
    },
    {
      id: 9,
      instructor: "John Michael",
      rating: 4.6,
      reviews: 3100,
      courseTitle: "Building Digital Products",
      duration: "55 Hours",
      students: 210,
      price: "€ 37.00",
      enrollLink: "ENROLL NOW",
      imageLink: "https://i.ibb.co.com/vPfYHr7/category1.png",
      category: "All courses",
    },
  ];
  const [messageApi, contextHolder] = message.useMessage();

  const handleAddToCart = () => {
    messageApi.open({
      type: 'success',
      content: 'add to cart success',
    });
  
    console.log("Added to cart");
    router.push('/checkout')
  };
  return (
    <div>
      {contextHolder}
      <div>
        <div className="mb-10  ">
          {/* hero section here ---------------------------------------------------------------------------- */}
          <div className="xl:bg-[#1D2939] lg:bg-[#1D2939]   bg-transparent ">
            <div className="container mx-auto  flex gap-4 relative py-6 lg:px-6 px-2">
              {/* left side content here-------------------------------------------- */}
              <div className="xl:max-w-2xl lg:max-w-xl w-full space-y-3 xl:block lg:block  hidden ">
                <h1 className="text-white text-2xl font-bold font-Merriweather">
                  {t("Product Management Basic Course")}
                </h1>
                <div className="flex items-start justify-start mb-2">
                  <span className="text-yellow-500 text-sm flex items-center justify-center">
                    <Rate
                      className="text-xl"
                      allowHalf
                      count={1}
                      defaultValue={4.7}
                    />{" "}
                    <span className="text-[#FFFFFF] font-bold text-[14px]">
                      4.7
                    </span>
                  </span>
                  <span className="text-[#FFFFFF] font-normal text-sm ml-2 pt-1">
                    (65655)
                  </span>
                </div>
                <p className="text-[#D0D5DD] text-sm font-normal pb-4">
                  {("Learn Product Management like a Professional. Start from the fundamentals and go all the way to mastering product strategy,development, and market launch.")}
                </p>

                <div className="bg-[#344054] p-6 rounded-sm  ">
                  <div className="flex items-center justify-start px-2">
                    <Image
                      src={instactor}
                      alt="instructor"
                      className=" rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-[14px] text-white font-bold border-b border-white ">
                        Johon Doe
                      </h3>
                      <p className="text-[#D0D5DD] text-sm">{t("Instructor")}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-start gap-16 px-2 pt-4 ">
                    <div>
                      <ul className="list-none text-[#E4E7EC] text-sm space-y-4">
                        <li>
                          {" "}
                          <ClockCircleOutlined className="text-[16px]" /> 40+
                          {t("Hours")}
                        </li>
                        <li>
                          {" "}
                          <PlayCircleOutlined className="text-[16px]" /> 15 
                         {t("Live Projects")}{" "}
                        </li>
                        <li>
                          {" "}
                          <RocketOutlined className="text-[16px]" /> {t("Resources")}
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="list-none text-[#E4E7EC] text-sm space-y-4">
                        <li>
                          {" "}
                          <MobileOutlined className="text-[16px]" />{("Access on Mobile & TV")}
                        </li>
                        <li>
                          {" "}
                          <CheckSquareOutlined className="text-[16px]" /> {t("Tasks")}{" "}
                        </li>
                        <li>
                          <CalendarOutlined className="text-[16px]" /> {("Last updated on")}  15/07/2024
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* right side content here-------------------------------------------------- */}
              <div className="xl:max-w-2xl lg:max-w-sm    mx-auto bg-white border-2 border-[#dee0e2]  rounded-lg  xl:fixed lg:fixed block xl:right-[9%]  lg:right-[1%] max-[1440]:fixed max-[1024]:right-[6px] max-[1440]:fixed max-[1440]:right-[0%] lg:shadow-lg z-50  h-fit mb-8 w-[465px]">
                <div className="relative border border-white rounded-lg ">
                  <video
                    className=" rounded-lg  "
                    autoPlay
                    loop
                    controls
                    playsInline
                  
                    src='https://videos.pexels.com/video-files/6985525/6985525-uhd_2560_1440_25fps.mp4'
                  ></video>
                  <p className="absolute bottom-2 left-1/3 mt-2 ml-2 bg-opacity-70 text-sm font-bold  text-[#FCFCFD]">
                    {t("Preview this course")}
                  </p>
                </div>

                <div className="xl:mt-1 mt-1 p-4 ">
                  <div className="flex items-center space-x-2">
                    <Avatar.Group maxCount={5}>
                      {/* Image for student */}
                      <Avatar src={student.src} />
                      <Avatar src={student.src} />
                      <Avatar src={student.src} />
                      <Avatar src={student.src} />
                      <Avatar src={student.src} />
                      <Avatar src={student.src} />
                      <Avatar src={student.src} />
                      <Avatar src={student.src} />
                      <Avatar src={student.src} />
                      <Avatar src={student.src} />
                    </Avatar.Group>
                    <span className="text-[#263238] text-[12px] font-normal">
                      <span className="text-[#0C2A56] font-semibold">
                        + 127
                      </span>{" "}
                      {t("Students enrolled the course")}
                    </span>
                  </div>

                  <div className="flex items-center justify-between xl:py-4 ">
                    <h3 className="text-2xl font-bold mt-2">€29.00 </h3>
                    <span className="bg-[#FFFAEB] h-[44px] px-4 text-[#F79009] font-semibold rounded-sm flex items-center justify-center py-1 text-xs">
                     {t("Basic")}
                    </span>
                  </div>

                  <div className="text-[#1D2939]  ">
                    <p>
                      <strong className="text-sm font-semibold">
                       {t("Whom this course is for")}:
                      </strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-[#475467] space-y-1 py-2 pb-8">
                      <li>{t("Starting your own business")}</li>
                      <li>{t("Running or growing an existing business")}</li>
                      <li>{t("Managing the accounts for a business")}</li>
                      <li>{t("Writing a business plan")}</li>
                      <li>
                        {t("Having difficulty with the financials of your business plan")}
                      </li>
                      <li>{t("Forecasting sales for your business")}</li>
                    </ul>
                  </div>

                  <Button
                    type="primary"
                    size="large"
                    block
                    className=" px-6 "
                  >
                    €29.00 {t("Buy Now")}
                  </Button>
                  <button
                     onClick={handleAddToCart}
                    className=" bg-transparent font-semibold px-6 pt-3 text-[#475467] block mx-auto"
                  >
                    {t("Add to Cart")}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" container mx-auto lg:px-6 px-2 ">
            {/* webinner section here ------------------------------ */}
            <div className="xl:max-w-2xl lg:max-w-xl  w-full  lg:my-12 md:my-12 lg:flex flex-row items-center justify-between gap-6 rounded-lg bg-[#3DCBB1] ">
              {/* left webinar--------- */}
              <div className="space-y-2 p-6 max-w-xs">
                <div className="pb-4">
                  <h3 className="text-lg uppercase text-white">{t("webinar")}</h3>
                  <p className="text-white text-sm">August 16,2024</p>
                </div>
                <h1 className="text-white text-[32px] font-bold ">
                  {t("Film Maker Skillset for Beginner.")}
                </h1>
                <p className="text-white text-lg">{t("Kitani Saravati")}</p>
                <Button className="bg-transparent border-1 border-[#FFFFFF] p-2 text-xs font-normal text-white rounded-[5px] ">
                  {t("Get it Now")}
                </Button>
              </div>
              {/* right webinar--------- */}
              <div className="w-full">
                <Image
                  src={instactor2}
                  alt="webinar"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* course details section here ---------- */}
            <div className="border border-[#D9D9D9] rounded-lg my-12 p-6 xl:max-w-2xl lg:max-w-xl w-full">
              <h1 className="text-3xl font-bold mb-8">{t("you'll learn")}</h1>
              <div>
                <ul className="list-none lg:text-lg md:text-lg text-sm text-[#475467] font-normal  space-y-[20px] py-2 pb-8">
                  <div className="flex items-start justify-start gap-2">
                    <CheckOutlined className="" />
                    <li>
                      {" "}
                     {(" You will learn the core principles of product management, including market research, product development, and roadmap planning.")}
                    </li>
                  </div>
                  <div className="flex items-start justify-start gap-2">
                    <CheckOutlined className="" />
                    <li>
                      {" "}
                      {("You will learn the core principles of product management, including market research, product development, and roadmap planning.")}
                    </li>
                  </div>
                  <div className="flex items-start justify-start gap-2">
                    <CheckOutlined className="" />
                    <li>
                    {("You will learn the core principles of product management, including market research, product development, and roadmap planning.")}
                    </li>
                  </div>
                  <div className="flex items-start justify-start gap-2">
                    <CheckOutlined className="" />
                    <li>
                    {("You will learn the core principles of product management, including market research, product development, and roadmap planning.")}
                    </li>
                  </div>
                  <div className="flex items-start justify-start gap-2">
                    <CheckOutlined className="" />
                    <li>
                    {("You will learn the core principles of product management, including market research, product development, and roadmap planning.")}
                    </li>
                  </div>
                  <div className="flex items-start justify-start gap-2">
                    <CheckOutlined className="" />
                    <li>
                    {("You will learn the core principles of product management, including market research, product development, and roadmap planning.")}
                    </li>
                  </div>
                </ul>
              </div>
            </div>

            {/* Course curriculum section here ------------- */}
            <div className="xl:max-w-2xl lg:max-w-xl w-full my-12 border border-[#D9D9D9] rounded-lg p-4">
              <h1 className="text-3xl font-bold mb-8">{t("Course Curriculum")}</h1>

              {/* lacture folder ----------------- */}
              <div className="flex items-center justify-between mb-4 ">
                <div className="flex items-center justify-between lg:gap-6 md:gap-6 gap-1">
                  <div className="text-sm font-normal text-[#4E5566] flex items-center gap-3">
                    <FolderOutlined className="text-xl text-[#4E5566]" /> 6
                    {t("Sections")}
                  </div>
                  <div className="text-sm font-normal text-[#4E5566] flex items-center gap-3">
                    <PlayCircleOutlined className="text-xl text-[#4E5566]" />{" "}
                    202 {t("lectures")}
                  </div>
                  <div className="text-sm font-normal text-[#4E5566] flex items-center gap-3">
                    <ClockCircleOutlined className="text-xl text-[#4E5566]" />{" "}
                    19h 37m
                  </div>
                </div>
              </div>

              {/* course outline here----------------------------------------------------------- */}
              <div className=" mx-auto bg-[#F2F4F7] rounded-md lg:p-4 md:p-4 p-0 border-none">
                <Collapse
                  defaultActiveKey={["1"]}
                  accordion
                  expandIconPosition="right"
                  className="bg-[#F2F4F7] rounded-lg border-none"
                >
                  {/* dropswon/panel one --------------- */}
                  <Panel
                    header={
                      <div className="">
                        <div className="text-lg font-semibold text-[#475467]">
                          {t("Introduction to Product Management")}
                        </div>
                        <div className="text-xs text-[#98A2B3] font-normal">
                          {t("06 Lectures • 30 Minutes")}
                        </div>
                      </div>
                    }
                    key="1"
                    className="mb-2 bg-transparent "
                    style={{ backgroundColor: "transparent" }}
                  >
                    <div className="space-y-3 cursor-pointer">
                      {/* Add space between items */}
                      {panels.map((panel) => (
                        <div
                          key={panel.id}
                          className="flex justify-between items-center p-4 bg-white rounded-lg shadow mb-4" // Adjust margin, padding and shadow
                        >
                          <div className="flex items-center">
                            <div className="bg-[#F2F4F7] text-[#475467] w-10 h-10 rounded-lg flex items-center justify-center mr-4 font-bold">
                              {panel.id}
                            </div>
                            <div>
                              <p className="font-semibold text-[#475467] text-[16px]">
                                {panel.title}
                              </p>
                              {panel.isVideo ? (
                                <p className="text-sm text-[#98A2B3]">
                                  {panel.time}
                                </p>
                              ) : (
                                <p className="text-sm text-[#98A2B3]">
                                  {panel.fileSize}
                                </p>
                              )}
                            </div>
                          </div>
                          <div>
                            {panel.isVideo ? (
                              <PlayCircleOutlined className="text-[#14698A] text-2xl" />
                            ) : (
                              <FileOutlined className="text-[#14698A] text-2xl" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Panel>

                  {/* dropswon/panel tow --------------- */}
                  <Panel
                    header={
                      <div className="">
                        <div className="text-lg font-semibold text-[#475467]">
                          {t("Introduction to Product Management")}
                        </div>
                        <div className="text-xs text-[#98A2B3] font-normal">
                          06 Lectures • 30 Minutes
                        </div>
                      </div>
                    }
                    key="2"
                    className="mb-2 bg-transparent"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <div className="space-y-3 cursor-pointer">
                      {/* Add space between items */}
                      {panels.map((panel) => (
                        <div
                          key={panel.id}
                          className="flex justify-between items-center p-4 bg-white rounded-lg shadow mb-4" // Adjust margin, padding and shadow
                        >
                          <div className="flex items-center">
                            <div className="bg-[#F2F4F7] text-[#475467] w-10 h-10 rounded-lg flex items-center justify-center mr-4 font-bold">
                              {panel.id}
                            </div>
                            <div>
                              <p className="font-semibold text-[#475467] text-[16px]">
                                {panel.title}
                              </p>
                              {panel.isVideo ? (
                                <p className="text-sm text-[#98A2B3]">
                                  {panel.time}
                                </p>
                              ) : (
                                <p className="text-sm text-[#98A2B3]">
                                  {panel.fileSize}
                                </p>
                              )}
                            </div>
                          </div>
                          <div>
                            {panel.isVideo ? (
                              <PlayCircleOutlined className="text-[#14698A] text-2xl" />
                            ) : (
                              <FileOutlined className="text-[#14698A] text-2xl" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Panel>
                  {/* dropswon/panel three --------------- */}
                  <Panel
                    header={
                      <div className="">
                        <div className="text-lg font-semibold text-[#475467]">
                          {t("Introduction to Product Management")}
                        </div>
                        <div className="text-xs text-[#98A2B3] font-normal">
                          06 Lectures • 30 Minutes
                        </div>
                      </div>
                    }
                    key="3"
                    className="mb-2 bg-transparent"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <div className="space-y-3 cursor-pointer">
                      {/* Add space between items */}
                      {panels.map((panel) => (
                        <div
                          key={panel.id}
                          className="flex justify-between items-center p-4 bg-white rounded-lg shadow mb-4" // Adjust margin, padding and shadow
                        >
                          <div className="flex items-center">
                            <div className="bg-[#F2F4F7] text-[#475467] w-10 h-10 rounded-lg flex items-center justify-center mr-4 font-bold">
                              {panel.id}
                            </div>
                            <div>
                              <p className="font-semibold text-[#475467] text-[16px]">
                                {panel.title}
                              </p>
                              {panel.isVideo ? (
                                <p className="text-sm text-[#98A2B3]">
                                  {panel.time}
                                </p>
                              ) : (
                                <p className="text-sm text-[#98A2B3]">
                                  {panel.fileSize}
                                </p>
                              )}
                            </div>
                          </div>
                          <div>
                            {panel.isVideo ? (
                              <PlayCircleOutlined className="text-[#14698A] text-2xl" />
                            ) : (
                              <FileOutlined className="text-[#14698A] text-2xl" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Panel>
                </Collapse>
              </div>
            </div>

            {/* Course rating and reviews here---------------------------------------------- */}
            <div className="lg:mt-28 md:mt-24 xl:max-w-2xl lg:max-w-xl w-full ">
              <h1 className="text-3xl font-bold mb-8 text-[#1D2939] font-Merriweather">
                {" "}
                <Rate
                  className="text-4xl text-[#FDB022] "
                  count={1}
                  defaultValue={4.7}
                />
                <span className="px-4">4.5 </span> {t("Course Rating")}{" "}
                <span className="text-lg text-[#475467] font-Inter">
                  (4.2k students reviewed)
                </span>
              </h1>

              <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 mt-10">
                {reviews.map((review, index) => (
                  <ReviewCard key={index} review={review} />
                ))}
              </div>
              <Link
                href={" #"}
                className="inline-flex items-center text-[#475467] border-b-2 border-[#475467] mt-8 text-[16px] font-semibold "
              >
                {t("Show all reviews")}
                <ArrowUpOutlined className="rotate-45 text-xl pl-2" />
              </Link>
            </div>

            <div className=" lg:mt-28 md:mt-24 mt-12 xl:max-w-2xl lg:max-w-xl w-full ">
              <h1 className="text-3xl font-bold mb-8 text-[#1D2939] font-Merriweather">
                {t("Instructor")}
              </h1>
              <div className="flex items-center justify-start px-2 mb-9">
                <Image
                  height={56}
                  width={56}
                  src={instactor}
                  alt="instructor"
                  className=" rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg  font-semibold border-b-2 text-[#1D2939] border-[#1D2939] w-fit ">
                    Johon Doe
                  </h3>
                  <p className="text-[#475467] text-[16px] font-normal">
                    {t("Head of Product Management")}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start justify-start mb-2">
                  <span className="text-yellow-500 text-sm flex items-center justify-center">
                    <Rate
                      className="text-2xl pr-2"
                      allowHalf
                      count={1}
                      defaultValue={4.5}
                    />{" "}
                    <span className="text-[#475467] font-bold text-[18px]">
                      4.5
                    </span>
                  </span>
                  <span className="text-[#475467] font-normal text-lg ml-2 pt-1">
                    (8,250 <span className="text-[#0E68E7]">Reviews</span>)
                  </span>
                </div>
                <div className="flex items-start justify-start mb-2">
                  <span className="text-[#475467] text-sm flex items-center justify-center">
                    <UsergroupAddOutlined className="text-2xl pr-2" />
                  </span>
                  <span className="text-[#475467] font-normal text-lg ml-2 pt-1">
                    8,250 Students
                  </span>
                </div>
                <div className="flex items-start justify-start mb-2">
                  <span className="text-[#475467] text-sm flex items-center justify-center">
                    <PlayCircleOutlined className="text-2xl pr-2" />
                  </span>
                  <span className="text-[#475467] font-normal text-lg ml-2 ">
                    254 Courses
                  </span>
                </div>
              </div>
            </div>

            {/* about section -------------------------------------------------------------- */}
            <div className="bg-white my-12   xl:max-w-2xl lg:max-w-xl w-full  relative">
              <h2 className="text-lg font-semibold text-[#475467] mb-4">
                About
              </h2>
              <div
                className={`relative ${
                  !isExpanded ? "max-h-40 overflow-hidden" : ""
                }`}
              >
                <p className="text-[#475467] mb-4">
                  I'm Angela, I'm a developer with a passion for teaching. I'm
                  the lead instructor at the London App Brewery, London's
                  leading Programming Bootcamp. I've helped hundreds of
                  thousands of students learn to code and change their lives by
                  becoming a developer. I've been invited by companies such as
                  Twitter, Facebook and Google to teach their employees
                </p>
                <p className="text-[#475467]">
                  My first foray into programming was when I was just 12 years
                  old, wanting to build my own Space Invader game. Since then,
                  I've made hundred of websites, apps and games. But most
                  importantly, I realised that my greatest passion is teaching.
                </p>

                {/* Apply the gradient blur at the bottom when not expanded */}
                {!isExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white to-transparent pointer-events-none"></div>
                )}
              </div>

              <button
                className="text-blue-500 mt-4"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Show less" : "Show more"}
              </button>
            </div>

            {/* others courses section here-------------------------------------------- */}
            <div className="bg-white lg:mt-32 md:mt-28 mt-12 xl:max-w-2xl lg:max-w-xl w-full">
              <h1 className="text-3xl font-bold mb-8 text-[#000000] font-Merriweather">
                Other courses from John Doe (
                <span className="text-2xl text-[#1D2939] font-Merriweather">
                  253
                </span>
                )
              </h1>

              <div className="">
                {courseone.map((item) => (
                  <CourseCard
                    key={item.id}
                    courseimage={item.imageLink}
                    courseTitle={item.courseTitle}
                    instructor={item.instructor}
                    rating={item.rating}
                    price={item.price}
                    reviews={item.reviews}
                    duration={item.duration}
                    students={item.students}
                    enrollLink={item.id}
                  />
                ))}
              </div>

              <div className="grid grid-cols-1  md:grid-cols-2 mt-6 lg:grid-cols-2 gap-4">
                {coursetwo.map((item) => (
                  <CourseCard
                    key={item.id}
                    courseimage={item.imageLink}
                    courseTitle={item.courseTitle}
                    instructor={item.instructor}
                    rating={item.rating}
                    price={item.price}
                    reviews={item.reviews}
                    duration={item.duration}
                    students={item.students}
                    enrollLink={item.id}
                  />
                ))}
              </div>
              <Link
                href={" #"}
                className="inline-flex items-center text-[#475467] border-b-2 border-[#475467] mt-8 text-[16px] font-semibold "
              >
                {t("Show all reviews")}
                <ArrowUpOutlined className="rotate-45 text-xl pl-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
