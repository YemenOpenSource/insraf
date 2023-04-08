"use client";
import { useQuery } from "@apollo/client";
import { GET_USER } from "@/hooks/queries";
import { getCookie } from "cookies-next";
import { Logout, User } from "react-iconly";
import { Loading } from "@/components";
import { deleteCookie } from "cookies-next";

export default function Profile() {
  const id = getCookie("userId");
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: Number(id) },
  });

  const logoutUser = () => {
    deleteCookie("token");
    deleteCookie("userId");
    return router.push("/");
  };

  if (loading) return <Loading />;
  if (error) return `Error! ${error}`;

  return (
    <div className="px-2 sm:px-4 w-screen">
      <div className="px-4 py-5 sm:px-6 select-none lg:w-2/4 m-auto bg-white overflow-hidden shadow divide-gray-200 mb-4">
        <div className="bg-blue-700 w-[100px] h-[100px] rounded-full leading-[100px] text-center mx-auto flex justify-center items-center">
          <User primaryColor="white" stroke="regular" size="xlarge" />
        </div>
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium font-bolder text-blue-700 text-center mt-4">
              معلومات الشخصية
            </h3>
            <p className="mt-1 text-sm text-gray-500 text-center font-regular">
              معلومات الشخصية لمستخدم الحالي
            </p>
          </div>
          <div className="mt-5 border-t border-gray-200">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500 font-bolder">الاسم</dt>
                <dd className="mt-1 text-sm text-blue-700 sm:mt-0 sm:col-span-2 font-bolder font-medium">
                  {data?.user?.name}
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500 font-bolder">
                  البريد الإكتروني
                </dt>
                <dd className="mt-1 text-sm text-blue-700 sm:mt-0 sm:col-span-2 font-medium">
                  {data?.user?.email}
                </dd>
              </div>
              <div className="py-4 sm:py-5">
                <button
                  className="mt-4 m-auto flex justify-center items-center font-bolder bg-blue-700 selection:bg-blue-50 selection:text-blue-900 px-3 py-2 text-sm font-medium text-center text-white hover:bg-blue-800"
                  onClick={() => logoutUser()}
                >
                  <Logout
                    style={{ marginLeft: 6 }}
                    primaryColor="white"
                    stroke="bold"
                    size="medium"
                  />
                  تسجيل خروج
                </button>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
