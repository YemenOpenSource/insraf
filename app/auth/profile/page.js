"use client";
import tw from "tailwind-styled-components";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { GET_USER } from "@/hooks/queries";
import { getCookie } from "cookies-next";
import { User, ArrowRightSquare } from "react-iconly";

// tailwind-styled-components
const Container = tw.div`max-w-7xl mx-auto p-2 sm:p-4`;
const Card = tw.div`max-w-3xl mx-auto sm:p-3`;
const Page = tw.div`bg-white overflow-hidden shadow divide-gray-200`;
const Button = tw.button`
  w-full mb-5 flex justify-center py-2 px-4 border border-transparent 
  rounded-md shadow-sm text-sm font-medium font-bolder text-white bg-blue-700 hover:bg-blue-600 
  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-2 items-center
`;

export default function Profile() {
  const id = getCookie("userId")
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: Number(id) },
  });

  if (loading) return;
  if (error) return `Error! ${error}`;
  return (
    <Container>
      <Card>
        <Page>
          <div className="px-4 py-5 sm:px-6 select-none">
            <div className="bg-blue-700 w-[100px] h-[100px] rounded-full leading-[100px] text-center mx-auto flex justify-center items-center">
              <User
                primaryColor='white'
                stroke='regular'
                size="xlarge"
              />
            </div>
            <div>
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 text-center mt-4">معلومات الشخصية</h3>
                <p className="mt-1 text-sm text-gray-500 text-center">معلومات الشخصية لمستخدم الحالي</p>
              </div>
              <div className="mt-5 border-t border-gray-200">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">الاسم</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-medium">{data?.user?.name}</dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">البريد الإكتروني</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-medium">{data?.user?.email}</dd>
                  </div>
                  <div className="py-4 sm:py-5">
                    <Link href={"/auth/success"}>
                      <Button
                      >
                        <ArrowRightSquare
                          style={{ marginLeft: 6 }}
                          primaryColor='white'
                          stroke='regular'
                          size="medium"
                        />
                        الرجوع
                      </Button>
                    </Link>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </Page>
      </Card>
    </Container>
  )
}