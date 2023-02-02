"use client";
import {
    AppBar,
    Nav,
    Container,
    Head,
    Title,
    Button
} from "@/ui/SubHeader";
import { useSelectedLayoutSegment } from "next/navigation";
import Image from 'next/image';
import Link from "next/link";
import insarf from '@/public/insarf.svg';

export default function SubHeader() {

    const isActive = () => {
        const segment = useSelectedLayoutSegment();
        const items = []
        if (segment == 'category') {
            items.push({
                category: true,
                statistics: false,
            })
        } else {
            items.push({
                category: false,
                statistics: true,
            })
        }
        return items;
    }

    const [items] = isActive()
    
    return (
        <AppBar>
            <Nav>
                <Image src={insarf} className="w-[130px] select-none m-4" alt="insarf logo" priority />
            </Nav>
            <Container>
                <Head $border={true} $between={true}>
                    <Title>المشتركين</Title>
                </Head>
                <Head $border={false} $between={false}>
                    <Button $active={items.statistics}>
                        <Link href={'/statistics'}>
                            الإحصائيات
                        </Link>
                    </Button>
                    <Button $active={items.category}>
                        <Link href={'/category'}>
                            التصنيفات
                        </Link>
                    </Button>
                </Head>
            </Container>
        </AppBar>
    )
}