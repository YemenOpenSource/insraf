"use client";
import Link from "next/link";
import { Show } from "react-iconly";
export default function Level({ params }) {
    return (
        <div className="m-auto p-2 sm:p-4 flex flex-col items-center w-screen justify-center">
            <div className="flex w-full flex-col justify-center">
                <div className={`grid grid-cols-12 bg-white rounded shadow p-4`}>
                    <div className="col-start-1 col-end-13">
                        <h1 className="font-bolder text-center text-4xl">المستويات</h1>
                        <p className="font-regular text-center mt-1">إضغط على رجوع لعرض المستويات</p>
                        <Link
                            href={`/admin/category/${params?.id}`}
                        >
                            <button className="mt-4 m-auto flex justify-center items-center font-bolder bg-blue-700 selection:bg-blue-50 selection:text-blue-900 px-3 py-2 text-sm font-medium text-center text-white hover:bg-blue-800">
                                <Show
                                    style={{ marginLeft: 6 }}
                                    primaryColor='white'
                                    stroke='bold'
                                    size="medium"
                                />
                                رجوع
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}