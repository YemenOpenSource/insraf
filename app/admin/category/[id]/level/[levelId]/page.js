"use client";
import Link from "next/link";
import { useQuery } from '@apollo/client';
import { LEVEL_QUERY } from "@/hooks/queries";
import { Alert, Students, SearchStudents, Container } from "@/components";
import { useState } from "react";
import { Show } from "react-iconly";

export default function page({ params }) {
  const [search, setSearch] = useState()
  const { loading, error, data } = useQuery(LEVEL_QUERY, {
    variables: { id: parseInt(params.levelId) },
  });

  const searchHander = () => {
    return console.log(search)
  }

  if (loading) return <p> Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <Container sm={1} md={1} lg={1} gap={0}>
      {data.level.students.length == 0 ?
        <Alert
          title="تنبية !"
          textColor="text-[#614c19]"
          bgColor="bg-[#fec63d]"
          body="
          لم يتم إضافة إي طالب في قاعدة البيانات 
          "
        />
        :
        <div className="bg-white shadow-md sm:rounded-lg overflow-hidden">
          <SearchStudents search={setSearch} searchHander={searchHander} />
          <Students>
            {/* Head Start */}
            {data.level.students.map((student) => (
              <tr key={student.id} className="border-b text-center">
                <th scope="row" className="px-4 py-3 font-medium text-blue-700 whitespace-nowrap text-right font-bolder">{student.name}</th>
                <td className="px-4 py-3">{student.register}</td>
                <td className="px-4 py-3 underline text-blue-700 font-bold">{student.classifiction}</td>
                <td className="px-4 py-3 flex justify-center">
                  <Link href={`/admin/students/${student.id}`}>
                    <button className="bg-blue-700 hover:bg-blue-600 selection:bg-blue-50 selection:text-blue-900 text-sm p-3 rounded-sm text-white font-bolder flex justify-center items-center">
                      <Show
                        primaryColor='white'
                        stroke='bold'
                        size="medium"
                      />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </Students>
        </div>
      }
    </Container>
  )
}
