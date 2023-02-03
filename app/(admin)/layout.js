import React from "react";
import Image from "next/image";
import insarf_gray from "@/public/insarf_gray.svg";
import { SubHeader } from "@/components";

export default function layout({ children }) {
    return (
        <React.Fragment>
            <SubHeader />
            {children}
            <div className="flex justify-center w-screen">
                <Image src={insarf_gray} className="w-[230px] select-none m-4" alt="insarf logo" priority />
            </div>
        </React.Fragment>
    )
}
