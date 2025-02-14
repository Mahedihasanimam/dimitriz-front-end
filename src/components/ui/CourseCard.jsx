import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ClockCircleOutlined,
  UsergroupDeleteOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import { Rate } from "antd";
import { useTranslations } from "next-intl";
import { imageUrl } from "@/redux/baseApi";

const CourseCard = ({ data}) => {
const t=useTranslations()

  return (
    <div className=" w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      {/* COURSE CARD BANNER IMGE HERE */}
      <Image
        className="w-full h-64 object-cover"
        src={imageUrl + data?.thumbnailImage }
        alt="Course"
        height={500}
        width={500}
      />
      {/* COURSE CARD DETAILS HERE */}
      <div className="p-4">
        <div className="flex justify-between items-center pt-5">
          <p className="text-sm text-[#475467] mb-2">
        by
            <Link
              href={`/browseCourse/instructor/${data?.instructor._id}`}
              className=" text-[#1D2939] border-b-2 text-sm font-semibold border-[#1D2939] pl-1"
            >
              {data?.instructor?.name}
            </Link>
          </p>
          <div className="flex items-center justify-center mb-2">
            <span className="text-yellow-500 text-sm">
              <Rate disabled allowHalf count={1} defaultValue={data?.averageRating} />{" "} 
              <span className="text-[#475467] font-bold text-[16px]">{data?.averageRating}</span> 
            </span>
            <span className="text-[#475467] font-normal text-sm ml-2">
              ({data?.reviewCount})
            </span>
          </div>
        </div>
        <h5 className="text-lg font-bold tracking-tight text-[#1D2939] mb-2">
          {data?.title}
        </h5>
        <div className="flex items-center justify-between text-[#475467] text-sm py-4 border-b border-[#E5E7EB]">
          <span className="mr-4 flex items-center font-normal">
            <ClockCircleOutlined className="text-lg pr-2" />
            {data?.duration} Hours
          </span>
          <span className="flex items-center font-normal">
            <UsergroupDeleteOutlined className="text-lg pr-2" />
            {data?.students}  Students
          </span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-lg font-semibold text-[#000000]">€ {data?.price}</span>
          <Link href={`/browseCourse/${data?._id}`}
            className="inline-flex items-center text-[#14698A] border-b-2 border-[#14698A] text-[16px] font-semibold "
          >
            {t("ENROLL NOW")}
            <ArrowUpOutlined className="rotate-45 text-xl pl-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
