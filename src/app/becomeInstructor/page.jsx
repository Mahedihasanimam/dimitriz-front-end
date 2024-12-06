"use client";

import { Button, Carousel, Typography, Col, Divider, Row } from "antd";
const DemoBox = (props) => (
  <p className={`height-${props.value}`}>{props.children}</p>
);
import Link from "next/link";
import React, { useRef } from "react";
import { ArrowUpOutlined, CheckCircleFilled } from "@ant-design/icons";
import {
  MailFilled,
  FileTextOutlined,
  ProfileOutlined,
  PlayCircleOutlined,
  ShakeOutlined,
  ArrowRightOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import heroimg from "/public/images/instructorheroimg.png";
import student from "/public/images/icons/students.svg";
import certificate from "/public/images/icons/certification.svg";
import gloval from "/public/images/icons/gloval.svg";
import success from "/public/images/icons/success.svg";
import mockup from "/public/images/mockup.png";
import regulationimg from "/public/images/instructorRules.png";
import helpcenterimg from "/public/images/helpcenter.png";
import quot from "/public/images/icons/Quotes.png";
import reviewimg1 from "/public/images/review1.png";
import reviewimg2 from "/public/images/review2.png";
import reviewimg3 from "/public/images/review3.png";
import reviewimg4 from "/public/images/review4.png";
import reviewimg5 from "/public/images/review5.png";
import reviewimg6 from "/public/images/review6.png";
import reviewimg7 from "/public/images/review7.png";
import reviewimg8 from "/public/images/review8.png";
import teacher from "/public/images/teacher.png";
import { useTranslations } from "next-intl";
const { Title, Paragraph } = Typography;
const page = () => {
  const t = useTranslations();
  // Ref to control the carousel
  const carouselRef = useRef(null);

  const contentStyle = {
    height: "160px",
    width: "70%",
    color: "#1D2026",
    lineHeight: "160px",
    textAlign: "center",
    background: "#BAE4FF",
    padding: "20px",
  };

  return (
    <div>
      {/* top banner section -------------------------------- */}
      <div className="bg-[#F9FAFB] text-center p-6">
        <h1 className="text-3xl font-bold text-[#1D2939]">
          {t("Become an Instructor")}
        </h1>
        <p className="text-sm font-normal text-[#667085] pt-2">
          Home / {t("Become an Instructor")}
        </p>
      </div>

      {/* hero section here ------------------------------------ */}
      <div className="  min-h-[430px] lg:py-24 py-12">
        <section className="">
          <div className="container flex flex-col justify-center mx-auto   lg:flex-row lg:justify-between  ">
            {/* LEFT HERO SECTION */}
            <div className="flex flex-col justify-center p-6  text-center rounded-sm  w-full lg:text-left ">
              <h1 className="lg:text-[56px] text-4xl font-black leading-none sm:text-6xl text-[#101828] font-Merriweather">
                {t("Become an Instructor")}
              </h1>
              <p className="mt-6 mb-8 text-[16px] font-normal sm:mb-12 text-[#475467] leading-8 max-w-md lg:mx-0 mx-auto ">
                {t(
                  "As an instructor, you will have the opportunity to share your knowledge and profit from each course sale!"
                )}
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <Link href="/auth/signup">
                  <Button
                    className="text-[#FFFFFF] text-[16px] font-semibold p-6"
                    size="large"
                    type="primary"
                  >
                    {t("Get started now")}
                    <span>
                      {" "}
                      <ArrowUpOutlined className="rotate-45 text-xl" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* RIGHT HERO SECTION */}
            <div className="max-w-2xl">
              <Image src={heroimg} alt="heroimg" />
            </div>
          </div>
        </section>
      </div>

      {/* collected info about instructors ant students  */}
      <div className="bg-[#D8F0FF] py-24">
        <div className="container mx-auto flex flex-wrap items-start justify-around gap-8">
          {/* students section  */}
          <div className="flex  gap-2">
            <div>
              {/* <UsergroupAddOutlined /> */}
              <Image src={student} alt="student" className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold  text-[#101828]">67.1k </h1>
              <p className="text-sm text-[#475467] font-medium">students</p>
            </div>
          </div>
          {/* instructors section  */}
          <div className="flex gap-2">
            <div>
              {/* <UsergroupAddOutlined /> */}
              <Image src={certificate} alt="student" className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold  text-[#101828]">26k </h1>
              <p className="text-sm text-[#475467] font-medium">
                certified instructors
              </p>
            </div>
          </div>
          {/* countrys section  */}
          <div className="flex gap-2">
            <div>
              {/* <UsergroupAddOutlined /> */}
              <Image src={gloval} alt="student" className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold  text-[#101828]">72 </h1>
              <p className="text-sm text-[#475467] font-medium">
                Country Language
              </p>
            </div>
          </div>
          {/* succdess section  */}
          <div className="flex gap-2">
            <div>
              {/* <UsergroupAddOutlined /> */}
              <Image src={success} alt="student" className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold  text-[#101828]">99.9% </h1>
              <p className="text-sm text-[#475467] font-medium">
                CSuccess Rate
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* why become an instructor section  */}
      <div className="bg-[#195671] lg:pt-24 pt-6 lg:pl-24 pl-6 lg:pr-24  pr-6  ">
        <div className="lg:flex md:flex flex-row gap-16  justify-center  container mx-auto ">
          <div className="lg:w-1/2 w-full ">
            {/* left content image  */}
            <Image src={mockup} alt="mockup" className="w-full h-full" />
          </div>
          <div className="max-w-2xl  pt-6">
            {/* right content  */}
            <h1 className="text-3xl font-bold text-[#F9FAFB] leading-10">
            {t("Why you’ll start teaching on")} <br /> {t("Pantognostis")}
            </h1>
            <p className="text-sm text-[#F2F4F7] font-normal leading-6 mt-8 mb-2">
              Praesent congue ornare nibh sed ullamcorper. Proin venenatis
              tellus non turpis scelerisque, vitae auctor arcu ornare. Cras
              vitae nulla a purus mollis venenatis.
            </p>

            <div className="  py-6  w-full">
              <div>
                <ul className="list-none lg:text-lg md:text-lg text-sm  font-normal text-[#F2F4F7] space-y-[24px] py-2 pb-8">
                  <div className="flex items-start justify-start gap-4">
                    <CheckCircleFilled className="text-[#12B76A] text-2xl pt-1" />
                    <li>
                      <h3 className="text-[#F9FAFB] text-lg font-medium pb-2">
                        {t("Tech your students as you want")}
                      </h3>
                      <p className="text-sm text-[#F2F4F7]">
                        {t("Feel free to share your knowledge in your own unique way")}
                        {t("Make the most of the courses and built up your reputation between customers")}
                      </p>
                    </li>
                  </div>
                  <div className="flex items-start justify-start gap-4">
                    <CheckCircleFilled className="text-[#12B76A] text-2xl pt-1" />
                    <li>
                      <h3 className="text-[#F9FAFB] text-lg font-medium pb-2">
                        {t("Manage your course, payment in one place")}
                      </h3>
                      <p className="text-sm text-[#F2F4F7]">
                        {t("Together we will promote and sell your course and get paid for every course sold")}
                      </p>
                    </li>
                  </div>
                  <div className="flex items-start justify-start gap-4">
                    <CheckCircleFilled className="text-[#12B76A] text-2xl pt-1" />
                    <li>
                      <h3 className="text-[#F9FAFB] text-lg font-medium pb-2">
                        {t("Earn money")}
                      </h3>
                      <p className="text-sm text-[#F2F4F7]">
                        {t("After creating a good image for your course just relax and enjoy your profits!")}
                      </p>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


     



    </div>
  );
};

export default page;
