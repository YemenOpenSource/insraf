import React from 'react'
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div>
        <Link className="cursor-pointer text-teal-900 font-medium mx-2" href={"/admin"}>
          admin
        </Link>
        <Link className="cursor-pointer text-teal-900 font-medium mx-2" href={"/user"}>
          user
        </Link>
        <Link className="cursor-pointer text-teal-900 font-medium mx-2" href={"/auth/login"}>
          login
        </Link>
      </div>
      <h1 className="bg-red-700 font-bolder text-center text-white">موقع تحت الإنتاج</h1>
      <p className="bg-gray-700 font-bolder text-center text-white">MAO Team</p>
    </div>
  )
}
