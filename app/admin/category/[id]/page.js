"use client";
import Link from "next/link";
import { Show } from "react-iconly";

export default function page() {
    return (
        <div className="m-auto p-2 sm:p-4 flex flex-col items-center w-screen justify-center">
            <div className="flex w-full flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 selection:bg-blue-700 selection:text-white">
                    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow text-center">
                        <h5 className="text-2xl font-bolder tracking-tight text-gray-900 mb-3">المستوى الأول</h5>
                        <Link
                            href={`/category`}
                        >
                            <button className="inline-flex items-center font-bolder bg-blue-700 selection:bg-blue-50 selection:text-blue-900 px-3 py-2 text-sm font-medium text-center text-white hover:bg-blue-800">
                                <Show
                                    style={{ marginLeft: 6 }}
                                    primaryColor='white'
                                    stroke='bold'
                                    size="medium"
                                />
                                عـرض
                            </button>
                        </Link>
                    </div>
                    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow text-center">
                        <h5 className="text-2xl font-bolder tracking-tight text-gray-900 mb-3">المستوى الثاني</h5>
                        <Link
                            href={`/category`}
                        >
                            <button className="inline-flex items-center font-bolder bg-blue-700 selection:bg-blue-50 selection:text-blue-900 px-3 py-2 text-sm font-medium text-center text-white hover:bg-blue-800">
                                <Show
                                    style={{ marginLeft: 6 }}
                                    primaryColor='white'
                                    stroke='bold'
                                    size="medium"
                                />
                                عـرض
                            </button>
                        </Link>
                    </div>
                    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow text-center">
                        <h5 className="text-2xl font-bolder tracking-tight text-gray-900 mb-3">المستوى الثالث</h5>
                        <Link
                            href={`/category`}
                        >
                            <button className="inline-flex items-center font-bolder bg-blue-700 selection:bg-blue-50 selection:text-blue-900 px-3 py-2 text-sm font-medium text-center text-white hover:bg-blue-800">
                                <Show
                                    style={{ marginLeft: 6 }}
                                    primaryColor='white'
                                    stroke='bold'
                                    size="medium"
                                />
                                عـرض
                            </button>
                        </Link>
                    </div>
                    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow text-center">
                        <h5 className="text-2xl font-bolder tracking-tight text-gray-900 mb-3">المستوى الرابع</h5>
                        <Link
                            href={`/category`}
                        >
                            <button className="inline-flex items-center font-bolder bg-blue-700 selection:bg-blue-50 selection:text-blue-900 px-3 py-2 text-sm font-medium text-center text-white hover:bg-blue-800">
                                <Show
                                    style={{ marginLeft: 6 }}
                                    primaryColor='white'
                                    stroke='bold'
                                    size="medium"
                                />
                                عـرض
                            </button>
                        </Link>
                    </div>
                    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow text-center">
                        <h5 className="text-2xl font-bolder tracking-tight text-gray-900 mb-3">المستوى الخامس</h5>
                        <Link
                            href={`/category`}
                        >
                            <button className="inline-flex items-center font-bolder bg-blue-700 selection:bg-blue-50 selection:text-blue-900 px-3 py-2 text-sm font-medium text-center text-white hover:bg-blue-800">
                                <Show
                                    style={{ marginLeft: 6 }}
                                    primaryColor='white'
                                    stroke='bold'
                                    size="medium"
                                />
                                عـرض
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
