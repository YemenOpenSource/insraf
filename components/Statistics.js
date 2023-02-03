import {
    Card,
    CardNumber,
    CardTitle,
    CardColor
} from "@/ui/Statistics";

export default function page({ children, stats }) {
    return (
        <div className="m-auto p-2 sm:p-6 flex flex-col items-center w-screen justify-center">
            <div className="flex w-full flex-col justify-center p-4">
                <div className="h-[140px]">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-4">
                        {stats.map((data, index) =>
                            <Card key={index}>
                                <CardNumber>{data.number}</CardNumber>
                                <CardTitle>{data.title}</CardTitle>
                                <CardColor color={data.color}></CardColor>
                            </Card>
                        )}
                    </div>
                    <div className="grid grid-cols-1 mb-4">
                        <div className="flow-root bg-white rounded shadow p-4 relative h-60">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
