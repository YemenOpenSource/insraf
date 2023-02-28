"use client";
import tw from "tailwind-styled-components";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import { useState, useEffect } from "react";
import { Login, Alert } from "@/components";
import { LOGIN } from "@/hooks/mutations";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { User } from "react-iconly";

// tailwind-styled-components
const Container = tw.div`max-w-7xl mx-auto p-2 sm:p-4`;
const Card = tw.div`max-w-3xl mx-auto sm:p-3`;
const Page = tw.div`bg-white overflow-hidden shadow divide-gray-200`;
const Button = tw.button`
  w-full mb-5 flex justify-center py-2 px-4 border border-transparent 
  rounded-md shadow-sm text-sm font-medium font-bolder text-white bg-blue-700 hover:bg-blue-600 
  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
`;

export default function SigIn() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [alert, setAlert] = useState()
  const router = useRouter();

  const [login] = useMutation(LOGIN, {
    onCompleted: (data) => {
      setCookie("token", String(data.login.token))
      setCookie("userId", data.login.userId)
      router.push("/auth/success")
    },
    onError: (error) => setAlert(error.message),
  });
 
  useEffect(() => {
    if(alert) setAlert(false)
  }, [email, password])

  return (
    <Container>
      <Card>
        <Page>
          <div className="px-4 py-5 sm:px-6">
            {alert && (
              <Alert
                title="خطأ"
                textColor="text-red-50"
                bgColor="bg-red-500"
                body={alert}
              />
            )}
            <div className="bg-blue-700 w-[100px] h-[100px] rounded-full leading-[100px] text-center mx-auto flex justify-center items-center">
              <User
                primaryColor='white'
                stroke='regular'
                size="xlarge"
              />
            </div>
          </div>
          <Login email={setEmail} password={setPassword} />
          <div className="sm:mx-auto sm:w-full sm:max-w-md p-3 sm:p-0">
            <Button
              onClick={() =>
                login({
                  variables: {
                    email: email,
                    password: password,
                  },
                })
              }
            >
              تسجيل الدخول
            </Button>
            <Register />
          </div>
        </Page>
      </Card>
    </Container>
  )
}


function Register() {
  return (
    <div className="text-center text-sm text-gray-600 mb-10 font-bolder">
      <div className="relative mb-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="px-3 bg-white text-md font-medium font-bolder text-gray-700">أو{' '}</span>
        </div>
      </div>
      <Link href="/auth/register" className="font-medium text-blue-600 hover:text-indigo-500 text-[16px]">
        إنشاء حساب حديد
      </Link>
    </div>
  )
}