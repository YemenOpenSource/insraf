"use client";
import { useQuery } from '@apollo/client';
import { LEVEL_QUERY } from "@/hooks/queries";

export default function page({ params }) {
  const { loading, error, data } = useQuery(LEVEL_QUERY, {
    variables: { id: parseInt(params.levelId) },
  });

  if (loading) return <p> Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div>
      <>
        <h1>{data.level.name}</h1>
        <ul>
          {data.level.students.map((student) => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ul>
      </>
    </div>
  )
}
