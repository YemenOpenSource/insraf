import { Container } from "@/components";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import avater from "@/public/images/avater.png";
import qr from "@/public/images/qr.png";
import insarf_blue from "@/public/insarf_blue.svg";

export default function page({ params }) {
    return (
        <div className="m-auto p-2 sm:p-4 flex flex-col items-center lg:w-2/4 w-screen justify-center">
            <div className="flex w-full flex-col justify-center px-0 sm:px-4">
                <div className="bg-white rounded-lg shadow-lg">
                    <div className="flex items-center p-6 border-b border-blue-700 justify-between">
                        <div className="flex-shrink-0">
                            <Image src={insarf_blue} className="w-[160px] select-none" alt="insarf logo" priority />
                        </div>
                        <div className="md:ml-6">
                            <Image src={qr} className="w-[80px] h-[80px] select-none" alt="qr" priority />
                        </div>
                    </div>
                    <div className="sm:p-6 p-4 select-none">
                        {/* <Image src={avater} className="w-[150px] select-none m-auto" alt="avater" priority /> */}
                        <div dir="rtl" className="text-right mb-8">
                        <p className="uppercase font-bolder w-full h-10 bg-blue-700 text-blue-50 leading-2 p-2">الاسم : منصور أحمد منصور</p>
                        <p className="uppercase w-full font-bolder h-10 bg-[#fff] text-blue-700 leading-2 p-2">رقم القيد :
                            <span className="text-red-500 font-bolder"> 18600 </span>
                        </p>
                        <p className="uppercase w-full font-bolder h-10 bg-blue-700 text-blue-50  leading-2 p-2">القسم العلمي :
                            <span className="text-blue-50 font-bolder"> الكترونية وإتصالات</span>
                        </p>
                        <p className="uppercase w-full font-bolder h-10 bg-[#fff] text-blue-700 leading-2 p-2">المستوى الدراسي :
                            <span className="text-blue-700 font-bolder"> الخامس </span>
                        </p>
                        <p className="uppercase w-full font-bolder h-10 bg-blue-700 text-blue-50 leading-2 p-2">الشعبة  :
                            <span className="text-blue-50 font-medium font-sans"> B5EC </span>
                        </p>
                    </div>
                    </div>
                </div>
            </div>

            {/*                 <div className="flex w-full md:w-2/4 m-auto md:mb-0 mb-2">
                    <Image src={avater} className="w-[150px] select-none m-4" alt="avater" priority />
                    <div className="m-auto flex justify-center flex-col">
                        <Image src={logo} className="w-[150px] md:w-[100px] md:h-[100px] select-none m-auto" alt="avater" priority />
                        <p className="font-bolder text-blue-700 text-[12px] md:text-2xl text-center">
                            كـلية الهـنـدسة
                        </p>
                        <span className="text-gray-500 uppercase font-medium text-center text-[6px] md:text-sm w-full">Faculty of engineering</span> 
                    </div>
                    <Image src={qr} className="w-[150px] select-none m-4" alt="qr" priority />
                </div>
                <div className="flex justify-center font-medium flex-col md:flex-row items-center">
                    <div dir="rtl" className="text-right md:ml-8">
                        <p className="uppercase font-medium w-80 h-10 bg-[#f3f3f3] text-white leading-2 p-2">الاسم : منصور أحمد منصور</p>
                        <p className="uppercase font-medium w-80 h-10 bg-[#fff] text-[#7d7d7d] leading-2 p-2">رقم القيد :
                            <span className="text-red-500"> 18600 </span>
                        </p>
                        <p className="uppercase font-medium w-80 h-10 bg-[#f3f3f3] text-[#7d7d7d] leading-2 p-2">القسم العلمي :
                            <span className="text-[#7d7d7d]"> هندسة الكترونية وإتصالات </span>
                        </p>
                        <p className="uppercase font-medium w-80 h-10 bg-[#fff] text-[#7d7d7d] leading-2 p-2">المستوى الدراسي :
                            <span className="text-[#7d7d7d]"> الخامس </span>
                        </p>
                        <p className="uppercase font-medium w-80 h-10 bg-[#f3f3f3] text-[#7d7d7d] leading-2 p-2">الشعبة  :
                            <span className="text-[#7d7d7d]"> B5EC </span>
                        </p>
                    </div>
                    <div className="text-left mt-5 md:m-0">
                        <p className="font-medium w-80 h-10 bg-[#f3f3f3] text-[#7d7d7d] leading-2 p-2">Name  :
                            <span className="text-[#7d7d7d]"> Mansour Ahmed Mansour </span>
                        </p>
                        <p className="font-medium w-80 h-10 bg-[#fff] text-[#7d7d7d] leading-2 p-2">Reg.No :
                            <span className="text-red-500"> 18600 </span>
                        </p>
                        <p className="font-medium w-80 h-10 bg-[#f3f3f3] text-[#7d7d7d] leading-2 p-2">Department :
                            <span className="text-[#7d7d7d]"> Electronic and Commun</span>
                        </p>
                        <p className="font-medium w-80 h-10 bg-[#fff] text-[#7d7d7d] leading-2 p-2">Level :
                            <span className="text-[#7d7d7d]"> Five </span>
                        </p>
                        <p className="font-medium w-80 h-10 bg-[#f3f3f3] text-[#7d7d7d] leading-2 p-2">Class  :
                            <span className="text-[#7d7d7d]"> B5EC </span>
                        </p>
                    </div>
                </div> */}
        </div>

    )
}
