import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const FAQs = () => {
  return (
    <div className="max-w-3xl mx-auto my-10 p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <Collapse accordion>
        <Panel header="What is Pantognostis?" key="1">
          <p>
            Pantognostis is a platform where instructors can create and sell their courses, 
            while students can learn at their own pace. It also hosts various online and live seminars, 
            allowing learners to find knowledge in different fields.
          </p>
        </Panel>
        <Panel header="How can I enroll in a course?" key="2">
          <p>
            To enroll in a course, simply browse our course catalog, choose a course, 
            and click the 'Enroll Now' button. You will be prompted to sign in or create an account 
            if you haven't already done so.
          </p>
        </Panel>
        <Panel header="What payment methods are accepted?" key="3">
          <p>
            We accept payments through credit/debit cards, PayPal, and direct bank transfers. 
            All payments are processed securely through our payment partners.
          </p>
        </Panel>
        <Panel header="Can I access the course materials after completion?" key="4">
          <p>
            Yes! Once you complete a course, you will have lifetime access to the materials, 
            allowing you to review the content whenever you need.
          </p>
        </Panel>
        <Panel header="What is the refund policy?" key="5">
          <p>
            We offer a 30-day money-back guarantee on most of our courses. If you're not satisfied 
            with a course, you can request a refund within 30 days of purchase. Please refer to our 
            refund policy page for more details.
          </p>
        </Panel>
        <Panel header="How do I contact support?" key="6">
          <p>
            You can reach our support team through the 'Contact Us' page on our website or 
            by sending an email to support@pantognostis.com. We strive to respond within 24-48 hours.
          </p>
        </Panel>
        <Panel header="Can I switch between courses?" key="7">
          <p>
            Yes, you can switch between courses before completing them. If you find a course 
            isn't meeting your needs, you can contact support to help facilitate a switch.
          </p>
        </Panel>
        <Panel header="Do you provide certificates?" key="8">
          <p>
            Yes, after successfully completing a course, you will receive a certificate of completion, 
            which you can share on your LinkedIn profile or add to your resume.
          </p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default FAQs;
