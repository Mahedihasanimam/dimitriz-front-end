"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  ClockCircleOutlined,
  UsergroupDeleteOutlined,
  ArrowUpOutlined,
  CreditCardOutlined,
  AppleOutlined,
  GoogleOutlined,
  LockFilled,
} from "@ant-design/icons";
import { Button, Modal, Rate, Space } from "antd";
import { Radio, Input, Form } from "antd";
import card1 from "/public/images/icons/card1.svg";
import card2 from "/public/images/icons/card2.svg";
import card3 from "/public/images/icons/card3.svg";
import card4 from "/public/images/icons/card4.svg";

import apple from "/public/images/icons/applepay.svg";
import google from "/public/images/icons/googlepay.svg";
import strype from "/public/images/icons/strype.svg";
import paypal from "/public/images/icons/paypal.svg";
import { imageUrl } from "@/redux/baseApi";
import PaymentForm from "@/components/utils/CheckoutForm";
import { useGetSingleCourseByidQuery } from "@/redux/features/course/CourseApi";

const page = ({ params}) => {
  const { id } = params;
   
  const {data}=useGetSingleCourseByidQuery(id)
console.log('data',data);
  
  const [form] = Form.useForm();

  // Handle form submission
  const onFinish = (values) => {
    console.log("Form Values:", values);
  };













  //   modal
  const success = () => {
    Modal.success({
      content: (
        <div className="w-full py-4 space-y-2">
          <span className="text-8xl text-center mx-auto block">🎉</span>
          <h1 className="text-2xl font-bold text-[#34303E]">
            Congratulations! You’ve completed your Enrollment.
          </h1>
        </div>
      ),
      onCancel: 'cancel',
      okText:" Go to Dashboard", // Customize the button text
      okButtonProps: {
        style: { backgroundColor: '#564FFD', borderColor: '#564FFD', color: '#fff' }, // Customize button styles
      },
    });

  };
  return (
    <div className="max-w-[1056px] p-4 mx-auto">
      <div className="lg:flex flex-row items-start gap-6 justify-between  my-6">
        {/* left side of checkout page ------------------------------------------ */}
        <div className="">
          <h3 className="text-2xl font-bold mb-4">Order summary</h3>
          <div>
            {/* card */}

            <div className="border p-6 rounded-lg">
              {/* content of payment */}
              <div>
               
                  <div
                    key={data?.data?._id}
                    className="w-full xl:flex lg:flex md:flex flex-row pb-8 my-4 bg-white border-b-2 border-dashed border-gray-200 overflow-hidden"
                  >
                    <Image
                      className="w-[185px] h-[134px] rounded-xl object-cover"
                      src={imageUrl + data?.data?.thumbnailImage}
                      alt="Course"
                      height={500}
                      width={500}
                    />

                    <div className="lg:px-5 py-2 w-full">
                      <div className="flex justify-between items-start w-full">
                        <p className="text-sm text-[#475467] mb-2">
                          by{" "}
                          <Link
                            href={`/browseCourse/instructor/${data?.data?.instructor?._id}`}
                            className="text-[#1D2939] border-b-2 text-sm font-semibold border-[#1D2939]"
                          >
                            {data?.data?.instructor?.name}
                          </Link>
                        </p>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-yellow-500 text-sm">
                            <Rate
                              disabled
                              allowHalf
                              count={5} // Adjust this if needed
                              defaultValue={data?.data?.averageRating || 0} // Using `averageRating` here
                            />{" "}
                            <span className="text-[#475467] font-bold text-[16px]">
                              {data?.data?.averageRating}
                            </span>
                          </span>
                          <span className="text-[#475467] font-normal text-sm ml-2">
                            ({data?.data?.reviewCount})
                          </span>
                        </div>
                      </div>
                      <h5 className="text-[16px] font-bold tracking-tight text-[#1D2939] mb-2">
                        {data?.data?.title}
                      </h5>
                      <div className="flex items-center justify-start text-[#475467] text-sm py-2 border-b border-[#E5E7EB]">
                        <span className="mr-4 flex items-center font-normal">
                          <ClockCircleOutlined className="text-lg pr-2" />
                          {data?.data?.duration} Hours
                        </span>
                        <span className="flex items-center font-normal">
                          <UsergroupDeleteOutlined className="text-lg pr-2" />
                          {data?.data?.enrolledStudents?.length || 0} Students
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-4">
                        <span className="text-lg font-semibold text-[#000000]">
                          ${data?.data?.price}
                        </span>

                        {/* <button
                          className="text-sm text-[#B42318] border-b-2 border-[#B42318] font-normal"
                          onClick={() => handleRemoveItem(item._id)}
                        >
                          Remove
                        </button> */}
                      </div>
                    </div>
                  </div>
        
              </div>


              <div>
                <div className="flex items-center justify-between text-[16px] text-[#344054] font-semibold">
                  <h3>Quantity :</h3>
                  <span> 1 x</span>
                </div>
                <div className="flex items-center justify-between text-[16px] text-[#344054] font-semibold border-b border-[#E5E7EB] py-4">
                  <h3>Sub-total :</h3>
                  <span>€ {data?.data?.price}</span>
                </div>
                <div className="flex items-center justify-between text-[16px] text-[#344054] font-semibold  py-4">
                  <h3>Total :</h3>
                  <span>€ {data?.data?.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side of checkout page - */}
        <div className="max-w-md">
          <h3 className="text-2xl font-bold mb-4 uppercase">Payment</h3>
          <div className=" border lg:p-6 md:p-6 p-2 rounded-lg">
            {/* Payment Encryption Notice */}
            <div className="flex lg:gap-3 md:gap-3 gap-1 items-center space-x-2 mb-4 bg-[#F2F4F7] text-[#475467] rounded-lg p-3">
              <div className="p-2 bg-[#E4E7EC] text-sm text-[#475467] rounded-full">
                <LockFilled className="text-2xl " />
              </div>
              <p>
                Payments are encrypted so that your credit card & payment
                details stay safe
              </p>
            </div>

            {/* Ant Design Form */}
            <div
     
            >
              {/* Payment Method */}
            
                <div className="border p-4 rounded-md w-full flex items-center justify-between ">
                  <Radio
                    className="text-[#475467] text-sm font-medium"
                    value="creditCard "
                  >
                    Credit/Debit Card
                  </Radio>
                  <div className="flex items-center justify-center gap-2">
                    <Image src={card1} className="w-7 h-5 cursor-pointer" />
                    <Image src={card2} className="w-7 h-5 cursor-pointer" />
                    <Image src={card3} className="w-7 h-5 cursor-pointer" />
                    <Image src={card4} className="w-7 h-5 cursor-pointer" />
                  </div>
                </div>
        
              {/* <Form.Item
                name="paywith"
                rules={[
                  {
                    required: true,
                    message: "Please select a payment method!",
                  },
                ]}
              >
                <div className="border p-4 rounded-md w-full flex items-center justify-between ">
                  <Radio
                    className="text-[#475467] text-sm font-medium"
                    value="creditCard "
                  >
                    Pay with
                  </Radio>
                  <div className="flex items-center justify-center gap-2">
                    <Image src={apple} className="w-12 h-5 cursor-pointer" />
                    <Image src={google} className="w-12 h-5 cursor-pointer" />
                    <Image src={strype} className="w-12 h-5 cursor-pointer" />
                    <Image src={paypal} className="w-12 h-5 cursor-pointer" />
                  </div>
                </div>
              </Form.Item> */}

              {/* <div className="bg-[#E4E7EC] p-6 rounded-md border ">
   
                <Form.Item
                  name="nameOnCard"
                  label={
                    <label className="capitalize text-[#344054] text-sm font-medium">
                      Name on card
                    </label>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please enter your name on card!",
                    },
                  ]}
                >
                  <Input
                    className="text-[16px] text-[#98A2B3] font-normal p-2"
                    placeholder="John Doe"
                  />
                </Form.Item>

       
                <Form.Item
                  name="cardNumber"
                  label={
                    <label className="capitalize text-[#344054] text-sm font-medium">
                      Card number
                    </label>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please enter your card number!",
                    },
                  ]}
                >
                  <Input
                    className="text-[16px] text-[#98A2B3] font-normal p-2"
                    type="number"
                    placeholder="1234 5678 9101 1121"
                  />
                </Form.Item>

                <div className="flex space-x-4">
        
                  <Form.Item
                    name="expireDate"
                    label={
                      <label className="capitalize text-[#344054] text-sm font-medium">
                        Expire date
                      </label>
                    }
                    className="w-1/2"
                    rules={[
                      {
                        required: true,
                        message: "Please enter the expire date!",
                      },
                    ]}
                  >
                    <Input
                      className="text-[16px] text-[#98A2B3] font-normal p-2"
                      type="date"
                      placeholder="MM/YY"
                    />
                  </Form.Item>

         
                  <Form.Item
                    name="cvc"
                    label={
                      <label className="capitalize text-[#344054] text-sm font-medium">
                        CVC/CVV code
                      </label>
                    }
                    className="w-1/2"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your CVC code!",
                      },
                    ]}
                  >
                    <Input
                      className="text-[16px] text-[#98A2B3] font-normal p-2"
                      placeholder="••••"
                    />
                  </Form.Item>
                </div>
              </div> */}


              <PaymentForm product={data?.data} />

       
              <p className="text-sm text-[#475467] my-4">
                By completing your purchase you agree to these{" "}
                <a href="#" className="text-[#1253BB]">
                  Terms of Service
                </a>
                .
              </p>

              {/* Submit button */}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
