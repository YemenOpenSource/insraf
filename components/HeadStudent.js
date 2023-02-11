import Image from "next/image";
import AddUser from "@/public/icons/AddUser.svg";

export default function HeadStudent() {
    return (
        <div className="flex w-full flex-col justify-center px-0 sm:px-4 mb-4">
            <div className="bg-white rounded-lg shadow-lg h-20 flex justify-evenly items-center select-none">
                <button className="bg-blue-700 text-sm p-3 rounded-sm text-white ml-4 sm:ml-0 h-10">
                    <Image src={AddUser} className="w-5 select-none inline-block mx-1 fill-white text-white" alt="insarf logo" priority />
                    تعديل
                </button>
                <button className="bg-red-500 text-sm p-3 rounded-sm text-white ml-4 sm:ml-0 h-10">
                    <Image src={AddUser} className="w-5 select-none inline-block mx-1 fill-white text-white" alt="insarf logo" priority />
                    حذف
                </button>
            </div>
        </div>
    )
}
