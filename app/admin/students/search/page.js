"use client";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { SEARCH_QUERY } from "@/hooks/queries";
import { Loading } from "@/components";
import { useSearchParams } from "next/navigation";

export default function SearchBox() {

  const searchParams = useSearchParams();
  const search = searchParams.get('contains');



  const { loading, error, data } = useQuery(SEARCH_QUERY, {
    variables: { contains: search },
  });

  if (loading) return <Loading />;
  if (error) return <p>Error</p>;

  console.log(data)
  return (
    <div>
      <div className="bg-red-100 w-96 h-80 m-auto">input</div>
    </div>
  );
}
