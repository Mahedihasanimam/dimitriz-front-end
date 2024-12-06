"use client";
import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import AuthLayout from "@/components/AuthLayout";
import Link from "next/link";

const Page = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const onFinish = (values) => {
    const otpValue = otp.join(""); 
    console.log("Success:", { ...values, otp: otpValue });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (value, index) => {
    const otpCopy = [...otp];
    otpCopy[index] = value;
    setOtp(otpCopy);

    if (value.length === 1 && index < 3) {
      document.getElementById(`otpInput-${index + 1}`).focus();
    }
  };

  return (
    <AuthLayout>
      <div className="max-w-md mx-auto pt-32 px-4">
        <div className="text-start">
          <h1 className="text-3xl font-bold mb-4">OTP verification</h1>
          <h3 className="text-[#475467] text-[16px]">
            We’ve sent you a verification code to <br /> alim...@gmail.com
          </h3>
        </div>
        <div className="lg:max-w-lg w-full mx-auto pt-8 ">
          <div className="flex justify-start items-center ">
            <Form
              name="page"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              style={{ maxWidth: "500px", width: "100%" }}
            >
              {/* OTP Input */}
              <div className="flex justify-between   ">
                {otp.map((digit, index) => (
                  <Input
                  placeholder="0"
                  className="text-6xl text-[#D0D5DD]"
                    key={index}
                    id={`otpInput-${index}`}
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, index)}
                    style={{
                      width: "80px",
                      height: "80px",
                      textAlign: "center",
                      fontSize: "24px",
                    }}
                  />
                ))}
              </div>

              <Form.Item className="pt-6">
               <Link href="/auth/login">
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
          <div className="text-start lg:mt-4">
          Didn’t received code?{" "}
          <Link href="#">
            <span className="text-[#195671] font-semibold hover:underline">
            Send again
            </span>
          </Link>
        </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Page;
