"use client";
import React, { useState, useEffect } from "react";
import { EditSquare } from "react-iconly";

export default function CreateStudent(props) {
    const [data, setData] = useState({
        name: "",
        gender: "MALE",
        register: "",
        level: "one",
        classification: "",
        date: "",
        department: "EC",
        password: ""
    })

    useEffect(() => {
        props.data(data)
    }, [data])

    return (
        <form dir="rtl" className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div>
                    <div>
                        <h3 className="text-lg leading-6 font-bolder text-gray-900">معلومات الشخصية</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            إدخل المعلومات الشخصية لطالب
                        </p>
                    </div>

                    <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">

                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="username" className="block text-sm font-bolder text-gray-700 sm:mt-px sm:pt-2">
                                الاسم
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <div className="max-w-lg flex rounded-md shadow-sm font-bolder">
                                    <input onChange={({ target }) => setData({ ...data, name: target.value })} type="text" name="name" id="name" className="bg-white font-bolder border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="إدخل اسم الطالب" required="" />
                                </div>
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="username" className="block text-sm font-bolder text-gray-700 sm:mt-px sm:pt-2">
                                تاريخ الميلاد
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <div className="max-w-lg flex rounded-md shadow-sm font-bolder">
                                    <input onChange={({ target }) => setData({ ...data, date: target.value })} type="date" name="date" id="date" className="bg-gray-50 font-bolder text-right border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="إدخل اسم الشعبة" required="" />
                                </div>
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="about" className="block text-sm font-bolder text-gray-700 sm:mt-px sm:pt-2">
                                الجنس
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <select defaultValue="MALE" onChange={({ target }) => setData({ ...data, gender: target.value })} id="gender" className="bg-white font-bolder border border-gray-300 text-gray-900 text-sm rounded-lg block w-2/4 p-2.5 text-right">
                                    <option value="MALE">ذكر</option>
                                    <option value="FAMALE">انثى</option>
                                </select>
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="cover-photo" className="block text-sm font-bolder text-gray-700 sm:mt-px sm:pt-2">
                                الصورة الشخصية
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <svg
                                            className="mx-auto h-12 w-12 text-gray-400"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer bg-white rounded-md font-bolder text-blue-700 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                            >
                                                <span>إرفع الصورة</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pr-1">أو قم بالسحب</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 1MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                    <div>
                        <h3 className="text-lg leading-6 font-bolder text-gray-900">معلومات الإكاديمية</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">إدخل المعلومات الإكاديمية لطالب</p>
                    </div>
                    <div className="space-y-6 sm:space-y-5">
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="register" className="block text-sm font-bolder text-gray-700 sm:mt-px sm:pt-2">
                                رقم القيد
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <div className="max-w-lg flex rounded-md shadow-sm font-bolder">
                                    <input onChange={({ target }) => setData({ ...data, register: target.value })} type="text" name="register" id="register" className="bg-white font-bolder border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="إدخل رقم القيد" required="" />
                                </div>
                            </div>
                        </div>


                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="username" className="block text-sm font-bolder text-gray-700 sm:mt-px sm:pt-2">
                                الشعبة
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <div className="max-w-lg flex rounded-md shadow-sm font-bolder">
                                    <input onChange={({ target }) => setData({ ...data, classification: target.value })} type="text" name="classification" id="classification" className="bg-white font-bolder border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="إدخل اسم الشعبة" required="" />
                                </div>
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="about" className="block text-sm font-bolder text-gray-700 sm:mt-px sm:pt-2">
                                المستوى
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <select defaultValue="one" onChange={({ target }) => setData({ ...data, level: target.value })} className="bg-white font-bolder border border-gray-300 text-gray-900 text-sm rounded-lg block w-2/4 p-2.5 text-right">
                                    <option value="one">الاول</option>
                                    <option value="two">الثاني</option>
                                    <option value="three">الثالث</option>
                                    <option value="four">الرابع</option>
                                    <option value="five">الخامس</option>
                                </select>
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="EC" className="block text-sm font-bolder text-gray-700 sm:mt-px sm:pt-2">
                                القسم
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <select defaultValue="EC" onChange={({ target }) => setData({ ...data, department: target.value })} className="bg-white font-bolder border border-gray-300 text-gray-900 text-sm rounded-lg block w-2/4 p-2.5 text-right">
                                    <option value="EC">الإكترونيات وإتصالات</option>
                                    <option value="C">مدني</option>
                                    <option value="E">كهرباء</option>
                                    <option value="IT">تقنية معلومات</option>
                                    <option value="M">ميكانيك</option>
                                    <option value="P">صناعة وإنتاج</option>
                                </select>
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="password" className="block text-sm font-bolder text-gray-700 sm:mt-px sm:pt-2">
                                المعرف الشخصي
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <div className="max-w-lg flex rounded-md shadow-sm font-bolder">
                                    <input onChange={({ target }) => setData({ ...data, password: target.value })} type="password" name="password" id="password" className="bg-white font-bolder border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="رقم البطاقة الشخصية - الجواز السفر - شهادة الميلاد" required="" />
                                </div>
                                <p className="font-bolder text-red-500 mt-2 text-sm selection:bg-red-50 selection:text-red-700">
                                    المعرف الشخصي هو كلمة المرور الخاصة بالطالب في التطبيق
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-5">
                <div className="flex justify-end">
                    <button className="bg-blue-700 hover:bg-blue-600 selection:bg-blue-50 selection:text-blue-900 text-sm p-3 rounded-sm text-white sm:ml-0 font-bolder flex justify-center items-center mt-4">
                        <EditSquare
                            style={{ marginLeft: 6 }}
                            primaryColor='white'
                            stroke='bold'
                            size="medium"
                        />
                        إنشـاء
                    </button>
                </div>
            </div>
        </form>
    )
}