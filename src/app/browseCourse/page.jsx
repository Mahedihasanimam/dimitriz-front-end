"use client";
import Image from "next/image";
import React, { useState } from "react";
import heroimg from "/public/images/browseheroimg.png";
import { Button, Dropdown, Menu, Input } from "antd";
import { SearchOutlined, DownOutlined, RightOutlined } from "@ant-design/icons";
import Link from "next/link";
import CourseCard from "@/components/ui/CourseCard";
import { useTranslations } from "next-intl";
import { useCourseSearchQuery, useGetCourseByCategoryQuery } from "@/redux/features/course/CourseApi";


const page = () => {
  const t = useTranslations()
  const [searchdata, setsearchdata] = useState('');
  const { data, isLoading } = useGetCourseByCategoryQuery();

  const { data: searchResult } = useCourseSearchQuery(searchdata)
  console.log('instructor id', data?.data?.instructor?._id)

  console.log('searchResult', searchResult)

  const handlesearch = (e) => {
    console.log(e.target.value);

    setsearchdata(e.target.value)

  };
  return (
    <div>
      {/* Hero section with image and search bar and category dropdown  */}
      <div
        style={{ backgroundImage: `url(${heroimg.src})` }}
        className="w-full min-h-[407px] bg-cover py-6"
      >
        <div className="lg:pt-28 md:pt-28 py-12 px-6">


          {/* <div className="flex s-mobile:py-6 l-mobile:flex-wrap m-mobile:flex-wrap s-mobile:flex-wrap items-center justify-between max-w-2xl mx-auto ">
            <div className=" lg:my-8 md:my-8 my-2 ">

              <div className="xl:flex lg:flex flex-wrap items-center space-x-2 pr-4 s-mobile:pr-[8px] pl-4 s-mobile:pl-[8px]  xl:border-r-2 lg:border-r-2 md:border-r-2 border-white">
                <h1 className="text-white lg:text-4xl md:text-4xl text-2xl font-bold">16K</h1>
                <span className=" text-white lg:text-[24px] md:text-[24px] text-sm font-normal">
                  {t("instractors")}
                </span>
              </div>
            </div>
            <div className=" lg:my-8 md:my-8 my-2 ">
              <div className="xl:flex lg:flex flex-wrap items-center space-x-2 pr-4 s-mobile:pr-[8px]  s-mobile:pl-[2px] xl:border-r-2 lg:border-r-2 md:border-r-2  border-white">
                <h1 className="text-white lg:text-4xl md:text-4xl text-2xl font-bold">120k</h1>
                <span className=" text-white lg:text-[24px] md:text-[24px] text-sm font-normal">
                  {t("Graduates")}
                </span>
              </div>
            </div>
            <div className=" lg:my-8 md:my-8 my-2 ">
              <div className="xl:flex lg:flex flex-wrap items-center space-x-2  ">
                <h1 className="text-white lg:text-4xl md:text-4xl text-2xl font-bold">150k</h1>
                <span className=" text-white lg:text-[24px] md:text-[24px] text-sm font-normal">
                  {t("Members")}
                </span>
              </div>
            </div>
          </div> */}



          <div className=" w-full max-w-3xl  mx-auto flex items-center space-x-2">
            <Input
              onChange={handlesearch}
              placeholder="Search for course"
              className="w-full h-[57px] text-[#667085] text-[16px] px-4"
              prefix={<SearchOutlined size={15} className="text-[#667085]" />} // Single element for the left icon

            />
          </div>
        </div>
      </div>
      {/* End of Hero section  */}

      <div className="container mx-auto px-4">

        <div>

            {
              searchdata && <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-4 mt-6">
                {
                   searchResult?.data?.result?.map((item) => (
                    <CourseCard
                      key={item.id}
                      data={item}
                    />
                  ))
                }
              </div>
            }


            
          {/* Course cards for each category */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-4">
            {data?.data?.result?.map((item) => (
              <CourseCard
                key={item.id}
                data={item}
              />
            ))}
          </div>

          <div>

            {data?.data &&
              Object.entries(data?.data).map(([category, items]) => (
                <div key={category} className="mb-8">
                  {/* Render the category name */}
                  <div className="flex  justify-between pb-[32px] pt-[82px] ">
                    <h1 className="lg:text-[36px] md:text-[28px] text-18px  font-bold leading-none text-2xl text-[#101828] font-Merriweather text-start ">
                      {category}
                    </h1>
                    <div>
                      <Link className=" font-bold border-b-2 pb-0 border-[#1D2939] text-[#000000]" href={`/browseCourse/category/items?browse=${category}`}>{t("View all")}  <RightOutlined className="font-bold pl-1" /> </Link>
                    </div>
                  </div>


                  {/* Render the course cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-4">

                    {items?.map((item) => (
                      <CourseCard key={item.id} data={item} />
                    ))}
                  </div>
                </div>
              ))}
          </div>

        </div>



      </div>

    </div>
  );
};

export default page;
