"use client";
import Link from "next/link";    
import { Button } from "@/ui/SubHeader";
import { useSelectedLayoutSegment } from "next/navigation";

export default function SubHeader({ slug, title }) {
    const segment = useSelectedLayoutSegment();
    const isActive = slug === segment;

    return (
        <Button $active={isActive}>
            <Link href={`/${slug}`}>
                {title}
            </Link>
        </Button>
    )
}