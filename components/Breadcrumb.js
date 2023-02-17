"use client";
import Link from "next/link";
import clsx from "clsx";
import { ChevronLeft } from "react-iconly";
import { usePathname } from 'next/navigation';

export default function Breadcrumb({ breadcrumbs }) {
    const router = usePathname();
    const active = router.split('/').filter((x) => x)
    return (
        <nav className="m-auto p-2 sm:p-4 flex flex-col items-start justify-center">
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm text-center w-full">
                <ol className="flex flex-row">
                    {
                        breadcrumbs.map((breadcrumb, i) =>
                            <li key={i}>
                                <div className="flex items-center">
                                    <Link href={breadcrumb.href}
                                        className={clsx("ml-1 text-xl hover:text-blue-600 md:ml-2",
                                            active[active.length - 1] == breadcrumb.active ? "text-blue-700 font-bolder" : "font-bolder text-gray-700"
                                        )}
                                    >
                                        {breadcrumb.name}
                                    </Link>
                                    {
                                        active[active.length - 1] != breadcrumb.active && (
                                            <ChevronLeft
                                                style={{ marginLeft: 6 }}
                                                primaryColor="blue"
                                                stroke="bold"
                                                size="medium"
                                            />
                                        )
                                    }
                                </div>
                            </li>
                        )
                    }
                </ol>
            </div>
        </nav>
    )
}
