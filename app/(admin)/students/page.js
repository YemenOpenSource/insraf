"use client"
import { Table, HeadTable, RowTable } from "@/ui/Table";

export default function page() {

    return (
        <div className="m-auto p-2 sm:p-6 flex flex-col items-center w-screen justify-center">
            <div className="flex w-full flex-col justify-center p-4 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                    <table lassName="text-center ">
                        <tbody>
                            <tr className="text-gray-500 text-center font-bolder border-b border-gray-100">
                                <th>الاسم</th>
                                <th>رقم القيد</th>
                                <th>القسم</th>
                                <th>الإعدادات</th>
                            </tr>
                            <tr className="text-gray-600 text-center font-normalfont-normal mt-6">
                                <th>منصور أحمد منصور</th>
                                <th>18600</th>
                                <th>B5EC</th>
                                <th>
                                    <button className="bg-gray-500 text-sm p-3 rounded-sm text-gray-800 ml-4 sm:ml-0">
                                        إضافة طالب
                                    </button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

    )
}
