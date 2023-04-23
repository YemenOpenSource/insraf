import Image from "next/image";
import insarf_gray from "@/public/insarf_gray.svg";
import { AuthContextProvider } from "@/contexts";
import { Navbar } from "@/components";

export default function layout({ children }) {
  return (
    <AuthContextProvider>
      <div>
        <Navbar />
        {children}
        <div className="flex justify-center">
          <Image
            src={insarf_gray}
            className="w-[160px] select-none m-4"
            alt="insarf logo"
            priority
          />
        </div>
      </div>
    </AuthContextProvider>
  );
}
