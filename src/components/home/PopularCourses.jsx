"use client";

import React from "react";
import CourseCard from "../ui/CourseCard";
import { Button, Tabs } from "antd";
import { useState } from "react";
import { useTranslations } from "next-intl";

const PopularCourses = () => {
  const [activeKey, setActiveKey] = useState("1");
const t=useTranslations()

//   FAKE JSON DATA FOR DEMO PURPOSES ONLY
  const course = [
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
      category: `${t("All courses")}`,
    },
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
      category: `${t("All courses")}`,
    },
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
      category: `${t("All courses")}`,
    },
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
      category: `${t("All courses")}`,
    },
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
      category: `${t("All courses")}`,
    },
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
      category: `${t("All courses")}`,
    },
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
      category: `${t("All courses")}`,
    },
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
      category: `${t("All courses")}`,
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
      category: `${t("Graphic Design")}`,
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
      category: `${t("UI/UX Design")}`,
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
      category: `${t("Programming")}`,
    },
    {
      id: 5,
      instructor: "John Michael",
      rating: 4.9,
      reviews: 3800,
      courseTitle: "Product Leadership for Managers",
      duration: "60 Hours",
      students: 300,
      price: "€ 50.00",
      enrollLink: "ENROLL NOW",
      imageLink: "https://i.ibb.co.com/17pL5Qj/caourse1.png",
      category: `${t("Artificial Intelligence")}`,
    },
    {
      id: 6,
      instructor: "John Michael",
      rating: 4.5,
      reviews: 2800,
      courseTitle: "Foundations of Product Development",
      duration: "35 Hours",
      students: 180,
      price: "€ 25.00",
      enrollLink: "ENROLL NOW",
      imageLink: "https://i.ibb.co.com/vPfYHr7/category1.png",
      category: `${t("Business Management")}`,
    },
    {
      id: 7,
      instructor: "John Michael",
      rating: 4.7,
      reviews: 3242,
      courseTitle: "Product Marketing Essentials",
      duration: "42 Hours",
      students: 190,
      price: "€ 30.00",
      enrollLink: "ENROLL NOW",
      imageLink: "https://i.ibb.co.com/xLN7bSQ/category2.png",
      category: `${t("3D")}`,
    },
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
      category: `${t("Sports")}`,
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
      category: `${t("All courses")}`,
    },
  ];


//   FILTER COURSES BY CATEGORY
  const categories = [...new Set(course.map((item) => item.category))];
  const filterCoursesByCategory = (category) => {
    return course.filter((item) => item.category === category);
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
          </Tabs.TabPane>
        ))}
      </Tabs>

      {/* Custom styles */}
    </div>
  );
};

export default PopularCourses;
