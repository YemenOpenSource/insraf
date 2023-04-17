"use client";
import tw from "tailwind-styled-components";
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

// tailwind-styled-components
const Container = tw.div`max-w-7xl mx-auto p-2 sm:p-4`;
const Card = tw.div`max-w-3xl mx-auto sm:p-3`;
const Page = tw.div`bg-white overflow-hidden shadow divide-gray-200 rounded-sm`;
const Qr = tw.div`
  shadow-sm text-sm font-medium font-bolder text-white select-none
`;
const Button = tw.button`
  w-full mb-8 flex justify-center py-2 px-4 border border-transparent 
  rounded-md shadow-sm text-sm font-medium font-bolder text-white bg-blue-700 
  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 
  focus:ring-blue-500 select-none
`;

export default function Attedance() {
  const [data, setData] = useState("No result");
  return (
    <Container>

      <Card>
        <Page>
          <div className="sm:mx-auto sm:w-full sm:max-w-md p-3 sm:p-0 selection:bg-blue-700 selection:text-white">
          {/*   <QrReader
              onResult={(result, error) => {
                if (!!result) {
                  setData(result?.text);
                }
                if (!!error) {
                  console.info(error);
                }
              }}
            /> */}
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-md p-3 sm:p-0">
            <Button>تسجيل الدخول</Button>
          </div>
        </Page>
      </Card>
    </Container>
  );
}
