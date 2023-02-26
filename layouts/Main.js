import React from "react";
import Image from "next/future/image";
import AppBar from "./AppBar";

export default function Main({ children }) {
  return (
    <React.Fragment>
      <AppBar />
      <div>{children}</div>
      <footer className="p-4 bg-app sm:p-6">
        <div className="md:flex md:justify-center">
          <div className="md:mb-0">
            <div><Image src="/logo-bemedia.svg" width={100} height={100} alt="bemedia"/></div>
            <span className="self-center text-xl font-semibold whitespace-nowrap font-mono text-app m-0">BeeMedia</span>
          </div>
        </div>
        <div className="sm:flex sm:items-center md:justify-center">
          <span className="text-sm text-white sm:text-center font-mono m-0">© 2022 BeeMedia All Rights Reserved
          </span>
        </div>
      </footer>
    </React.Fragment>
  );
}
