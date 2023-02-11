import Image from "next/image";
import qr from "@/public/images/qr.png";
import insarf_blue from "@/public/insarf_blue.svg";

export default function ShowStudent(props) {
    const { name, regNo, department, level, classification } = props
    return (
        <div className="flex w-full flex-col justify-center px-0 sm:px-4">
            <div className="bg-white rounded-lg shadow-lg">
                <div className="flex items-center sm:p-6 p-4 border-b border-blue-700 justify-between">
                    <div className="flex-shrink-0">
                        <Image src={insarf_blue} className="w-[160px] select-none" alt="insarf logo" priority />
                    </div>
                    <div className="md:ml-0">
                        <Image src={qr} className="w-[80px] h-[80px] select-none" alt="qr" priority />
                    </div>
                </div>
                <div className="sm:p-6 p-4 select-none">
                    {/* <Image src={avater} className="w-[150px] select-none m-auto" alt="avater" priority /> */}
                    <div dir="rtl" className="text-right mb-8">
                        <p className="uppercase font-bolder w-full h-10 bg-blue-700 text-blue-50 leading-2 p-2">الاسم : {name}</p>
                        <p className="uppercase w-full font-bolder h-10 bg-[#fff] text-blue-700 leading-2 p-2">رقم القيد :
                            <span className="text-red-500 font-bolder"> {regNo} </span>
                        </p>
                        <p className="uppercase w-full font-bolder h-10 bg-blue-700 text-blue-50  leading-2 p-2">القسم العلمي :
                            <span className="text-blue-50 font-bolder"> {department} </span>
                        </p>
                        <p className="uppercase w-full font-bolder h-10 bg-[#fff] text-blue-700 leading-2 p-2">المستوى الدراسي :
                            <span className="text-blue-700 font-bolder"> {level} </span>
                        </p>
                        <p className="uppercase w-full font-bolder h-10 bg-blue-700 text-blue-50 leading-2 p-2">الشعبة  :
                            <span className="text-blue-50 font-medium font-sans"> {classification} </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
