"use client";
import { Container } from "@/components";
import { Logout } from "react-iconly";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function Welcome() {
  const router = useRouter()

  const logout = () => {
    deleteCookie("token")
    deleteCookie("userId")
    return router.push("/")
  }

  return (
    <Container sm={1} md={1} lg={1} gap={0}>
      <div className="bg-white select-none rounded-lg shadow-sm">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-bolder text-blue-700 tracking-wide uppercase mb-3">مرحباً بك في إنصراف 🚀👋</h2>
            <p className="mt-1 text-3xl font-bolder text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl">
              برنامج إدارة الطلاب
            </p>
            <p className="max-w-xl mt-3 mx-auto text-sm text-gray-500 font-regular">
              لوحة تحكم تسمح لك با إدارة الطلاب من إضافة وعرض جميع التفاصيل الخاصة بالطلاب
            </p>
            <button className="mt-4 m-auto flex justify-center items-center font-bolder bg-blue-700 selection:bg-blue-50 selection:text-blue-900 px-3 py-2 text-sm font-medium text-center text-white hover:bg-blue-800"
              onClick={() => logout()}
            >
              <Logout

                style={{ marginLeft: 6 }}
                primaryColor='white'
                stroke='bold'
                size="medium"
              />
              تسجيل خروج
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}
