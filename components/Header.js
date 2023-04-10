"use client";
import Image from "next/image";
import Container from "./ContainerLoading";
import insarf_blue from "@/public/insarf_blue_y.svg";

export default function Header() {
  return (
    <header className="bg-white py-10">
      <Container>
        <nav className="flex">
          <div className="flex items-center">
            <div>
              <Image
                src={insarf_blue}
                className="w-[160px] select-none"
                alt="insarf logo"
                priority
              />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
