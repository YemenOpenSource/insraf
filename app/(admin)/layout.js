"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import insarf_gray from "@/public/insarf_gray.svg";
import { SubHeader, Breadcrumb } from "@/components";
import { usePathname } from 'next/navigation';
import { SessionProvider as AuthProvider } from 'next-auth/react';

export default function layout({ children }) {
    const router = usePathname();
    const [breadcrumbs, setBreadcrumbs] = useState([]);

    const convertBreadcrumb = string => {
        return string
            .replace('students', 'الطلاب')
            .replace('statistics', 'الإحصائيات')
            .replace('create', 'إضافة طالب')
            .replace('category', 'التصنيفات')
            .replace('edit', 'تعديل')
    };

    useEffect(() => {
        const pathSegments = router.split('/').filter((x) => x);
        const result = pathSegments.map((segment, i) => ({
            name: convertBreadcrumb(segment),
            active: segment,
            href: `/${pathSegments.slice(0, i + 1).join('/')}`,
        }));
        setBreadcrumbs(result);
    }, [router]);

    return (
        <React.Fragment>
            <SubHeader />
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <div className="flex justify-center overflow-hidden">
                <AuthProvider session={session}>
                    {children}
                </AuthProvider>
            </div>
            <div className="flex justify-center">
                <Image src={insarf_gray} className="w-[160px] select-none m-4" alt="insarf logo" priority />
            </div>
        </React.Fragment>
    )
}
