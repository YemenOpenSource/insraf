import Image from "next/image";
import avater from "@/public/images/avater.png";
import qr from "@/public/images/qr.png";

export default function page() {
    return (

        <div className="m-auto p-2 sm:p-4 flex flex-col items-center w-screen justify-center">
            <div className="flex w-full flex-col justify-center px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                    <div className="bg-white rounded shadow p-4 md:p-8 md:col-start-1 md:col-end-10 order-2 md:order-1">
                        <div className="py-8 md:px-4 mx-auto max-w-2xl lg:py-4">
                            <h2 className="mb-4 text-xl font-bolder text-blue-700">إضافة طالب</h2>
                            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div className="sm:col-span-2">
                                    <label className="block mb-2 text-sm font-bolder text-gray-900">الاسم</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="إدخل اسم الطالب" required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-bolder text-gray-900">الجنس</label>
                                    <select defaultValue="male" id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                        <option value="male">ذكر</option>
                                        <option value="female">انثى</option>
                                    </select>
                                </div>
                                <div className="w-full">
                                    <label className="block mb-2 text-sm font-bolder text-gray-900">رقم القيد</label>
                                    <input type="text" name="register" id="register" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="إدخل رقم القيد" required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-bolder text-gray-900">المستوى</label>
                                    <select defaultValue="one" id="level" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                        <option value="one">الاول</option>
                                        <option value="two">الثاني</option>
                                        <option value="three">الثالث</option>
                                        <option value="four">الرابع</option>
                                        <option value="five">الخامس</option>
                                    </select>
                                </div>
                                <div className="w-full">
                                    <label className="block mb-2 text-sm font-bolder text-gray-900">الشعبة</label>
                                    <input type="text" id="block" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="إدخل اسم الشعبة" required="" />
                                </div>
                                <div className="w-full">
                                    <label className="block mb-2 text-sm font-bolder text-gray-900">تاريخ الميلاد</label>
                                    <input type="date" name="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="إدخل اسم الشعبة" required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-bolder text-gray-900">القسم</label>
                                    <select defaultValue="EC" id="department" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
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
                                    <input type="password" name="pass" id="pass" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="رقم البطاقة الشخصية - الجواز السفر - شهادة الميلاد" required="" />
                                </div>
                            </div>
                            <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-bolder text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                                Add product
                            </button>
                        </div>
                    </div>
                    <div className="md:col-start-10 md:col-end-13 order-1 md:order-2">
                        <div className="bg-white rounded shadow p-4 md:p-8 md:col-start-10 md:col-end-13 order-1 md:order-2 mb-4">
                            <Image src={avater} className="w-[80px] h-[80px] select-none" alt="qr" priority />
                        </div>
                        <div className="bg-white rounded shadow p-4 md:p-8 md:col-start-10 md:col-end-13 order-1 md:order-2">
                            <Image src={qr} className="w-[80px] h-[80px] select-none" alt="qr" priority />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
