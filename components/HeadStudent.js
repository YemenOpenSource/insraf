"use client";
import { Delete, Edit } from "react-iconly";

export default function HeadStudent() {
    return (
        <div className="flex w-full flex-col justify-center px-0 sm:px-4 mb-4">
            <div className="bg-white rounded-lg shadow-lg h-20 flex justify-evenly items-center select-none">
                <button className="bg-blue-700 hover:bg-blue-600 selection:bg-blue-50 selection:text-blue-900 text-sm p-3 rounded-sm text-white sm:ml-0 font-bolder flex justify-center items-center">
                    <Edit
                        style={{ marginLeft: 6 }}
                        primaryColor='white'
                        stroke='bold'
                        size="medium"
                    />
                    تعديل
                </button>
                <button className="bg-red-600 outline-none hover:bg-red-500 selection:bg-red-50 selection:text-red-900 text-sm p-3 rounded-sm text-white sm:ml-0 font-bolder flex justify-center items-center">
                    <Delete
                        style={{ marginLeft: 6 }}
                        primaryColor='white'
                        stroke='bold'
                        size="medium"
                    />
                    حذف
                </button>
            </div>
        </div>
    )
}
