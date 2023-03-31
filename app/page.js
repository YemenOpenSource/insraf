"use client";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { SEARCH_QUERY } from "@/hooks/queries";
import { Loading } from "@/components";

export default function SearchBox() {
  const [contains, setContains] = useState();

  const { loading, error, data } = useQuery(SEARCH_QUERY, {
    variables: { contains: contains },
  });

  if (loading) return <Loading />;
  if (error) return <p>Error</p>;

  return (
    <div>
      <div className="bg-red-100 w-96 h-80 m-auto">
        <input onChange={({ target }) => setContains(target.value)} />
      </div>
    </div>
  );
}
