import React from "react";
import errorimage from "/public/images/errorimage.png";
import Image from "next/image";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
const NotFound = () => {
  return (
    <div className="container mx-auto lg:flex items-center justify-between h-[700px] px-4">
      <div className="space-y-3">
        <h3 className="text-[16px] text-[#1253BB] font-bold">404 error</h3>
        <h1 className="xl:text-[60px] lg:text-[56px] font-black leading-none text-2xl text-[#101828] font-Merriweather pb-4 text-start">
          Page not found
        </h1>
        <p className="text-[#475467] pb-10">
          Sorry, the page you are looking for doesn't exist. <br /> Here are
          some helpful links:
        </p>
        <Link href={"/"}>
          <Button
            className=" bg-transparent border-2 border-[#D0D5DD] text-[16px] text-[#344054] font-semibold p-6 mr-4"
            size="large"
            type="primary"
          >
            <ArrowLeftOutlined />
            Go back
          </Button>
        </Link>
        <Link href="/">
          <Button
            className="text-[#FFFFFF] text-[16px] font-semibold p-6"
            size="large"
            type="primary"
          >
            Take me home
          </Button>
        </Link>
      </div>
      <Image className="" src={errorimage} alt="Error Image" />
    </div>
  );
};

export default NotFound;
