"use client";
import { useRef } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import { Show, Paper } from "react-iconly";
const data = [
  {
    subject: "Computer Network",
    timein: "7:00 ص",
    timeout: "10:00 ص",
    date: "2023/2/10",
    color: `yellow`,
  },
  {
    subject: "Elective II",
    timein: "10:00 ص",
    timeout: "12:00 م",
    date: "2023/2/10",
    color: "green",
  },
  {
    subject: "Math II",
    timein: "12:00 ص",
    timeout: "1:00 م",
    date: "2023/2/10",
    color: "red",
  },
  {
    subject: "Computer Network",
    timein: "7:00 ص",
    timeout: "10:00 ص",
    date: "2023/2/10",
    color: "red",
  },
  {
    subject: "Elective II",
    timein: "10:00 ص",
    timeout: "12:00 م",
    date: "2023/2/10",
    color: "blue",
  },
];

export default function page() {
  const pdfExportComponent = useRef(null);

  const handleExportWithComponent = () => {
    pdfExportComponent.current.save();
  };

  return (
    <div className="flex flex-col w-screen h-full px-2 sm:px-4 select-none">
      <PDFExport
        ref={pdfExportComponent}
        fileName={`log-attedance`}
        title={"attedance"}
        author={"mansour_tech"}
      >
        <div className="flex flex-auto flex-col bg-white p-4 md:p-8 rounded-md shadow mb-4">
          <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between mb-3">
            <h3 className="font-semibold leading-6 text-blue-700 font-bolder text-center text-lg">
              منصور أحمد منصور
              <span className=" block text-center text-red-500">186000</span>
            </h3>
            <div className="mt-3 flex sm:ml-4 sm:mt-0 justify-center">
              <button
                onClick={handleExportWithComponent}
                type="button"
                className="inline-flex mx-2 items-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-blue-500 hover:bg-blue-700"
              >
                <Paper primaryColor="white" stroke="bold" size="medium" />
              </button>
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-blue-700 hover:bg-blue-700"
              >
                <Show primaryColor="white" stroke="bold" size="medium" />
              </button>
            </div>
          </div>
          <ol
            role="list"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4"
          >
            {data.map((d, index) => (
              <li
                key={index}
                className={`group flex flex-col h-20 rounded-lg bg-blue-100 p-2 text-xs leading-5 hover:bg-blue-100`}
              >
                <p
                  className={`font-semibold text-blue-700 text-center text-[15px]`}
                >
                  {d.subject}
                </p>
                <p
                  className={`text-blue-500 group-hover:text-blue-700 text-center`}
                >
                  <time dateTime="2022-01-12T12:00">{d.timein}</time> -
                  <time dateTime="2022-01-12T12:00"> {d.timeout}</time> -
                  <time className="fo font-bold" dateTime="2022-01-12T12:00">
                    {" "}
                    {d.date}
                  </time>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </PDFExport>
    </div>
  );
}
