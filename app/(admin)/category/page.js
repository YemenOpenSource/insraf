"use client";
import clsx from "clsx";
import { Filter, Show } from "react-iconly";
import { useState, useRef } from "react";

export default function page() {
  const [dropdown, setDropDown] = useState(true)
  return (
    <div className="m-auto p-2 sm:p-4 flex flex-col items-center w-screen justify-center">
      <div className="flex w-full flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 selection:bg-blue-700 selection:text-white">

          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow text-center">
            <h5 className="text-2xl font-bolder tracking-tight text-gray-900">هندسة الإكترونيات وإتصالات</h5>
            <p className="mb-3 font-normal text-gray-700">Electronic and Communication Engg</p>
            <button className="inline-flex items-center font-bolder bg-blue-700 selection:bg-blue-50 selection:text-blue-900 px-3 py-2 text-sm font-medium text-center text-white hover:bg-blue-800">
              <Show
                style={{ marginLeft: 6 }}
                primaryColor='white'
                stroke='bold'
                size="medium"
              />
              عـرض
            </button>
            <button onClick={() => setDropDown(!dropdown)} className="inline-flex items-center font-bolder bg-blue-700 selection:bg-blue-50 selection:text-blue-900 px-3 py-2 text-sm font-medium text-center text-white hover:bg-blue-800 mx-4">
              <Filter
                primaryColor='white'
                stroke='bold'
                size="medium"
              />
            </button>
            <div className="flex justify-center relative">
              <div className={clsx("bg-gray-50 border divide-y divide-gray-100 rounded-lg shadow-sm w-44 absolute top-0 mt-2",
                dropdown && "hidden"
              )}>
                <ul className="py-2 text-sm font-bolder text-gray-700 text-right">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">تعديل</a>
                  </li>
                  <li> 
                    <a href="#" className="block px-4 py-2 text-red-700 hover:bg-gray-100">حذف</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow text-center">
            <h5 className="text-2xl font-bolder tracking-tight text-gray-900">هندسة مدني</h5>
            <p className="mb-3 font-normal text-gray-700">Civil Engineering</p>
            <button className="inline-flex items-center font-bolder bg-blue-700 selection:bg-blue-50 selection:text-blue-900 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700rounded-lg hover:bg-blue-800">
              <Show
                style={{ marginLeft: 6 }}
                primaryColor='white'
                stroke='bold'
                size="medium"
              />
              عـرض
            </button>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow text-center">
            <h5 className="text-2xl font-bolder tracking-tight text-gray-900">هندسة معمارية</h5>
            <p className="mb-3 font-normal text-gray-700">Archature Engineering</p>
            <button className="inline-flex items-center font-bolder bg-blue-700 selection:bg-blue-50 selection:text-blue-900 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700rounded-lg hover:bg-blue-800">
              <Show
                style={{ marginLeft: 6 }}
                primaryColor='white'
                stroke='bold'
                size="medium"
              />
              عـرض
            </button>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow text-center">
            <h5 className="text-2xl font-bolder tracking-tight text-gray-900">هندسة كهرباء</h5>
            <p className="mb-3 font-normal text-gray-700">Electrical Engineering</p>
            <button className="inline-flex items-center font-bolder bg-blue-700 selection:bg-blue-50 selection:text-blue-900 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700rounded-lg hover:bg-blue-800">
              <Show
                style={{ marginLeft: 6 }}
                primaryColor='white'
                stroke='bold'
                size="medium"
              />
              عـرض
            </button>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow text-center">
            <h5 className="text-2xl font-bolder tracking-tight text-gray-900">هندسة تقنية معلومات</h5>
            <p className="mb-3 font-normal text-gray-700">Information Techonlogy Engineering</p>
            <button className="inline-flex items-center font-bolder bg-blue-700 selection:bg-blue-50 selection:text-blue-900 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700rounded-lg hover:bg-blue-800">
              <Show
                style={{ marginLeft: 6 }}
                primaryColor='white'
                stroke='bold'
                size="medium"
              />
              عـرض
            </button>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow text-center">
            <h5 className="text-2xl font-bolder tracking-tight text-gray-900">هندسة بحرية</h5>
            <p className="mb-3 font-normal text-gray-700">Maring Engineering</p>
            <button className="inline-flex items-center font-bolder bg-blue-700 selection:bg-blue-50 selection:text-blue-900 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700rounded-lg hover:bg-blue-800">
              <Show
                style={{ marginLeft: 6 }}
                primaryColor='white'
                stroke='bold'
                size="medium"
              />
              عـرض
            </button>
          </div>

        </div>
      </div>
    </div>


  )
}
