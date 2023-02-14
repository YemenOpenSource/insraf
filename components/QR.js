import Image from "next/image";
import qr from "@/public/images/qr.png";

export default function QR() {
    return (
        <div className="flex justify-center bg-white rounded shadow p-4 md:p-8 md:col-start-10 md:col-end-13 order-1 md:order-2 font-bolder">
            <Image src={qr} className="w-[180px] h-[180px] select-none" alt="qr" priority />
        </div>
    )
}
