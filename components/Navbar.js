"use client";
import Image from "next/image";
import insarf_blue from "@/public/insarf_blue.svg";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white border-b">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-[13px]"
      >
        <div className="flex lg:flex-1">
          <Link href={"/"} className="-m-1.5 p-1.5">
            <Image
              src={insarf_blue}
              className="w-[120px] select-none"
              alt="insarf logo"
              priority
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}
