"use client";
import Link from "next/link";
import { Alert, Students, SearchStudents, Container } from "@/components";
import { useState } from "react";
import { Show } from "react-iconly";
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
                textColor="text-[#614c19]"
                bgColor="bg-[#fec63d]"
                body="
                    عرض جميع الطلاب الموجودين في قاعدة البيانات لجميع المستويات,
                    لتصفح الطلاب وفقاً للإقسام يمكنك الإنتقال لصفحة التصنيفات او الضغط على 
                    القسم الموجود في الجدول
                "
            />
            <div className="bg-white shadow-md sm:rounded-lg overflow-hidden">
                <SearchStudents search={setSearch} searchHander={searchHander} />
                <Students>
                    {/* Head Start */}
                    <tr className="border-b text-center">
                        <th scope="row" className="px-4 py-3 font-medium text-blue-700 whitespace-nowrap text-right font-bolder">منصور أحمد منصور حيدرة</th>
                        <td className="px-4 py-3">18600</td>
                        <td className="px-4 py-3 underline text-blue-700 font-bold cursor-pointer">B5EC</td>
                        <td className="px-4 py-3 flex justify-center">
                            <Link href={"/admin/students/1"}>
                                <button className="bg-blue-700 hover:bg-blue-600 selection:bg-blue-50 selection:text-blue-900 text-sm p-3 rounded-sm text-white font-bolder flex justify-center items-center">
                                    <Show
                                        primaryColor='white'
                                        stroke='bold'
                                        size="medium"
                                    />
                                </button>
                            </Link>
                        </td>
                    </tr>
                    {/* Head End */}
                    {/* Head Start */}
                    <tr className="border-b text-center">
                        <th scope="row" className="px-4 py-3 font-medium text-blue-700 whitespace-nowrap text-right font-bolder">اسامة محمد علي أحمد</th>
                        <td className="px-4 py-3">18600</td>
                        <td className="px-4 py-3 underline text-blue-700 font-bold cursor-pointer">B4IT</td>
                        <td className="px-4 py-3 flex justify-center">
                            <Link href={"students/1"}>
                                <button className="bg-blue-700 hover:bg-blue-600 selection:bg-blue-50 selection:text-blue-900 text-sm p-3 rounded-sm text-white font-bolder flex justify-center items-center">
                                    <Show
                                        primaryColor='white'
                                        stroke='bold'
                                        size="medium"
                                    />
                                </button>
                            </Link>
                        </td>
                    </tr>
                    {/* Head End */}
                    {/* Head Start */}
                    <tr className="border-b text-center">
                        <th scope="row" className="px-4 py-3 font-medium text-blue-700 whitespace-nowrap text-right font-bolder">أحمد محمد علي أحمد</th>
                        <td className="px-4 py-3">18600</td>
                        <td className="px-4 py-3 underline text-blue-700 font-bold cursor-pointer">B3E</td>
                        <td className="px-4 py-3 flex justify-center">
                            <Link href={"students/1"}>
                                <button className="bg-blue-700 hover:bg-blue-600 selection:bg-blue-50 selection:text-blue-900 text-sm p-3 rounded-sm text-white font-bolder flex justify-center items-center">
                                    <Show
                                        primaryColor='white'
                                        stroke='bold'
                                        size="medium"
                                    />
                                </button>
                            </Link>
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
