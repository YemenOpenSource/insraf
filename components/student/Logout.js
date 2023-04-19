"use client";

export default function success() {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md p-3 sm:p-0 selection:bg-blue-700 selection:text-white">
      <div className="bg-white sm:rounded-lg overflow-hidden w-full">
        <div className="overflow-x-auto">
          <table className="w-full text-md text-left text-gray-500 font-medium">
            <thead className="text-md font-regular text-gray-600 border-b text-center">
              <tr>
                <th scope="col" className="px-4 py-3">
                  اسم المادة
                </th>
                <th scope="col" className="px-4 py-3">
                  وقت الدخول
                </th>
                <th scope="col" className="px-4 py-3">
                  وقت الخروج
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b text-center">
                <th
                  scope="row"
                  className="px-4 py-3 font-medium text-center text-blue-700 whitespace-nowrap font-bolder"
                >
                  Network
                </th>
                <td className="px-4 py-3 text-center">7:00 ص</td>
                <td className="px-4 py-3 text-blue-700 font-bold text-center">
                  -
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
