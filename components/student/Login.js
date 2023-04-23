"use client";
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

export default function Attedance() {
  const [data, setData] = useState("No result");

  return (
    <>
      <QrReader
        constraints={{ facingMode: "environment" }}
        videoContainerStyle={{
          padding: 0,
          margin: 0
        }}
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: "100%" }}
      />
      <p>{data}</p>
    </>
  );
}
