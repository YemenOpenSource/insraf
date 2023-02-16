"use client";
import React, { useState } from "react";
import { CreateStudent, Avater, QR } from "@/components";

export default function page() {
    const [data, setData] = useState()
    return (
        <div className="m-auto p-2 sm:p-4 flex flex-col items-center w-screen justify-center">
            <div className="flex w-full flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 selection:bg-blue-700 selection:text-white">
                    <div className="bg-white rounded shadow p-4 md:p-8 md:col-start-1 md:col-end-10 order-2 md:order-1">
                        <CreateStudent data={setData} />
                    </div>
                    <div className="md:col-start-10 md:col-end-13 order-1 md:order-2">
                        <Avater />
                        <QR />
                    </div>
                </div>
            </div>
        </div>
    )
}
