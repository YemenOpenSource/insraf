"use client";
import Link from "next/link";
import {
  Alert,
  Students,
  SearchStudents,
  Container,
  Loading,
} from "@/components";
import { useState } from "react";
import { Show } from "react-iconly";
import { useQuery } from "@apollo/client";
import { STUDENT_QUERY } from "@/hooks/queries";
import { Fragment } from "react";
import { InformationCircleIcon } from "@heroicons/react/20/solid";

export default function page() {
  const [search, setSearch] = useState();
  const { loading, error, data } = useQuery(STUDENT_QUERY);

  const searchHander = () => {
    return console.log(search);
  };

  if (loading) return <Loading />;
  if (error) return <p>Error :</p>;

  return (
    <Container sm={1} md={1} lg={1} gap={0}>
      {/* Alert */}
      <Alert
        title="عرض جميع الطلاب"
        textColor="text-[#614c19]"
        bgColor="bg-[#fec63d]"
        body="
            عرض جميع الطلاب الموجودين في قاعدة البيانات لجميع المستويات,
            لتصفح الطلاب وفقاً للإقسام يمكنك الإنتقال لصفحة التصنيفات او الضغط على 
            القسم الموجود في الجدول
        "
      />

      {data.students.length != 0 && (
        <Fragment>
          <div className="bg-white shadow-md sm:rounded-lg overflow-hidden">
            <SearchStudents search={setSearch} searchHander={searchHander} />
            <Students>
              {/* Head Start */}
              {data.students.map(({ id, name, register, classification }) => (
                <tr key={id} className="border-b text-center">
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-blue-700 whitespace-nowrap text-right font-bolder"
                  >
                    {name}
                  </th>
                  <td className="px-4 py-3">{register}</td>
                  <td className="px-4 py-3 underline text-blue-700 font-bold cursor-pointer">
                    <Link href={`/admin/category`}>{classification}</Link>
                  </td>
                  <td className="px-4 py-3 flex justify-center">
                    <Link href={`/admin/students/${id}`}>
                      <button className="bg-blue-700 hover:bg-blue-600 selection:bg-blue-50 selection:text-blue-900 text-sm p-3 rounded-sm text-white font-bolder flex justify-center items-center">
                        <Show
                          primaryColor="white"
                          stroke="bold"
                          size="medium"
                        />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </Students>
            <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4">
              {/* sub header */}
            </nav>
          </div>
        </Fragment>
      )}
      <Info data={data} />
    </Container>
  );
}

function Info({ data }) {
  return (
    <Fragment>
      {/*  when the no student display */}
      {data.students.length == 0 && (
        <div className="rounded-md bg-blue-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <InformationCircleIcon
                className="h-5 w-5 text-blue-700"
                aria-hidden="true"
              />
            </div>
            <div className="mr-3 flex-1 md:flex md:justify-between">
              <p className="text-sm text-blue-700 font-bolder">
                لا يوجد إي طالب مضاف مسبقاً في قاعدة البيانات
              </p>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
