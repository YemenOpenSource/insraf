"use client";
import { useState } from "react";

export default function Level({ levelhandler, departments, children }) {
  const [level, setLevel] = useState();
  const [departmentId, setDepartmentId] = useState();

  return (
    <div className="mt-4 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-6 sm:px-0 mr-0 md:mr-1 font-bolder">
            <h3 className="text-base font-bolder leading-6 text-gray-900">
              إضافة مستوى جديد
            </h3>
            <p className="mt-1 text-sm font-regular text-gray-700">
              إضافة مستوى جديد من خلال الاستمارة التالية
            </p>
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
                    المستوى
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    placeholder="قم بإدخال المستوى"
                    className="mt-2 p-3 font-regular block w-full rounded-md border-0 py-1.5 text-blue-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6 outline-blue-700"
                    onChange={({ target }) => setLevel(target.value)}
                  />
                  <p className="mt-2 text-sm text-blue-700 font-regular">
                    يجب إن يكون المستوى بهذا الشكل :{" "}
                    <span className="font-sans font-bold">B1EC</span>
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium font-bolder leading-6 text-gray-900">
                  القسم
                </label>
                <div className="mt-2 flex flex-col justify-center rounded-md">
                  <select
                    onChange={({ target }) => setDepartmentId(target.value)}
                    className="mt-1 p-3 block w-full font-regular rounded-md border-0 text-blue-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:py-1.5 sm:text-sm sm:leading-6 outline-blue-700"
                  >
                    <option>أختر القسم العلمي</option>
                    {departments.map((department) => (
                      <option key={department.id} value={Number(department.id)}>
                        {department.name}
                      </option>
                    ))}
                  </select>
                  <p className="mt-2 text-sm text-gray-500 font-regular">
                    القسم العلمي الذي ينتمي له هذا المستوى
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-left sm:px-6">
              <button
                type="submit"
                className="inline-flex font-bolder justify-center rounded-md bg-blue-700 py-2 px-3 text-sm text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                onClick={() => {
                  levelhandler({
                    variables: {
                      name: level,
                      departmentId: Number(departmentId),
                    },
                  })
                  setLevel()
                  setDepartmentId()
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
