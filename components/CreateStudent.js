"use client";
import React, { useState, useEffect } from "react";
import { EditSquare } from "react-iconly";

export default function CreateStudent(props) {
    const [data, setData] = useState({
        name: "",
        gender: "MALE",
        register: "",
        level: 1,
        classification: "",
        date: "",
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
                                <select onChange={({ target }) => setData({ ...data, level: target.value })} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-2/4 p-2.5 text-right font-sans">
                                    {props.levels.map(level => (
                                        <option key={level.id} value={Number(level.id)}>{level.name}</option>
                                    ))}
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