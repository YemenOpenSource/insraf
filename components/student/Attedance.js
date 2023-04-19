"use client";
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

export default function Attedance() {
  const [data, setData] = useState("No result");
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md p-3 sm:p-0 selection:bg-blue-700 selection:text-white">
      <div>
        <QrReader
          onResult={(result) => {
            if (!!result) {
              setData(result?.text);
            }
          }}
        />
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
