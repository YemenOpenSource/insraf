import React from "react";
import { Statistics } from "@/components";

export default function page() {
  const stats = [
    {
      title: "عدد الطلاب",
      number: 20,
      color: "blue"
    },
    {
      title: "التصنيفات",
      number: 19,
      color: "yellow"
    },
    {
      title: "نسبة الحضور",
      number: "%80",
      color: "green"
    },
    {
      title: "نسبة الغياب",
      number: "%20",
      color: "red"
    }
  ];
  return (
    <Statistics stats={stats}>
      <h1>لاتوجد بيانات حالياً</h1>
    </Statistics>
  )
}
