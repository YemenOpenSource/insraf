"use client";
import { useRef } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import Image from "next/image";
import insarf_blue from "@/public/insarf_blue.svg";

export default function ShowStudent(props) {
  const { name, regNo, level, classification } = props;

  const pdfExportComponent = useRef(null);

  const handleExportWithComponent = () => {
    pdfExportComponent.current.save();
  };

  return (
    <div className="flex w-full flex-col justify-center px-0 sm:px-4">
      <PDFExport
        ref={pdfExportComponent}
        paperSize={"A5"}
        fileName={`card_${regNo}`}
        title={name}
        author={'mansour_tech'}
      >
        <div className="bg-white rounded-lg shadow-lg">
          <div className="select-none">
            <div className="overflow-hidden">
              <div className="px-4 py-5 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex-shrink-0">
                    <Image
                      src={insarf_blue}
                      className="w-[160px] select-none"
                      alt="insarf logo"
                      priority
                    />
                  </div>
                  <div className="md:ml-0">
                    <Image
                      src={require(`@/public/qr/${regNo}.png`)}
                      className="w-[80px] h-[80px] select-none"
                      alt="qr"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-bolder text-gray-500">
                      الاسم :
                    </dt>
                    <dd className="mt-1 text-sm text-gray-500 font-bolder">
                      {name}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-bolder text-gray-500">
                      رقم القيد :
                    </dt>
                    <dd className="mt-1 text-sm text-red-500 font-bolder">
                      {regNo}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-bolder text-gray-500">
                      القسم :
                    </dt>
                    <dd className="mt-1 text-sm text-blue-700 font-sans">
                      {classification}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-bolder text-gray-500">
                      المستوى الدراسي :
                    </dt>
                    <dd className="mt-1 text-sm text-gray-500 font-sans">
                      {level}
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-bolder text-gray-500">تصدير</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      <ul
                        role="list"
                        className="border border-gray-200 rounded-md divide-y divide-gray-200"
                      >
                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                          <div className="w-0 flex-1 flex items-center">
                            {/* <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                            <span className="ml-2 flex-1 w-0 truncate">
                              card_{regNo}.pdf
                            </span>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <p
                              onClick={handleExportWithComponent}
                              className="font-bolder text-blue-700 hover:text-blue-500"
                            >
                              طباعة
                            </p>
                          </div>
                        </li>
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </PDFExport>
    </div>
  );
}

/* 
    <div dir="rtl" className="text-right mb-8">
        <p className="uppercase font-bolder w-full h-10 bg-blue-700 text-blue-50 leading-2 p-2"></p>
        <p className="uppercase w-full font-bolder h-10 bg-[#fff] text-blue-700 leading-2 p-2">
            <span className="text-red-500 font-bolder"> </span>
        </p>
        <p className="uppercase w-full font-bolder h-10 bg-blue-700 text-blue-50  leading-2 p-2">
            <span className="text-blue-50 font-bolder">  </span>
        </p>
        <p className="uppercase w-full font-bolder h-10 bg-[#fff] text-blue-700 leading-2 p-2">
            <span className="text-blue-700 font-bolder">  </span>
        </p>
        <p className="uppercase w-full font-bolder h-10 bg-blue-700 text-blue-50 leading-2 p-2">
            <span className="text-blue-50 font-bolder font-sans">  </span>
        </p>
    </div>
*/
