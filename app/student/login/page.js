"use client"
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

 const Test = (props) => {
  const [data, setData] = useState('No result');

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '20%', }}
      />
      <p>{data}</p>
    </>
  );
};
export default Test