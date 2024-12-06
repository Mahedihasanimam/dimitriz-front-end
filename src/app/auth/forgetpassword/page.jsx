"use client";
import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import AuthLayout from "@/components/AuthLayout";
import Link from "next/link";
import Image from "next/image";
import logoimage from "/public/images/logoimage.png";
import googleicon from "/public/images/google.png";
const page = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <AuthLayout>
      <div className=" max-w-md mx-auto pt-32 px-4">
        <div className="text-start">
          <h1 className="text-3xl font-bold mb-4">Forgot password?</h1>
          <h3 className="text-[#475467] text-[16px]">
            We’ll send a verification code to <br /> alim...@gmail.com email
          </h3>
        </div>
        <div className="lg:max-w-lg w-full mx-auto pt-8 ">
          <div className="flex justify-start items-center ">
            <Form
              name="page"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              style={{ maxWidth: "400px", width: "100%" }}
            >
              <Form.Item
                label={
                  <label
                    htmlFor="email"
                    className="text-sm text-[#344054] font-medium"
                  >
                    Submit Your Email
                  </label>
                }
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                    type: "email",
                  },
                ]}
                required={false}
              >
                <Input
                  className="border border-[#D0D5DD] p-2 text-[16px] text-[#667085] font-normal hover:border-[#D0D5DD] focus:border-[#dde2eb]"
                  placeholder="Enter your email"
                />
              </Form.Item>

              <Form.Item>
              <Link href="/auth/otpverification">
              <Button
                  className="text-[#FFFFFF] text-[16px] font-semibold p-6"
                  size="large"
                  type="primary"
                  htmlType="submit"
                  block
                >
                  Submit
                </Button></Link>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default page;
