import React from "react";
import Image from "next/image";
import insarf_gray from "@/public/insarf_gray.svg";
import { SubHeader } from "@/components";

export default function layout({ children }) {
    return (
        <React.Fragment>
            <SubHeader />
            <div className="flex justify-center overflow-hidden">
                {children}
            </div>
            <div className="flex justify-center">
                <Image src={insarf_gray} className="w-[160px] select-none m-4" alt="insarf logo" priority />
            </div>
        </React.Fragment>
    )
}
