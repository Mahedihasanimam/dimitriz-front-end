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
import { useRouter, useSearchParams } from "next/navigation"; // Correct import
import { useTranslations } from "next-intl";
import { useGetcourseByInstructorIdQuery, useGetSingleCourseByidQuery } from "@/redux/features/course/CourseApi";
import { imageUrl } from "@/redux/baseApi";
// import coursevideo from '/public/video/video1.mp4'
const page = ({ params }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter(); // Correct usage
  const t = useTranslations()

  const id = params?.id

  const { data, isLoading } = useGetSingleCourseByidQuery(id);
  console.log('instructor id',data?.data?.instructor?._id)
  console.log('instructor id',data)
  console.log(id)

  const {data:course}=useGetcourseByInstructorIdQuery(data?.data?.instructor?._id)


  console.log('course', course?.data)
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

 
  const [messageApi, contextHolder] = message.useMessage();







  // const handleAddToCart = (data) => {

  //   const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  //   const existingItem = cartItems.find(item => item.id === id);
  //   if (existingItem) {
  //     return messageApi.open({
  //       type: 'warning',
  //       content: 'Item already in cart',
  //     })
  //   } else {
  //     cartItems.push(data);
  //   }
  //   localStorage.setItem('cartItems', JSON.stringify(cartItems));



  //   messageApi.open({
  //     type: 'success',
  //     content: 'add to cart success',
  //   });

  //   console.log("Added to cart");

  // };




  const handlebynow = (data) => {

    router.push(`/checkout/${data?._id}` );
  };

  
  

  return (
    <div>
      {contextHolder}
      <div>
        <div className="mb-10  ">
          {/* hero section here ---------------------------------------------------------------------------- */}
          <div className="xl:bg-[#1D2939] lg:bg-[#1D2939]   bg-transparent ">
            <div className="container mx-auto  flex justify-between gap-4 relative py-6 lg:px-6 px-2">
              {/* left side content here-------------------------------------------- */}
              <div className="xl:max-w-2xl lg:max-w-xl w-full space-y-3 xl:block lg:block  hidden ">
                <h1 className="text-white text-2xl font-bold font-Merriweather">
                  {data?.data?.title}
                </h1>
                <div className="flex items-start justify-start mb-2">
                  <span className="text-yellow-500 text-sm flex items-center justify-center">
                    <Rate
                      className="text-xl"
                      count={1}
                      defaultValue={data?.data?.averageRating}
                    />{" "}
                    <span className="text-[#FFFFFF] font-bold text-[14px]">
                      {data?.data?.averageRating}
                    </span>
                  </span>
                  <span className="text-[#FFFFFF] font-normal text-sm ml-2 pt-1">
                    (
                    {data?.data?.reviewCount}
                    )
                  </span>
                </div>
                <p className="text-[#D0D5DD] text-sm font-normal pb-4">
                  {data?.data?.description?.slice(0, 200)}
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
                          <ClockCircleOutlined className="text-[16px]" /> {data?.data?.duration}+
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
                          <CalendarOutlined className="text-[16px]" /> {("Last updated on")}  {data?.data?.updatedAt ? new Date(data.data.updatedAt).toLocaleDateString() : "N/A"}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* right side content here-------------------------------------------------- */}
              <div className=" bg-white rounded-lg border border-[#E4E7EC] lg:max-w-lg md:max-w-lg w-full mx-auto">
                <div className="relative border border-white rounded-lg ">
                  {/* {
                    data?.data?.promoVideo ? (
                      <video
                        className=" rounded-lg  "
                        autoPlay
                        loop
                        controls
                        playsInline

                        src={imageUrl + data?.data?.promoVideo}
                      ></video>
                    ) : ( */}
                      <Image
                        className="w-full h-64 object-cover"
                        src={imageUrl + data?.data?.thumbnailImage}
                        alt="Course"
                        height={500}
                        width={500}
                      />
                    {/* )
                  } */}
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
                        {data?.data?.enrolledStudents?.length}+
                      </span>{" "}
                      {t("Students enrolled the course")}
                    </span>
                  </div>

                  <div className="flex items-center justify-between xl:py-4 ">
                    <h3 className="text-2xl font-bold mt-2"> €{data?.data?.price}</h3>
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

                      <li>{t("Forecasting sales for your business")}</li>
                    </ul>
                  </div>

                  <Button
                    onClick={() => handlebynow(data?.data)}
                    type="primary"
                    size="large"
                    block
                    className=" px-6 "
                  >
                    €{data?.data?.price} {t("Buy Now")}
                  </Button>
                  {/* <button
                    onClick={() => handleAddToCart(data?.data)}
                    className=" bg-transparent font-semibold px-6 pt-3 text-[#475467] block mx-auto"
                  >
                    {t("Add to Cart")}
                  </button> */}
                </div>
              </div>
            </div>
          </div>

          <div className=" container mx-auto lg:px-6 px-2 ">
            {/* webinner section here ------------------------------ */}

            {/* <div className="xl:max-w-2xl lg:max-w-xl  w-full  lg:my-12 md:my-12 lg:flex flex-row items-center justify-between gap-6 rounded-lg bg-[#3DCBB1] ">
             
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
      
              <div className="w-full">
                <Image
                  src={instactor2}
                  alt="webinar"
                  className="w-full rounded-lg"
                />
              </div>
            </div> */}

            {/* course details section here ---------- */}
            {/* <div className="border border-[#D9D9D9] rounded-lg my-12 p-6 xl:max-w-2xl lg:max-w-xl w-full">
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
            </div> */}

            {/* Course curriculum section here ------------- */}
            <div className="xl:max-w-2xl lg:max-w-xl w-full my-12 border border-[#D9D9D9] rounded-lg p-4">
              <h1 className="text-3xl font-bold mb-8">{t("Course Curriculum")}</h1>

              {/* lacture folder ----------------- */}
              <div className="flex items-center justify-between mb-4 ">
                <div className="flex items-center justify-between lg:gap-6 md:gap-6 gap-1">
                  <div className="text-sm font-normal text-[#4E5566] flex items-center gap-3">
                    <FolderOutlined className="text-xl text-[#4E5566]" /> {data?.data?.sections?.length}
                    {t("Sections")}
                  </div>
                  <div className="text-sm font-normal text-[#4E5566] flex items-center gap-3">
                    <PlayCircleOutlined className="text-xl text-[#4E5566]" />{" "}
                    {data?.data?.lectureCount} {t("lectures")}
                  </div>
                  <div className="text-sm font-normal text-[#4E5566] flex items-center gap-3">
                    <ClockCircleOutlined className="text-xl text-[#4E5566]" />{" "}
                    {data?.data?.duration}
                  </div>
                </div>
              </div>

              {/* course section here----------------------------------------------------------- */}
        
        
              <div className="mx-auto bg-[#F2F4F7] rounded-md lg:p-4 md:p-4 p-0 border-none">
                <Collapse
                  defaultActiveKey={["1"]}
                  accordion
                  expandIconPosition="right"
                  className="bg-[#F2F4F7] rounded-lg border-none"
                >
                  {data?.data?.sections?.map((section, index) => (
                    <Panel
                      header={
                        <div>
                          <div className="text-lg font-semibold text-[#475467]">
                            {section.title}
                          </div>
                          <div className="text-xs text-[#98A2B3] font-normal">
                            {`${section.lectureCount} Lectures • ${section.totalDuration} Minutes`}
                          </div>
                        </div>
                      }
                      key={index + 1}
                      className="mb-2 bg-transparent"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <div className="space-y-3 cursor-pointer">
                        {section.lectures?.map((lecture, lectureIndex) => (
                          <div
                            key={lectureIndex}
                            className="flex justify-between items-center p-4 bg-white rounded-lg shadow mb-4"
                          >
                            <div className="flex items-center">
                              <div className="bg-[#F2F4F7] text-[#475467] w-10 h-10 rounded-lg flex items-center justify-center mr-4 font-bold">
                                {lectureIndex + 1}
                              </div>
                              <div>
                                <p className="font-semibold text-[#475467] text-[16px]">
                                  {lecture.title || `Lecture ${lectureIndex + 1}`}
                                </p>
                                <p className="text-sm text-[#98A2B3]">
                                  {lecture.isVideo ? lecture.time : lecture.fileSize}
                                </p>
                              </div>
                            </div>
                            <div>
                              {lecture.isVideo ? (
                                <PlayCircleOutlined className="text-[#14698A] text-2xl" />
                              ) : (
                                <FileOutlined className="text-[#14698A] text-2xl" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </Panel>
                  ))}
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
                <span className="px-4">{data?.data?.averageRating} </span> {t("Course Rating")}{" "}
                <span className="text-lg text-[#475467] font-Inter">
                  {/* (4.2k students reviewed) */}
                  ( {data?.data?.reviews?.length} {t("reviews")} )
                </span>
              </h1>

              <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 mt-10">
                {data?.data?.reviews?.slice(-8).map((review, index) => (
                  <ReviewCard key={index} review={review} />
                ))}
              </div>
              {/* <Link
                href={" #"}
                className="inline-flex items-center text-[#475467] border-b-2 border-[#475467] mt-8 text-[16px] font-semibold "
              >
                {t("Show all reviews")}
                <ArrowUpOutlined className="rotate-45 text-xl pl-2" />
              </Link> */}
            </div>

            <div className=" lg:mt-28 md:mt-24 mt-12 xl:max-w-2xl lg:max-w-xl w-full ">
              <h1 className="text-3xl font-bold mb-8 text-[#1D2939] font-Merriweather">
                {t("Instructor")}
              </h1>
              <div className="flex items-center justify-start px-2 mb-9">
                {
                  data?.data?.instructor?.image ?
                  <Image
                  height={56}
                  width={56}
                  src={ imageUrl + data?.data?.instructor?.image}
                  alt="instructor"
                  className=" rounded-full object-cover mr-4"
                /> : <Image
                height={56}
                width={56}
                src={instactor}
                alt="instructor" 
                className=" rounded-full object-cover mr-4"
              />
                }
                
                <div>
                  <h3 className="text-lg  font-semibold  text-[#1D2939]  w-fit ">
                    {
                      data?.data?.instructor?.name}
                  </h3>
                  <p className="text-[#475467] text-[16px] font-normal border-t-2 border-[#1D2939]">
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
       

            {/* others courses section here-------------------------------------------- */}
            <div className="bg-white lg:mt-32 md:mt-28 mt-12 xl:max-w-2xl lg:max-w-xl w-full">
              <h1 className="text-3xl font-bold mb-8 text-[#000000] font-Merriweather">
                Other courses from {data?.data?.instructor?.name} (
                <span className="text-2xl text-[#1D2939] font-Merriweather">
                 {course?.data?.length}
                </span>
                )
              </h1>

         
              <div className="grid grid-cols-1  md:grid-cols-2 mt-6 lg:grid-cols-2 gap-4">
              {course?.data?.courses?.map((item) => (
                  <CourseCard
                    key={item.id}
                  data={item}
                  />
                ))}
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
