"use client";
import { Filter, Show } from "react-iconly";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Category({
    id,
    name,
    description
}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    return (
        <div ref={dropdownRef} className="p-6 bg-white border border-gray-200 rounded-lg shadow text-center">
            <h5 className="text-2xl font-bolder tracking-tight text-gray-900">{name}</h5>
            <p className="mb-3 font-normal text-gray-700">{description}</p>
            <button className="inline-flex items-center font-bolder bg-blue-700 selection:bg-blue-50 selection:text-blue-900 px-3 py-2 text-sm font-medium text-center text-white hover:bg-blue-800">
                <Show
                    style={{ marginLeft: 6 }}
                    primaryColor='white'
                    stroke='bold'
                    size="medium"
                />
                عـرض
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center font-bolder bg-blue-700 selection:bg-blue-50 selection:text-blue-900 px-3 py-2 text-sm font-medium text-center text-white hover:bg-blue-800 mx-4">
                <Filter
                    primaryColor='white'
                    stroke='bold'
                    size="medium"
                />
            </button>
            <div className="flex justify-center relative">
                {isOpen && (
                    <div className="bg-gray-50 border divide-y divide-gray-100 rounded-lg shadow-sm w-44 absolute top-0 mt-2">
                        <ul className="py-2 text-sm font-bolder text-gray-700 text-right">
                            <li>
                                <Link className="block px-4 py-2 hover:bg-gray-100"
                                    href={`/category/${id}`}
                                >
                                    تعديل
                                </Link>
                            </li>
                            <li>
                                <p className="block px-4 py-2 text-red-700 hover:bg-gray-100">حذف</p>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}
