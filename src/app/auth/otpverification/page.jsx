"use client";
import React, { useEffect, useState } from "react";
import { Form, Input, Button, message } from "antd";
import AuthLayout from "@/components/AuthLayout";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForgetpasswordMutation, useOtpVerifyMutation } from "@/redux/features/users/UserApi";

const Page = ({ params }) => {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [verifyEmail] = useOtpVerifyMutation();
  const [forgetpassword] = useForgetpasswordMutation();
  const [otp, setOtp] = useState(["", "", "", ""]);
const router = useRouter()
  const onFinish = async(values) => {
    const otpValue = otp.join(""); 
    console.log(email);
    if (otpValue.length === 4) {
      try {
        const response = await verifyEmail({ emailVerifyCode: otpValue, email });
        console.log('response', response, 'email', email , 'otp', otpValue);
        if (response?.data?.success) {
          router.push(`/auth/createNewPassword?email=${encodeURIComponent(email)}`);
          message.success(response?.data?.message);
        }
        if (response?.error) {
          message.error(response?.error?.data?.message);
        }
      } catch (error) {
        message.error(error?.data?.message);
      }
    }
  };


 const handlesendagain = async() => {
  try {
    const response = await forgetpassword({ email });
    console.log(response)
    if (response?.data?.success) {
      message.success(response?.data?.message);
    }
    if (response?.error) {
      message.error(response?.error?.data?.error);
    }
  } catch (error) {
    message.error(error?.data?.error);
  }
 }

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
  useEffect(() => {
    const queryEmail = searchParams.get("email");
    if (queryEmail) {
      setEmail(queryEmail);
    }
  }, [searchParams]);

  return (
    <AuthLayout>
      <div className="max-w-md mx-auto pt-32 px-4">
        <div className="text-start">
          <h1 className="text-3xl font-bold mb-4">OTP verification</h1>
          <h3 className="text-[#475467] text-[16px]">
            We’ve sent you a verification code to <br /> {email}
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
             
               <Button
                  className="text-[#FFFFFF] text-[16px] font-semibold p-6"
                  size="large"
                  type="primary"
                  htmlType="submit"
                  block
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="text-start lg:mt-4">
          Didn’t received code?{" "}
        
            <span onClick={handlesendagain} className="text-[#195671] font-semibold hover:underline">
            Send again
            </span>
         
        </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Page;
