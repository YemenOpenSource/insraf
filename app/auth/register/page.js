"use client";
import tw from "tailwind-styled-components";
import Link from "next/link";
import { AddUser } from "react-iconly";
import { useState } from "react";
import { Register } from "@/components";

const Button = tw.button`
  w-full mb-5 flex justify-center py-2 px-4 border border-transparent 
  rounded-md shadow-sm text-sm font-medium font-bolder text-white bg-blue-700 hover:bg-blue-600 
  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
`;

export default function Component() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  return (
    <div className="max-w-7xl mx-auto p-2 sm:p-4">
      <div className="max-w-3xl mx-auto sm:p-3">
        <div className="bg-white overflow-hidden shadow divide-gray-200">
          <div className="px-4 py-5 sm:px-6">
            <div className="bg-blue-700 w-[100px] h-[100px] rounded-full leading-[100px] text-center mx-auto flex justify-center items-center">
              <AddUser
                primaryColor='white'
                stroke='regular'
                size="xlarge"
              />
            </div>
          </div>
          <Register name={setName} email={setEmail} password={setPassword} />
          <div className="sm:mx-auto sm:w-full sm:max-w-md p-3 sm:p-0">
            <Button
            >
              التسجيل
            </Button>
            <div className="text-center text-sm text-gray-600 mb-10 font-bolder">
              <div className="relative mb-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center">
                  <span className="px-3 bg-white text-md font-medium font-bolder text-gray-700">أو{' '}</span>
                </div>
              </div>
              <Link href="/auth/login" className="font-medium text-blue-600 hover:text-indigo-500 text-[16px]">
                تسجيل الدخول
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}