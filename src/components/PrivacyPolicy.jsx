// components/PrivacyPolicy.js
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg ">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
      <p className="text-gray-600 mb-4">Last updated: October 21, 2024</p>
      
      <p className="mb-4 text-gray-600">
        Pantognostis ("we", "our", or "us") operates pantognostis.com (the "Site"). This page informs you of our policies regarding the collection, use, and disclosure of Personal Information when you use our Site.
      </p>
      
      <h2 className="text-2xl font-semibold mb-2 text-gray-700">Information Collection and Use</h2>
      <p className="mb-4 text-gray-600">
        We may ask you to provide us with certain personally identifiable information, such as your name, email address, and phone number. This information is used for providing and improving our services.
      </p>
      
      <h2 className="text-2xl font-semibold mb-2 text-gray-700">Log Data</h2>
      <p className="mb-4 text-gray-600">
        We collect information that your browser sends whenever you visit our Site. This may include details like your IP address, browser type, pages visited, and other statistics.
      </p>
      
      <h2 className="text-2xl font-semibold mb-2 text-gray-700">Security</h2>
      <p className="mb-4 text-gray-600">
        While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
