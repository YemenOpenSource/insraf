"use client";
import React, { useState, useEffect } from "react";

export default function SearchStudents(props) {
    const [search, setSearch] = useState("")
    const { searchHander } = props;

    useEffect(() => {
        props.search(search)
    }, [search])

    return (
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
                <form className="flex items-center">
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <input onChange={({ target }) => setSearch(target.value)} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:focus:ring-primary-500 dark:focus:border-primary-500 font-bolder" placeholder="البحث عن الطلاب" required="" />
                    </div>
                </form>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <div className="flex items-center space-x-3 w-full md:w-auto">
                    <button className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-bolder text-white focus:outline-none bg-blue-700 rounded-lg"
                        onClick={() => searchHander()}
                    >
                        بحث
                    </button>
                </div>
            </div>
        </div>
    )
}
