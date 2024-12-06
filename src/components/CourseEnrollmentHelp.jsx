// components/CourseEnrollmentHelp.js
import React from 'react';

const CourseEnrollmentHelp = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg ">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Course Enrollment Help</h1>
      <p className="mb-4 text-gray-600">
        Welcome to the Course Enrollment Help section. Here, we provide guidance on how to enroll in courses on our platform.
      </p>

      <h2 className="text-2xl font-semibold mb-2 text-gray-700">How to Enroll in a Course?</h2>
      <ul className="list-decimal list-inside mb-4 text-gray-600 space-y-2">
        <li>Browse through the list of available courses on our platform.</li>
        <li>Click on the course that you are interested in.</li>
        <li>On the course details page, click the "Enroll Now" button.</li>
        <li>Complete the payment process to finalize your enrollment.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 text-gray-700">Need Assistance?</h2>
      <p className="mb-4 text-gray-600">
        If you encounter any issues during the enrollment process, reach out to our support team at <a href="mailto:support@pantognostis.com" className="text-blue-600 underline">support@pantognostis.com</a>.
      </p>
    </div>
  );
};

export default CourseEnrollmentHelp;
