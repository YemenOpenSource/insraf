"use client";
import Image from "next/image";
import avater from "@/public/images/avater.svg";
import qr from "@/public/images/qr.png";
import { EditSquare, Setting } from "react-iconly";

export default function page() {
    return (
        <div className="m-auto p-2 sm:p-4 flex flex-col items-center w-screen justify-center">
            <div className="flex w-full flex-col justify-center md:px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 selection:bg-blue-700 selection:text-white">
                    <div className="bg-white rounded shadow p-4 md:p-8 md:col-start-1 md:col-end-10 order-2 md:order-1">
                        <div className="py-4 md:px-4 mx-auto max-w-2xl">
                            <h2 className="mb-4 text-2xl font-bolder text-blue-700">إضافة طالب</h2>
                            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div className="sm:col-span-2">
                                    <label className="block mb-2 text-sm font-bolder text-gray-900">الاسم</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 font-bolder border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="إدخل اسم الطالب" required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-bolder text-gray-900">الجنس</label>
                                    <select defaultValue="male" id="gender" className="bg-gray-50 font-bolder border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        <option value="male">ذكر</option>
                                        <option value="female">انثى</option>
                                    </select>
                                </div>
                                <div className="w-full">
                                    <label className="block mb-2 text-sm font-bolder text-gray-900">رقم القيد</label>
                                    <input type="text" name="register" id="register" className="bg-gray-50 font-bolder border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="إدخل رقم القيد" required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-bolder text-gray-900">المستوى</label>
                                    <select defaultValue="one" id="level" className="bg-gray-50 font-bolder border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        <option value="one">الاول</option>
                                        <option value="two">الثاني</option>
                                        <option value="three">الثالث</option>
                                        <option value="four">الرابع</option>
                                        <option value="five">الخامس</option>
                                    </select>
                                </div>
                                <div className="w-full">
                                    <label className="block mb-2 text-sm font-bolder text-gray-900">الشعبة</label>
                                    <input type="text" id="block" className="bg-gray-50 font-sans border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="إدخل اسم الشعبة" required="" />
                                </div>
                                <div className="w-full">
                                    <label className="block mb-2 text-sm font-bolder text-gray-900">تاريخ الميلاد</label>
                                    <input type="date" name="date" id="date" className="bg-gray-50 font-bolder border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="إدخل اسم الشعبة" required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-bolder text-gray-900">القسم</label>
                                    <select defaultValue="EC" id="department" className="bg-gray-50 font-bolder border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
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
                                    <input type="password" name="pass" id="pass" className="bg-gray-50 font-bolder border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="رقم البطاقة الشخصية - الجواز السفر - شهادة الميلاد" required="" />
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
                    </div>
                    <div className="md:col-start-10 md:col-end-13 order-1 md:order-2">
                        <div className="flex justify-center relative bg-white rounded shadow md:col-start-10 md:col-end-13 order-1 md:order-2 mb-4">
                            <Image src={avater} className="w-[180px] h-[180px] select-none" alt="qr" priority />
                            <div className="bg-blue-700 select-none absolute w-full h-full rounded opacity-[0.8] text-white text-center leading-3 flex flex-col justify-center items-center">
                                <Setting
                                    primaryColor='white'
                                    stroke='bold'
                                    size="large"
                                />
                                الإعدادات
                            </div>
                        </div>
                        <div className="flex justify-center bg-white rounded shadow p-4 md:p-8 md:col-start-10 md:col-end-13 order-1 md:order-2 font-bolder">
                            <Image src={qr} className="w-[180px] h-[180px] select-none" alt="qr" priority />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
