"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowPathIcon,
  CalendarIcon,
  TruckIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { useQuery } from "@apollo/client";
import { ATTENDANCE_QUERY } from "@/hooks/queries";

const perks = [
  {
    name: "تحليل وقت الدخول والخروج",
    description: "التحليل",
    icon: CalendarIcon,
  },
  {
    name: "المزامنة تلقائياً لجميع الطلاب",
    description: "المزامنة",
    icon: ArrowPathIcon,
  },
  {
    name: "الوصول السريع للطلاب",
    description: "سريع",
    icon: TruckIcon,
  },
];

export default function page() {
  const [search, setSearch] = useState("");

  const { loading, error, data } = useQuery(ATTENDANCE_QUERY, {
    variables: { contains: search },
  });

  return (
    <div className="flex flex-col w-screen h-full px-2 sm:px-4 select-none">
      <div className="flex flex-auto flex-col bg-white rounded-md shadow mt-2 mb-4">
        <div className="mx-auto text-center px-4 mt-8 mb-4">
          <h2 className="text-3xl font-bold font-bolder tracking-tight text-gray-900 sm:text-4xl">
            صفحة البحث
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-lg leading-8 text-gray-600 font-regular">
            صفحة عرض تفاصيل الحضور 🎯👌
          </p>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between">
          <div
            dir="ltr"
            className="mx-auto max-w-7xl lg:flex lg:justify-center lg:divide-x lg:divide-y-0 lg:py-2"
          >
            <Search search={setSearch} />
          </div>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between">
          <div
            dir="ltr"
            className="mx-auto max-w-7xl divide-y divide-gray-200 lg:flex lg:justify-center lg:divide-x lg:divide-y-0 lg:py-8"
          >
            {perks.map((perk, perkIdx) => (
              <div key={perkIdx} className="py-8 lg:flex-none lg:py-0">
                <div className="mx-auto flex max-w-md items-center px-4 lg:max-w-none lg:px-8">
                  <div className="mr-4 flex flex-auto flex-col-reverse">
                    <h3 className="font-medium text-gray-900 text-right font-bolder">
                      {perk.name}
                    </h3>
                    <p className="text-sm text-gray-500 text-right font-regular">
                      {perk.description}
                    </p>
                  </div>
                  <perk.icon
                    className="h-8 w-8 flex-shrink-0 text-blue-700"
                    aria-hidden="true"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {data?.searchAttendance[0]?.student?.name == undefined && search && (
        <div className="flex justify-center items-center bg-blue-700 shadow mt-2 p-2">
          <p className="w-2/4 text-center font-bolder mb-2 items-center bg-blue-700 px-2 py-0.5 text-md font-medium text-white">
            لا يوجد نتائج بحث بهذا الاسم {search} !
          </p>
        </div>
      )}
      {data?.searchAttendance[0]?.student?.name && (
        <Fragment>
          <div className="flex justify-center items-center bg-blue-700 shadow mt-2 p-2">
            <p className="w-2/4 text-center font-bolder mb-2 items-center bg-blue-700 px-2 py-0.5 text-md font-medium text-white">
              الكيو آر
            </p>
            <p className="w-2/4 text-center text-md font-bolder mb-2 items-center bg-blue-700 px-2 py-0.5 font-medium text-white">
              اسم الطالب
            </p>
            <p className="w-2/4 text-center font-bolder mb-2 items-center bg-blue-700 px-2 py-0.5 text-md font-medium text-white">
              رقم القيد
            </p>
          </div>
          <div className="flex bg-white shadow p-2 justify-center items-center">
            <p className="w-2/4 text-center text-md font-bolder mb-2 items-center px-2 py-0.5 font-medium text-blue-700">
              <Image
                src={require(`@/public/qr/${data?.searchAttendance[0]?.student?.register}.png`)}
                className="w-[80px] h-[80px] text-center select-none m-auto"
                alt="qr"
                priority
              />
            </p>
            <p className="w-2/4 text-center font-bolder mb-2 items-center px-2 py-0.5 text-md font-medium text-gray-700">
              {data?.searchAttendance[0]?.student?.name}
            </p>
            <p className="w-2/4 text-center font-bolder mb-2 items-center px-2 py-0.5 text-md font-medium text-blue-700">
              {data?.searchAttendance[0]?.student?.register}
            </p>
          </div>
          <br></br>

          <div className="flex justify-center items-center bg-[#fec63d] shadow mt-2 p-2">
            <p className="w-2/4 text-center text-md font-bolder mb-2 items-center bg-[#fec63d] px-2 py-0.5 font-medium text-[#614c19]">
              اسم المادة
            </p>
            <p className="w-2/4 text-center font-bolder mb-2 items-center bg-[#fec63d] px-2 py-0.5 text-md font-medium text-[#614c19]">
              الدخول
            </p>
            <p className="w-2/4 text-center font-bolder mb-2 items-center bg-[#fec63d] px-2 py-0.5 text-md font-medium text-[#614c19]">
              الخروج
            </p>
          </div>
          {data?.searchAttendance.map((attedance) => (
            <div key={attedance.id} className="flex bg-white shadow mt-4 p-2">
              <p className="w-2/4 text-center text-md font-bolder mb-2 items-center px-2 py-0.5 font-medium text-blue-700">
                {attedance.subject}
              </p>
              <p className="w-2/4 text-center font-bolder mb-2 items-center px-2 py-0.5 text-md font-medium text-gray-700">
                {attedance.signInTime}
              </p>
              <p className="w-2/4 text-center font-bolder mb-2 items-center px-2 py-0.5 text-md font-medium text-gray-700">
                {attedance.signOutTime}
              </p>
            </div>
          ))}
          <br></br>
        </Fragment>
      )}
    </div>
  );
}

function Search(props) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    props.search(search);
  }, [search]);

  return (
    <div>
      <div className="mt-2 flex rounded-md px-4">
        <button
          type="button"
          className="relative -mr-px inline-flex items-center gap-x-1.5 rounded-l-md px-3 
          py-2 text-sm font-semibold text-white ring-1 ring-inset ring-blue-700 
          hover:bg-blue-700 bg-blue-700"
        >
          إبحث
        </button>
        <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <UsersIcon className="h-5 w-5 text-blue-700" aria-hidden="true" />
          </div>
          <input
            type="search"
            className="block md:w-96 w-full font-regular rounded-none rounded-r-md outline-none text-right border-0 py-1.5 pr-10 text-gray-900 ring-2 ring-inset ring-blue-700 placeholder:text-blue-700 focus:ring-2 focus:ring-inset focus:ring-blue-700 focus:text-blue-700 sm:text-sm sm:leading-6"
            placeholder="صندوق البحث"
            onChange={({ target }) => setSearch(target.value)}
          />
        </div>
      </div>
    </div>
  );
}
