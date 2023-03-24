"use client";
import { useState } from "react";

export default function Department({ department, children }) {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  return (
    <div>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-6 sm:px-0 mr-0 md:mr-1 font-bolder">
            <h3 className="text-base font-bolder leading-6 text-gray-900">
              إضافة قسم جديد
            </h3>
            <p className="mt-1 text-sm font-regular text-gray-700">
              يجب عند إضافة قسم جديد مع المستوى يجب إتباع التعليمات التالية :
            </p>
            <div className="mt-2 text-sm font-regular text-gray-600">
              <li>قم بإنشاء القسم الدراسي من خلال الاستمارة التالية اولاً</li>
              <li>
                إنتقل الى إضافة المستوى من خلالة تستطيع الربط بين القسم والمستوى
              </li>
            </div>
          </div>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0">
          {children}
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-bolder leading-6 text-gray-900"
                  >
                    اسم القسم
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    placeholder="قم بإدخال اسم القسم"
                    className="mt-2 p-3 font-regular block w-full rounded-md border-0 py-1.5 text-blue-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6 outline-blue-700"
                    onChange={({ target }) => setName(target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium font-bolder leading-6 text-gray-900">
                  الوصف
                </label>
                <div className="mt-2 flex flex-col justify-center rounded-md">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="mt-1 p-3 block w-full font-regular rounded-md border-0 text-blue-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:py-1.5 sm:text-sm sm:leading-6 outline-blue-700"
                    placeholder="قم بإدخال وصف القسم"
                    defaultValue={""}
                    onChange={({ target }) => setDescription(target.value)}
                  />
                  <p className="mt-2 text-sm text-gray-500 font-regular">
                    يجب إن يكون وصف القسم بالإنجليزي{" "}
                    <span className="text-red-600 font-bolder">*</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-left sm:px-6">
              <button
                type="submit"
                className="inline-flex font-bolder justify-center rounded-md bg-blue-700 py-2 px-3 text-sm text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                onClick={() => {
                  department({
                    variables: {
                      name,
                      description,
                    },
                  });
                  setName();
                  setDescription();
                }}
              >
                حفظ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
