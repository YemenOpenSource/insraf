import { Container } from "@/components";
export default function Example() {
  return (
    <Container sm={1} md={1} lg={1} gap={0}>
      <div className="bg-white select-none rounded-lg shadow-sm">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-bolder text-blue-700 tracking-wide uppercase mb-3">مرحباً بك 🚀👋</h2>
            <p className="mt-1 text-3xl font-bolder text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl">
              برنامج إدارة الطلاب
            </p>
            <p className="max-w-xl mt-3 mx-auto text-sm text-gray-500 font-regular">
              لوحة تحكم تسمح لك با إدارة الطلاب من إضافة وعرض جميع التفاصيل الخاصة بالطلاب
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
