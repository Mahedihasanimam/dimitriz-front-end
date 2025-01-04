"use client";
import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { message, Space } from 'antd';
import { GoogleOutlined } from "@ant-design/icons";
import AuthLayout from "@/components/AuthLayout";
import Link from "next/link";
import Image from "next/image";
import logoimage from "/public/images/logoimage.png";
import googleicon from "/public/images/google.png";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "@/redux/features/users/UserApi";
import Cookies from "js-cookie";
import { setUser } from "@/redux/features/users/userSlice";

const signIn = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const router=useRouter()
  const dispatch = useDispatch();
  const [loginUser]=useLoginUserMutation()
  const onFinish = async(values) => {
    console.log("Success:", values);
    
      try {
          const response = await loginUser(values);
          console.log('response', response);
          if (response?.data?.success) {
            message.success(response?.data?.data?.message || response?.data?.message);
            dispatch(setUser(response?.data?.data?.user));
            Cookies.set("token", response?.data?.data?.token);
            router.push("/");
          }
          if(response?.error){
            message.error(response?.error?.data?.message);
          }
    
        } catch (error) {
          console.log('error', error);
          message.error("Something went wrong");
        }
    
   
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <AuthLayout>
     {contextHolder}
     <div className="pt-12">
     <div className="text-center px-2 py-8">
        <div className="flex justify-center items-center mb-4">
          <Image src={logoimage} />
        </div>
        <h1 className="text-3xl font-bold mb-4">Log in to your account</h1>
        <h3 className="text-[#475467] text-[16px]">
          Welcome back! Please enter your details.
        </h3>
      </div>
      <div className="lg:max-w-lg w-full mx-auto px-4">
        <div className="flex justify-center items-center ">
          <Form
            name="signin"
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
                  Email
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

            <Form.Item
              label={
                <label
                  htmlFor="email"
                  className="text-sm text-[#344054] font-medium"
                >
                  Password
                </label>
              }
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              required={false}
            >
              <Input.Password
                className="border border-[#D0D5DD] p-2 text-[16px] text-[#667085] font-normal hover:border-[#D0D5DD] focus:border-[#dde2eb]"
                placeholder="Enter your password"
              />
            </Form.Item>

            <div className="flex justify-between items-center">
              <Form.Item
                name="remember"
                className="w-fit"
                valuePropName="checked"
              >
                <Checkbox className="text-[14px] text-[#344054] font-medium ">
                  Remember me
                </Checkbox>
              </Form.Item>

              {/* Forgot Password Link */}
              <Link
                href="/auth/forgetpassword"
                className="text-[14px] text-[#195671] font-semibold hover:underline pb-4"
              >
                Forgot password?
              </Link>
            </div>

            <Form.Item>
              <Button
                className="text-[#FFFFFF] text-[16px] font-semibold p-6"
                size="large"
                type="primary"
                htmlType="submit"
                block
              >
                Log In
              </Button>
            </Form.Item>

            {/* Google Sign In Button */}
            <Form.Item>
              <Button
                block
                className="btn-google text-[#344054] text-[16px] font-semibold p-6 hover:border-[#344054] hover:bg-[#344054] hover:text-[#FFFFFF]"
                style={{ marginBottom: "10px" }}
              >
                <Image src={googleicon} width={24} height={24} />
                Log in with Google
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="text-center lg:mt-4">
          Don't have an account?{" "}
          <Link href="/auth/signup">
            <span className="text-[#195671] font-semibold hover:underline">
              Sign up
            </span>
          </Link>
        </div>
      </div>
     </div>
    </AuthLayout>
  );
};

export default signIn;
