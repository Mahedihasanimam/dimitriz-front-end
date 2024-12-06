'use client'
import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useRouter } from 'next/navigation';

const ContactForm = () => {
    const router=useRouter()
    const onFinish = (values) => {
        console.log('Received values from form: ', values);
        message.success('Your message has been sent successfully!');
        router.push('/')
        // Here you can add logic to send the form data to your server/API
    };

    return (
        <div className="max-w-3xl mx-auto my-10 p-6 bg-white shadow rounded">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
            <Form
                name="contact"
                onFinish={onFinish}
                layout="vertical"
                initialValues={{
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                }}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please enter your name!' }]}
                >
                    <Input className="border border-[#D0D5DD] p-2 text-[16px] text-[#667085] font-normal hover:border-[#D0D5DD] focus:border-[#dde2eb]" placeholder="Your Name" />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: 'Please enter your email!' },
                        { type: 'email', message: 'Please enter a valid email!' }
                    ]}
                >
                    <Input className="border border-[#D0D5DD] p-2 text-[16px] text-[#667085] font-normal hover:border-[#D0D5DD] focus:border-[#dde2eb]" placeholder="Your Email" />
                </Form.Item>
 
                <Form.Item
                    label="Subject"
                    name="subject"
                    rules={[{ required: true, message: 'Please enter the subject!' }]}
                >
                    <Input className="border border-[#D0D5DD] p-2 text-[16px] text-[#667085] font-normal hover:border-[#D0D5DD] focus:border-[#dde2eb]" placeholder="Subject" />
                </Form.Item>

                <Form.Item
                    label="Message"
                    name="message"
                    rules={[{ required: true, message: 'Please enter your message!' }]}
                >
                    <Input.TextArea  rows={4} placeholder="Your Message" />
                </Form.Item>

                <Form.Item>
                    <Button style={{height:"44px"}} type="primary" htmlType="submit" className="w-full">
                        Send Message
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ContactForm;
