"use client";
import {
    AppBar,
    Nav,
    Container,
    Head,
    Title
} from "@/ui/SubHeader";
import { AddUser } from "react-iconly";
import Link from "next/link";
import Image from 'next/image';
import insarf from '@/public/insarf.svg';
import Tab from "./Tab";

export default function SubHeader() {
    const data = [
        {
            title: "الإحصائيات",
            slug: "statistics",
        },
        {
            title: "التصنيفات",
            slug: "category",
        },
        {
            title: "الطلاب",
            slug: "students",
        }
    ];

    return (
        <AppBar>
            <Nav>
                <Image src={insarf} className="w-[130px] select-none m-4" alt="insarf logo" priority />
            </Nav>
            <Container>
                <Head $border={true} $between={true} $overflow={false}>
                    <Title>المشتركين</Title>
                    <Link href={"/students/create"}>
                        <button className="bg-blue-700 hover:bg-blue-600 selection:bg-blue-50 selection:text-blue-900 text-sm p-3 rounded-sm text-white ml-4 sm:ml-0 font-bolder flex justify-center items-center">
                            <AddUser
                                style={{ marginLeft: 6 }}
                                primaryColor='white'
                                stroke='bold'
                                size="medium"
                            />
                            إضافة طالب
                        </button>
                    </Link>
                </Head>
                <Head $border={false} $between={false} $overflow={true}>
                    {data.map(data => <Tab key={data.slug} title={data.title} slug={data.slug} />)}
                </Head>
            </Container>
        </AppBar>
    )
}