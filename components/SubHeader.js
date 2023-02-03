"use client";
import {
    AppBar,
    Nav,
    Container,
    Head,
    Title
} from "@/ui/SubHeader";
import Image from 'next/image';
import insarf from '@/public/insarf.svg';
import Tab from "./Tab";

export default function SubHeader({ slug }) {

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
                </Head>
                <Head $border={false} $between={false} $overflow={true}>
                    {data.map(data => <Tab key={data.slug} title={data.title} slug={data.slug} />)}
                </Head>
            </Container>
        </AppBar>
    )
}