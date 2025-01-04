"use client";

import React from "react";
import CourseCard from "../ui/CourseCard";
import { Button, Tabs } from "antd";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useGetallCourseQuery } from "@/redux/features/course/CourseApi";
import { imageUrl } from "@/redux/baseApi";

const PopularCourses = () => {
  const [activeKey, setActiveKey] = useState("1");

  const {data,isLoading}=useGetallCourseQuery();
const t=useTranslations()



  if(isLoading) return <div>Loading...</div>;
console.log('data',data?.data?.result);

//   FILTER COURSES BY CATEGORY
const categories = ["All Categories", ...new Set(data?.data?.result?.map((item) => item.category))];
  const filterCoursesByCategory = (category) => {
    if (category === "All Categories") {
      return data?.data?.result;
    }
    return data?.data?.result?.filter((item) => item.category === category);
  };
  // Handle tab change OR ACTIVE KEY
  const handleTabChange = (key) => {
    setActiveKey(key);
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="xl:text-[56px] lg:text-[56px] font-black leading-none text-2xl text-[#101828] font-Merriweather text-center pb-12">
        {t("Popular Courses")}
      </h1>

      {/* Tabs for categories */}
      <Tabs
        defaultActiveKey="1"
        activeKey={activeKey}
        onChange={handleTabChange}
        tabBarStyle={{
          borderBottom: "none", 
        }}
      >
        {categories.map((category, index) => (
          <Tabs.TabPane
            tab={
              <button
                className={`category-button ${
                  activeKey === String(index + 1) ? "active-tab" : ""
                }`}
              >
                {category}
              </button>
            }
            className="pt-8"
            key={index + 1}
          >
            {/* Course cards for each category */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-4">
              {filterCoursesByCategory(category).map((item) => (
                <CourseCard
                data={item}
                  key={item._id}
                  // courseimage={imageUrl + item.thumbnailImage}
                  // courseTitle={item.courseTitle}
                  // instructor={item.instructor}
                  // rating={item.rating}
                  // price={item.price}
                  // reviews={item.reviews}
                  // duration={item.duration}
                  // students={item.students}
                  // enrollLink={item.id}
                />
              ))}
            </div>
          </Tabs.TabPane>
        ))}
      </Tabs>

      {/* Custom styles */}
    </div>
  );
};

export default PopularCourses;
