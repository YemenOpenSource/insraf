import {
    Card,
    CardNumber,
    CardTitle
} from "@/ui/Statistics";

export default function page({ children, stats }) {
    return (
        <div className="m-auto p-2 sm:p-6 flex flex-col items-center w-screen justify-center">
            <div className="flex w-full flex-col justify-center p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                    {stats.map((data, index) =>
                        <Card key={index}>
                            <CardNumber>{data.number}</CardNumber>
                            <CardTitle className="text-sm text-gray-700">{data.title}</CardTitle>
                            <span className={`absolute top-0 left-0 m-4 block h-4 w-4 rounded-full ${data.color}`}></span>
                        </Card>
                    )}

                </div>
            </div>
            <div className="flex w-full flex-col justify-center p-4">
                <div className="grid grid-cols-1 bg-white rounded shadow h-full md:p-8">
                    {children}
                </div>
            </div>
        </div>
    )
}
