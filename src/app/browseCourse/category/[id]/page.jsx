'use client';

import Image from 'next/image';
import { useParams, useSearchParams } from 'next/navigation';
import React from 'react';
import heroimg from "/public/images/browseheroimg.png";
import { useTranslations } from 'next-intl';
import { Button, Dropdown, Input, Menu } from 'antd';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import CourseCard from '@/components/ui/CourseCard';
import { useGetFiltaredCourseBycategoryQuery } from '@/redux/features/course/CourseApi';

const Page = () => {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const browseCategory = searchParams.get("browse");

  console.log("searchParam", browseCategory);

  const { data } = useGetFiltaredCourseBycategoryQuery(browseCategory);

  console.log('data----------------', data?.data);


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
              placeholder="Search for course"
              className="w-full h-[57px] text-[#667085] text-[16px] px-4"
            // prefix={<SearchOutlined size={15} className="text-[#667085]" />} // Single element for the left icon
            // suffix={
            //   // Wrap inside a div
            //   <div>
            //     <div className="border-l-2  text-[#1D2939] font-normal border-[#D0D5DD]">
            //       <Dropdown
            //         className="border-none"
            //         overlay={categoryMenu}
            //         trigger={["hover"]}
            //       >
            //         <Button className="text-lg">
            //         {t("Category")} <DownOutlined className="text-lg" />{" "}
            //         </Button>
            //       </Dropdown>
            //     </div>
            //   </div>
            // }
            />
          </div>
        </div>
      </div>
      {/* End of Hero section  */}

      <div className="container mx-auto">
        <h1 className="py-12 text-2xl font-bold">

          {browseCategory}
        </h1>
        {/* Course cards for each category */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-4 pb-12">
          {data?.data?.result?.map((item) => (
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

export default Page;
