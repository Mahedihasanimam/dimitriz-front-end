"use client";
import React from "react";
import { Form, Input, Button } from "antd";
import AuthLayout from "@/components/AuthLayout";
import Link from "next/link";
import Image from "next/image";
import signupimage from "/public/images/logo.png";
import googleicon from "/public/images/google.png";
import SignupCarousel from "@/components/utils/SignupCarosel";

const Signup = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <AuthLayout>
      <div className="xl:flex lg:flex md:flex lg:max-h-screen lg:h-screen md:flex-row items-center justify-between mx-auto overflow-hidden">
        {/* Left Section */}
        <div className="min-[1440px]:px-[40px] min-[1440px]:mt-[30px] xl:px-24 lg:px-12 lg:py-36 md:mx-auto md:px-3 xl:w-6/12 md:w-6/12 h-full xl:pb-0 md:pb-0 pb-12 flex flex-col justify-center">
          <div className="flex justify-start items-center xl:-mt-48 xl:py-12 lg:mt-6 md:mt-6 mt-6 md:mb-0 mb-4">
            <Image
              className="min-[2035px]:w-[600px] min-[1440px]:w-[400px] min-[2035px]:px-[60px] min-[1440px]:px-[40px] xl:w-[600px] lg:w-[300px] md:mx-0 mx-auto md:py-0 py-4"
              src={signupimage}
              alt="Logo"
            />
          </div>
          <div className="min-[2035px]:px-[200px] lg:px-12 xl:px-36 md:px-0">
            <div className="md:text-start text-center lg:my-4 my-8">
              <h1 className="text-3xl font-bold mb-4 md:text-start text-center">Sign up</h1>
              <h3 className="text-[#475467] text-[16px]">Please enter your details.</h3>
            </div>
            <Form
              className="md:px-0 px-6 md:mx-0 mx-auto"
              name="signin"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              style={{ maxWidth: "400px", width: "100%" }}
            >
              <Form.Item
                label={<label className="text-sm text-[#344054] font-medium">Name*</label>}
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
                required={false}
              >
                <Input
                  className="min-[2035px]:w-[500px] min-[2035px]:h-[50px] min-[375px]:w-[330px] min-[320px]:w-[290px] w-[360px] h-[44px] border border-[#D0D5DD] p-2 text-[16px] text-[#667085] font-normal hover:border-[#D0D5DD] focus:border-[#dde2eb]"
                  placeholder="Enter your Name"
                />
              </Form.Item>

              <Form.Item
                label={<label className="text-sm text-[#344054] font-medium">Email*</label>}
                name="email"
                rules={[{ required: true, message: "Please input your email!", type: "email" }]}
                required={false}
              >
                <Input
                  className="min-[2035px]:w-[500px] min-[2035px]:h-[50px] min-[375px]:w-[330px] min-[320px]:w-[290px]  w-[360px] h-[44px] border border-[#D0D5DD] p-2 text-[16px] text-[#667085] font-normal hover:border-[#D0D5DD] focus:border-[#dde2eb]"
                  placeholder="Enter your email"
                />
              </Form.Item>

              <Form.Item
                label={<label className="text-sm text-[#344054] font-medium">Password*</label>}
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                  { min: 8, message: "Password must be at least 8 characters long." },
                ]}
                required={false}
                extra={<p className="text-[16px] font-normal text-[#475467] pt-2">Must be at least 8 characters.</p>}
              >
                <Input.Password
                  className="min-[2035px]:w-[500px] min-[2035px]:h-[50px] min-[375px]:w-[330px] min-[320px]:w-[290px]  w-[360px] h-[44px] border border-[#D0D5DD] p-2 text-[16px] text-[#667085] font-normal hover:border-[#D0D5DD] focus:border-[#dde2eb]"
                  placeholder="Enter your password"
                />
              </Form.Item>

              <Form.Item className=" min-[2035px]:w-[500px] min-[2035px]:h-[50px] min-[375px]:w-[330px] min-[320px]:w-[290px]  w-[360px] h-[44px]">
                <Link href="/auth/signup/intarest">
                <Button className="text-[#FFFFFF] text-[16px] font-semibold p-6" size="" type="primary" htmlType="submit" block>
                  Create account
                </Button>
               </Link>
              </Form.Item>

              <Form.Item className=" min-[2035px]:w-[500px] min-[2035px]:h-[50px] min-[375px]:w-[330px] min-[320px]:w-[290px]  w-[360px] h-[44px]">
                <Button
                  block
                  className="btn-google text-[#344054] min-[375px]:w-[330px]  text-[16px] font-semibold p-6 hover:bg-[#344054] hover:text-[#FFFFFF]"
                  style={{ marginBottom: "10px" }}
                >
                  <Image src={googleicon} width={24} height={24} alt="Google Icon" />
                  Sign up with Google
                </Button>
              </Form.Item>
            </Form>
            <div className="lg:mt-2 flex px-8">
              <h1 className="text-[16px]"> Already have an account? </h1>
              <Link href="/auth/login">
                <span className="text-[#195671] font-semibold hover:underline pl-2">Log in</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section (Carousel) */}
        <div className="order-first md:order-last h-screen overflow-hidden md:w-6/12">
          <SignupCarousel />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Signup;
