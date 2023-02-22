import React from "react";
import { Alert, ShowStudent, Attendance, HeadStudent } from "@/components";

export default function page() {
    const user = {
        name: "منصور أحمد منصور حيدرة",
        regNo: "18600",
        department: "الإكترونات وأتصالات",
        level: "الخامس",
        classification: "B5EC"
    }
    const data = [
        {
            subject: "Computer Network",
            dayNubmer: 12,
            status: "طبيعي"
        },
        {
            subject: "Elective I: Microcontroller",
            dayNubmer: 3,
            status: "مستهنج"
        },
        {
            subject: "Infromation",
            dayNubmer: 2,
            status: "بعذر"
        }
    ]
    return (
        <React.Fragment>
            <div className="m-auto p-2 sm:p-4 flex flex-col items-center lg:w-2/4 w-screen justify-center">
                <HeadStudent />
                <ShowStudent
                    name={user.name}
                    regNo={user.regNo}
                    department={user.department}
                    level={user.level}
                    classification={user.classification}
                />
                <div className="flex w-full flex-col justify-center px-0 sm:px-4 mt-4">
                    <Alert
                        title="ملاحظة"
                        textColor="text-blue-50"
                        bgColor="bg-blue-700"
                        body="
                        عدد الحضور إذا كان ثلاث إيام او إقل يعتبر مستنهج ومن خلال 
                        الحالة يتم توضيح حالة الطالب إذا كان مستهنج او بعذر 
                        او في الحالة الطبيعية
                        "
                    />
                    <Attendance 
                        attendance={data}
                    />
                </div>
            </div>
        </React.Fragment>
    )
}
