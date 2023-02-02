import React from 'react'

export default function page() {
  return (
    <div className="m-auto p-2 sm:p-6 flex flex-col items-center w-screen justify-center">
      <div className="flex w-full flex-col justify-center mt-3 bg-blue-700 shadow-md rounded-sm p-4">
        <div className="text-blue-50">
          <h1 className="font-bolder">
            ملخص لقاعدة البيانات وفقاً لبيانات التالية:
          </h1>
          <li className="mr-4">عدد الطلاب المضافين</li>
          <li className="mr-4">متوسط العام لحضور</li>
          <li className="mr-4">متوسط العام لغياب</li>
          <li className="mr-4">التصنيفات</li>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center mt-3 bg-white shadow-md rounded-sm p-4">
        <div className="h-[140px]">
          table
        </div>
      </div>
    </div>
  )
}
