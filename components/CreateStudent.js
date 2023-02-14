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
        <div className="py-4 md:px-4 mx-auto max-w-2xl">
            <h2 className="mb-4 text-2xl font-bolder text-blue-700">إضافة طالب</h2>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                    <label className="block mb-2 text-sm font-bolder text-gray-900">الاسم</label>
                    <input onChange={({ target }) => setData({ ...data, name: target.value })} type="text" name="name" id="name" className="bg-gray-50 font-bolder border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="إدخل اسم الطالب" required="" />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-bolder text-gray-900">الجنس</label>
                    <select defaultValue="MALE" onChange={({ target }) => setData({ ...data, gender: target.value })} id="gender" className="bg-gray-50 font-bolder border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value="MALE">ذكر</option>
                        <option value="FAMALE">انثى</option>
                    </select>
                </div>
                <div className="w-full">
                    <label className="block mb-2 text-sm font-bolder text-gray-900">رقم القيد</label>
                    <input onChange={({ target }) => setData({ ...data, register: target.value })} type="text" name="register" id="register" className="bg-gray-50 font-bolder border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="إدخل رقم القيد" required="" />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-bolder text-gray-900">المستوى</label>
                    <select defaultValue="one" onChange={({ target }) => setData({ ...data, level: target.value })} id="level" className="bg-gray-50 font-bolder border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value="one">الاول</option>
                        <option value="two">الثاني</option>
                        <option value="three">الثالث</option>
                        <option value="four">الرابع</option>
                        <option value="five">الخامس</option>
                    </select>
                </div>
                <div className="w-full">
                    <label className="block mb-2 text-sm font-bolder text-gray-900">الشعبة</label>
                    <input onChange={({ target }) => setData({ ...data, classification: target.value })} type="text" id="block" className="bg-gray-50 font-sans border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="إدخل اسم الشعبة" required="" />
                </div>
                <div className="w-full">
                    <label className="block mb-2 text-sm font-bolder text-gray-900">تاريخ الميلاد</label>
                    <input onChange={({ target }) => setData({ ...data, date: target.value })} type="date" name="date" id="date" className="bg-gray-50 font-bolder border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="إدخل اسم الشعبة" required="" />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-bolder text-gray-900">القسم</label>
                    <select defaultValue="EC" onChange={({ target }) => setData({ ...data, department: target.value })} id="department" className="bg-gray-50 font-bolder border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value="EC">الإكترونيات وإتصالات</option>
                        <option value="C">مدني</option>
                        <option value="E">كهرباء</option>
                        <option value="IT">تقنية معلومات</option>
                        <option value="M">ميكانيك</option>
                        <option value="P">صناعة وإنتاج</option>
                    </select>
                </div>
                <div className="sm:col-span-2">
                    <label className="block mb-2 text-sm font-bolder text-gray-900">المعرف الشخصي</label>
                    <input onChange={({ target }) => setData({ ...data, password: target.value })} type="password" name="pass" id="pass" className="bg-gray-50 font-bolder border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="رقم البطاقة الشخصية - الجواز السفر - شهادة الميلاد" required="" />
                    <p className="font-bolder text-red-500 mt-2 text-sm selection:bg-red-50 selection:text-red-700">
                        المعرف الشخصي هو كلمة المرور الخاصة بالطالب في التطبيق
                    </p>
                </div>
            </div>
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
    )
}
