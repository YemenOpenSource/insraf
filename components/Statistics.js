import { Card, CardNumber, CardTitle } from "@/ui/Statistics";
import clsx from "clsx";

export default function page({ stats }) {
  return (
    <div className="m-auto p-2 sm:p-4 flex flex-col items-center w-screen justify-center">
      <div className="flex w-full flex-col justify-center">
        <div
          className={clsx(
            `grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2`
          )}
        >
          {stats.map((data, index) => (
            <Card key={index}>
              <CardNumber>{data.number}</CardNumber>
              <CardTitle className="text-sm text-gray-700 font-bolder">
                {data.title}
              </CardTitle>
              <span
                className={`absolute top-0 left-0 m-4 block h-4 w-4 rounded-full ${data.color}`}
              ></span>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
