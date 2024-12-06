"use client";
import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Alert } from "antd";
import AuthLayout from "@/components/AuthLayout";

const page = () => {
    const [alertMessage, setAlertMessage] = useState(null); // State for alert message
  const [alertType, setAlertType] = useState(null);
  const onFinish = (values) => {

    console.log("Success:", values);
    const newpassword=values.newpassword;
    const confirmPassword=values.Confirmpassword;
    if(newpassword!==confirmPassword){
        setAlertMessage("Passwords do not match");
        setAlertType("error");
    }else{
        setAlertMessage("Password created successfully");
      setAlertType("success");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <AuthLayout>
      <div className=" max-w-md mx-auto pt-32 px-4">
      {alertMessage && (
          <Alert
            message={alertMessage}
            type={alertType}
            showIcon
            className="mb-4"
          />
        )}
        <div className="text-start">
          <h1 className="text-3xl font-bold mb-4">Create a new password</h1>
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
                    htmlFor="newpassword"
                    className="text-sm text-[#344054] font-medium"
                  >
                    New password
                  </label>
                }
                name="newpassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your Enter new password!",
                    type: "password",
                  },
                ]}
                required={false}
              >
                <Input.Password
                  className="border border-[#D0D5DD] p-2 text-[16px] text-[#667085] font-normal hover:border-[#D0D5DD] focus:border-[#dde2eb]"
                  placeholder="Enter new password"
                />
              </Form.Item>
              <Form.Item
                label={
                  <label
                    htmlFor="newpassword"
                    className="text-sm text-[#344054] font-medium"
                  >
                    Confirm password
                  </label>
                }
                name="Confirmpassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your Enter Confirm password!",
                    type: "password",
                  },
                ]}
                required={false}
              >
                <Input.Password
                  className="border border-[#D0D5DD] p-2 text-[16px] text-[#667085] font-normal hover:border-[#D0D5DD] focus:border-[#dde2eb]"
                  placeholder="Re-enter new Password"
                />
              </Form.Item>

              <Form.Item>
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
        </div>
      </div>
    </AuthLayout>
  );
};

export default page;
