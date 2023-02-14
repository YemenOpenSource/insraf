"use client";
import Image from "next/image";
import avater from "@/public/images/avater.svg";
import { Setting } from "react-iconly";

export default function Avater() {
    return (
        <div className="flex justify-center relative bg-white rounded shadow md:col-start-10 md:col-end-13 order-1 md:order-2 mb-4">
            <Image src={avater} className="w-[180px] h-[180px] select-none" alt="qr" priority />
            <div className="bg-blue-700 select-none absolute w-full h-full rounded opacity-[0.9] text-white text-center leading-3 flex flex-col justify-center items-center font-bolder">
                <Setting
                    style={{ marginBottom: 6 }}
                    primaryColor='white'
                    stroke='bold'
                    size="xlarge"
                />
                الإعدادات
            </div>
        </div>
    )
}
