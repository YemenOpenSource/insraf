"use client";
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

export default function Attedance() {
  const [data, setData] = useState("No result");
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md p-3 sm:p-0 selection:bg-blue-700 selection:text-white">
      <QrReader
        onResult={(result) => {
          if (!!result) {
            setData(result?.text);
          }
        }}
      />
    </div>
  );
}
