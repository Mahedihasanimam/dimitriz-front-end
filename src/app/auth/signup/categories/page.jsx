"use client";
import { Button, Form } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { CheckCircleFilled } from "@ant-design/icons";
import image1 from "/public/images/category1.png";
import image2 from "/public/images/category2.png";
import image3 from "/public/images/category3.png";
import image4 from "/public/images/category4.png";
import Link from "next/link";

const Page = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const interests = [
    { id: 1, label: "Design", image: image1 },
    { id: 2, label: "Programming", image: image2 },
    { id: 3, label: "Finance", image: image3 },
    { id: 4, label: "Marketing", image: image4 },
    { id: 5, label: "Music", image: image2 },
    { id: 6, label: "Writing", image: image3 },
    { id: 7, label: "Film", image: image2 },
    { id: 8, label: "Photography", image: image3 },
  ];

  const handleItemClick = (interest) => {
    const isAlreadySelected = selectedItems.some(
      (item) => item.id === interest.id
    );

    if (isAlreadySelected) {
      const updatedItems = selectedItems.filter(
        (item) => item.id !== interest.id
      );
      setSelectedItems(updatedItems);
    } else {
      const updatedItems = [...selectedItems, interest];
      setSelectedItems(updatedItems);
    }
  };

  const isSelected = (id) =>
    selectedItems.some((item) => item.id === id);

  // Handler to get selected data on form submission
  const handleSubmit = () => {
    console.log("Selected Interests: ", selectedItems);
  };

  return (
    <div>
      <div className="container mx-auto lg:mt-8">
        <div className="shadow-lg rounded-lg max-w-6xl mx-auto p-8">
          <div className="text-center py-8">
            <h1 className="lg:text-4xl text-2xl font-Merriweather font-bold mb-4 text-[#000000]">
            Pick 3 categories you want to explore
            </h1>
          </div>

          {/* Form for capturing selected interests */}
          <Form onFinish={handleSubmit}>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-4">
              {interests.map((interest) => (
                <div
                  key={interest.id}
                  onClick={() => handleItemClick(interest)}
                  className={`relative cursor-pointer rounded-3xl ${
                    isSelected(interest.id) ? "border-4 border-green-500" : ""
                  }`}
                >
                  <Image
                    src={interest.image}
                    className="w-full"
                    height={300}
                    alt={interest.label}
                  />
                  <div
                    className={`absolute bottom-0 w-full h-full bg-gradient-to-b from-[#C93B3B00] to-[#00000080] text-center rounded-3xl text-[#FFFFFF] ${
                      isSelected(interest.id)
                        ? "bg-[#039855] bg-opacity-40"
                        : ""
                    }`}
                  >
                    <h3 className="text-[#FFFFFF] font-bold text-center bottom-6 lg:left-12 md:left-8 left-4 absolute xl:text-xl lg:text-xl md:text-lg text-sm">
                      {interest.label}
                    </h3>

                    {isSelected(interest.id) && (
                      <div className="absolute top-4 right-4 text-green-500">
                        <CheckCircleFilled style={{ fontSize: "32px" }} />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Button to submit form and see selected items */}
            <div className="text-center mt-8">
              <Link href="/">
              
              <Button
                className="text-[#FFFFFF] text-[16px] font-semibold p-6"
                size="large"
                type="primary"
                htmlType="submit"
                block
              >
               Done
              </Button></Link>

            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Page;
