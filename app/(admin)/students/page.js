"use client";
import { Alert, Students, SearchStudents, Container } from "@/components";
import { useState } from "react";

export default function page() {
    const [search, setSearch] = useState()

    const searchHander = () => {
        return console.log(search)
    }

    return (
        <Container sm={1} md={1} lg={1} gap={0}>
            {/* Alert */}
            <Alert
                title="عرض جميع الطلاب"
                textColor="#614c19"
                bgColor="#fec63d"
                body="
                    عرض جميع الطلاب الموجودين في قاعدة البيانات لجميع المستويات,
                    لتصفح الطلاب وفقاً للإقسام يمكنك الإنتقال لصفحة التصنيفات او الضغط على 
                    القسم الموجود في الجدول
                "
            />
            <div className="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
                <SearchStudents search={setSearch} searchHander={searchHander} />
                <Students>
                    {/* Head Start */}
                    <tr className="border-b text-center">
                        <th scope="row" className="px-4 py-3 font-medium text-blue-700 whitespace-nowrap text-right">منصور أحمد منصور حيدرة</th>
                        <td className="px-4 py-3">18600</td>
                        <td className="px-4 py-3 underline text-blue-700 font-bold cursor-pointer">B5EC</td>
                        <td className="px-4 py-3">
                            <button className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none" type="button">
                                <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                    {/* Head End */}
                    {/* Head Start */}
                    <tr className="border-b text-center">
                        <th scope="row" className="px-4 py-3 font-medium text-blue-700 whitespace-nowrap text-right">اسامة محمد علي أحمد</th>
                        <td className="px-4 py-3">18600</td>
                        <td className="px-4 py-3 underline text-blue-700 font-bold cursor-pointer">B4IT</td>
                        <td className="px-4 py-3">
                            <button className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none" type="button">
                                <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                    {/* Head End */}
                    {/* Head Start */}
                    <tr className="border-b text-center">
                        <th scope="row" className="px-4 py-3 font-medium text-blue-700 whitespace-nowrap text-right">أحمد محمد علي أحمد</th>
                        <td className="px-4 py-3">18600</td>
                        <td className="px-4 py-3 underline text-blue-700 font-bold cursor-pointer">B3E</td>
                        <td className="px-4 py-3">
                            <button className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none" type="button">
                                <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                    {/* Head End */}
                </Students>
                <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4">
                    {/* sub header */}
                </nav>
            </div>
        </Container>

    )
}
