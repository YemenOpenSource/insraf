"use client";
import tw from "tailwind-styled-components";
import Image from "next/image";
import insarf_icon from "@/public/insarf_icon.svg";
import { useState } from "react";
import { Login } from "@/components";

const Button = tw.button`
  w-full my-10 mb-20 flex justify-center py-2 px-4 border border-transparent 
  rounded-md shadow-sm text-sm font-medium font-bolder text-white bg-blue-700 hover:bg-blue-600 
  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
`;

export default function Component() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 sm:my-20">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white overflow-hidden shadow divide-y divide-gray-200">
          <div className="px-4 py-5 sm:px-6">
            <Image src={insarf_icon} className="w-[100px] select-none mx-auto" alt="insarf logo" priority />
          </div>
          <Login />
          <div className="sm:mx-auto sm:w-full sm:max-w-md p-3 sm:p-0">
            <Button
            >
              تسجيل الدخول
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}