import {
    Card,
    CardNumber,
    CardTitle
} from "@/ui/Statistics";
import { Container } from "@/components";

export default function page({ children, stats }) {
    return (
        <Container sm={2} md={4} lg={4} gap={2}>
            {stats.map((data, index) =>
                <Card key={index}>
                    <CardNumber>{data.number}</CardNumber>
                    <CardTitle className="text-sm text-gray-700">{data.title}</CardTitle>
                    <span className={`absolute top-0 left-0 m-4 block h-4 w-4 rounded-full ${data.color}`}></span>
                </Card>
            )}
            <span className="col-start-1 col-span-2 md:col-span-4"></span>
            {/*
                <span className="bg-white rounded shadow p-4 md:p-8 col-start-1 col-span-2 md:col-span-4">
                    {children}
                </span> 
            */}
        </Container>

    )
}
