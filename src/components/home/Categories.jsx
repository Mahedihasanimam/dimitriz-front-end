import React from "react";
import Image from "next/image";
import catimage1 from "/public/images/icons/art.png";
import catimage2 from "/public/images/icons/development.png";
import catimage3 from "/public/images/icons/communication.png";
import catimage4 from "/public/images/icons/video.png";
import catimage5 from "/public/images/icons/photography.png";
import catimage6 from "/public/images/icons/marketing.png";
import catimage7 from "/public/images/icons/content.png";
import catimage8 from "/public/images/icons/finnace.png";
import catimage9 from "/public/images/icons/science.png";
import catimage10 from "/public/images/icons/art.png";
import { useTranslations } from "next-intl";
const Categories = () => {
  const t =useTranslations()
  const categories = [
    {
      category: `${t("Art & Design")}`,
      courses: 38,
      icon: catimage1,
    },
    {
      category: `${t("Development")}`,
      courses: 38,
      icon: catimage2,
    },
    {
      category:`${t("Communication")}`,
      courses: 38,
      icon: catimage3,
    },
    {
      category: `${t("Videography")}`,
      courses: 38,
      icon: catimage4,
    },
    {
      category: `${t("Photography")}`,
      courses: 38,
      icon: catimage5,
    },
    {
      category: `${t("Marketing")}`,
      courses: 38,
      icon: catimage6,
    },
    {
      category: `${t("Content Writing")}`,
      courses: 38,
      icon: catimage7,
    },
    {
      category: `${t("Finance")}`,
      courses: 38,
      icon: catimage8,
    },
    {
      category: `${t("Science")}`,
      courses: 38,
      icon: catimage9,
    },
    {
      category: `${t("Network")}`,
      courses: 38,
      icon: catimage10,
    },
  ];

  return (
    <div className="container mx-auto pb-8  px-4 mt-8">
        <h2 className=" text-[24px] font-bold text-[#000000] font-Merriweather mb-8">{t("Categories")}</h2>
      <div className="grid lg:grid-cols-5  md:grid-cols-4 grid-cols-2 gap-4">
        {categories.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:cursor-pointer transition-all duration-300 ease-in-out text-center ">
            <Image
              className=" block mx-auto mb-4"
              src={item.icon}
              alt={item.category}
              width={32}
              height={32}
            />
            <h3 className="text-[16px] font-semibold text-[#344054]">
             {item.category}
            </h3>
            <p className="text-[12px] text-[#667085] font-medium pt-1">
              {item.courses} {t("Course")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Categories;
