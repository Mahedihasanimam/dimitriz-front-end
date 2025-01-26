
'use client'
import React from 'react';
import webinner1 from '/public/images/webinner1.jpg'
import webinner2 from '/public/images/webinner2.jpg'
import webinner3 from '/public/images/webineer3.jpg'
import Image from 'next/image';
import { useGetallWebinnarQuery } from '@/redux/features/course/CourseApi';
import { imageUrl } from '@/redux/baseApi';
import Link from 'next/link';
const Webinner = () => {

  const {data}= useGetallWebinnarQuery();
  console.log('webinner data',data?.data?.result)
  const webinars = [
    {
      title: 'Mastering React for Beginners',
      date: 'November 15, 2024',
      time: '2:00 PM - 4:00 PM',
      description: 'Join us to learn the fundamentals of React and start building interactive web apps.',
      image: webinner1,
    },
    {
      title: 'Advanced JavaScript Concepts',
      date: 'November 20, 2024',
      time: '5:00 PM - 7:00 PM',
      description: 'Deep dive into JavaScript topics like closures, async/await, and more.',
      image: webinner2,
    },
    {
      title: 'Understanding Next.js',
      date: 'December 1, 2024',
      time: '3:00 PM - 5:00 PM',
      description: 'Explore the power of server-side rendering and static site generation with Next.js.',
      image: webinner3,
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto p-2">
    <div className='pb-8'>
    <h1 className="xl:text-[56px] lg:text-[56px] font-black leading-none text-2xl text-[#101828] font-Merriweather text-center pb-12">
      Upcoming Webinars
      </h1>
    </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.data?.result.map((webinar, index) => (
            <div key={index} className="bg-white  shadow-lg rounded-lg overflow-hidden">
             <div className='min-h-[340px] max-h-[350px]'>
              {
                webinar?.thumbnailImage &&
             <Image  height={350} width={400} src={imageUrl + webinar.thumbnailImage} alt={webinar.title} className="  w-full   " />
              }
             </div>
              <div className="p-6 ">
                <h3 className="text-2xl font-semibold mb-2">{webinar.title}</h3>
                <p className="text-gray-600 mb-1"><strong>Date:</strong> {webinar.date && new Date(webinar.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p className="text-gray-600 mb-1"><strong>Time:</strong> {webinar.time}</p>
                <p className="text-gray-700 mb-4">{webinar.description}</p>
               <Link target='_blank' href={`${webinar.webinarLink}`}>
               <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Join Now
                </button>
               </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Webinner;
