"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import { STATISTICS_QUERY } from "@/hooks/queries";
import { Statistics } from "@/components";
import { Loading } from "@/components";

export default function page() {
  const { loading, error, data } = useQuery(STATISTICS_QUERY);

  if (loading) return <Loading />;
  if (error) return `Error! ${error}`;

  const stats = [
    {
      title: "عدد الطلاب",
      number: data.statistics.userCount,
      color: "bg-blue-600"
    },
    {
      title: "التصنيفات",
      number: data.statistics.departmentCount,
      color: "bg-yellow-600"
    },
    {
      title: "نسبة الحضور",
      number: data.statistics.attendanceCount,
      color: "bg-green-600"
    },
    {
      title: "نسبة الغياب",
      number: data.statistics.attendanceAbsenceCount,
      color: "bg-red-600"
    }
  ];
  return (
    <Statistics stats={stats} />
  )
}
