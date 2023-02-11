import React from "react";
import { ShowStudent } from "@/components";

export default function page() {
    const data = {
        name: "منصور أحمد منصور حيدرة",
        regNo: "18600",
        department: "الإكترونات وأتصالات",
        level: "الخامس",
        classification: "B5EC"
    }
    return (
        <React.Fragment>
            <div className="m-auto p-2 sm:p-4 flex flex-col items-center lg:w-2/4 w-screen justify-center">
                <ShowStudent
                    name={data.name}
                    regNo={data.regNo}
                    department={data.department}
                    level={data.level}
                    classification={data.classification}
                />
                <div className="flex w-full flex-col justify-center px-0 sm:px-4 mt-4">
                    <div className="p-4 mb-4 text-white rounded-lg bg-blue-700">
                        <div className="flex items-center">
                            <h3 className="text-lg font-bolder text-blue-50">ملاحظة</h3>
                        </div>
                        <div className="mt-2 mb-4 text-sm text-blue-50">
                            <li>عدد الحضور إذا كان ثلاث إيام او إقل يعتبر مستنهج</li>
                            <li> من خلال حالة توضيح حالة الطاللب إذا كان مستهنج او بعذر</li>
                        </div>
                    </div>
                    <table className="w-full text-md text-left text-gray-500 font-medium">
                        <thead className="text-md font-regular text-gray-600 text-center bg-white rounded-lg shadow-lg">
                            <tr>
                                <th scope="col" className="px-4 py-3">المادة</th>
                                <th scope="col" className="px-4 py-3">عدد</th>
                                <th scope="col" className="px-4 py-3">حالة</th>
                            </tr>
                        </thead>
                        <tbody className="text-md font-regular text-gray-600 text-center">
                            <tr>
                                <th scope="col" className="px-4 py-3 font-sans text-right"></th>
                                <th scope="col" className="px-4 py-3 font-sans text-right"></th>
                            </tr>
                        </tbody>
                        <tfoot className="text-md font-regular text-gray-600 text-center bg-white rounded-lg shadow-lg">
                            <tr>
                                <th scope="col" className="px-4 py-3 font-sans text-right">Computer Network</th>
                                <th scope="col" className="px-4 py-3 text-blue-700 font-sans">12</th>
                                <th scope="col" className="px-4 py-3 text-green-700 font-sans">طبيعي</th>
                            </tr>
                            <tr>
                                <th scope="col" className="px-4 py-3 font-sans text-right">Elective I: Microcontroller</th>
                                <th scope="col" className="px-4 py-3 text-blue-700 font-sans">3</th>
                                <th scope="col" className="px-4 py-3 text-red-700 font-sans">مستهنج</th>
                            </tr>
                            <tr>
                                <th scope="col" className="px-4 py-3 font-sans text-right">Infromation</th>
                                <th scope="col" className="px-4 py-3 text-blue-700 font-sans">3</th>
                                <th scope="col" className="px-4 py-3 text-blue-700 font-sans">بعذر</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </React.Fragment>
    )
}
