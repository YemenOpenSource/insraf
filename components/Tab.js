"use client";
import Link from "next/link";
import { Button } from "@/ui/SubHeader";
import { useSelectedLayoutSegment } from "next/navigation";

export default function SubHeader({ slug, title }) {

    const segment = useSelectedLayoutSegment();
    const isActive = slug === segment;

    return (
        <Button $active={isActive}>
            <Link href={`/admin/${typeof slug == 'string' ? slug : ''}`}>
                {title}
            </Link>
        </Button>
    )
}