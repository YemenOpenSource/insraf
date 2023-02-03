import React from 'react'

export default function page() {
  return (
    <div className="m-auto p-2 sm:p-6 flex flex-col items-center w-screen justify-center">
      <div className="flex w-full flex-col justify-center bg-[#fec63d] shadow-md rounded-sm p-4">
        <div className="text-[#614c19]">
          <h1 className="font-bolder">
            بعض العمليات الدي تسهل عملك:
          </h1>
          <li className="mr-4">تصفح الطلاب وفقاً لقسم الطالب</li>
          <li className="mr-4">عرض جميع تفاصيل الطالب</li>
          <li className="mr-4">سهولة الوصول لطلاب من خلال البحث</li>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center mt-3 bg-white shadow-md rounded-sm p-4">
        <div className="h-[140px]">
          <h1>لاتوجد بيانات حالياً</h1>
        </div>
      </div>
    </div>
  )
}
