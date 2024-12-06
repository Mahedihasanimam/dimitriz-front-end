// components/TermsAndConditions.js
import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg ">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Terms and Conditions</h1>
      <p className="text-gray-600 mb-4">Last updated: October 21, 2024</p>
      
      <p className="mb-4 text-gray-600">
        Welcome to Pantognostis! These terms and conditions outline the rules and regulations for the use of Pantognostis's website, located at pantognostis.com.
      </p>
      <p className="mb-4 text-gray-600">
        By accessing this website, we assume you accept these terms and conditions. Do not continue to use Pantognostis if you do not agree to take all of the terms and conditions stated on this page.
      </p>

      <h2 className="text-2xl font-semibold mb-2 text-gray-700">License</h2>
      <p className="mb-4 text-gray-600">
        Unless otherwise stated, Pantognostis and/or its licensors own the intellectual property rights for all material on Pantognostis. All intellectual property rights are reserved. You may access this from Pantognostis for your own personal use, subjected to restrictions set in these terms and conditions.
      </p>

      <h2 className="text-2xl font-semibold mb-2 text-gray-700">You Must Not:</h2>
      <ul className="list-disc list-inside mb-4 text-gray-600">
        <li>Republish material from Pantognostis</li>
        <li>Sell, rent, or sub-license material from Pantognostis</li>
        <li>Reproduce, duplicate, or copy material from Pantognostis</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 text-gray-700">Governing Law</h2>
      <p className="mb-4 text-gray-600">
        These terms shall be governed and construed in accordance with the laws of Greece, without regard to its conflict of law provisions.
      </p>
    </div>
  );
};

export default TermsAndConditions;
