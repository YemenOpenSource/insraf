"use client";
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

// Define a component to handle QR code scanning
function QRScanner() {
  const [result, setResult] = useState(null);

  // Function to handle scanning of QR code
  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  // Function to handle errors during scanning
  const handleError = (err) => {
    console.error(err);
  };

  // Render the QR reader component with appropriate props
  return (
    <QrReader
      delay={300}
      onError={handleError}
      onScan={handleScan}
      style={{ width: "100%" }}
    />
  );
}

export default function Attedance() {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md p-3 sm:p-0 selection:bg-blue-700 selection:text-white">
      <div>
        <QRScanner />
        <div className="mt-2">
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full font-regular rounded-md outline-none my-4 text-center border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="اسم المادة"
            disabled
          />
        </div>
        <p className="font-bolder sm:my-4 text-sm text-blue-700">
          * يتم إضافة اسم المادة تلقائياً عند مسح الكيو آر{" "}
        </p>
      </div>
    </div>
  );
}
