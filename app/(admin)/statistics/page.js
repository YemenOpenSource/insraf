import React from "react";
import { Statistics, Chart } from "@/components";

export default function page() {
  const stats = [
    {
      title: "عدد الطلاب",
      number: 20,
      color: "bg-blue-600"
    },
    {
      title: "التصنيفات",
      number: 19,
      color: "bg-yellow-600"
    },
    {
      title: "نسبة الحضور",
      number: "%80",
      color: "bg-green-600"
    },
    {
      title: "نسبة الغياب",
      number: "%20",
      color: "bg-red-600"
    }
  ];
  return (
    <Statistics stats={stats}>
      <Chart />
    </Statistics>
  )
}
