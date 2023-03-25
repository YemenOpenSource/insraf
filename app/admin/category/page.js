"use client";
import { Category, Loading } from "@/components";
import { useMutation, useQuery } from "@apollo/client";
import { DEPARTMENTS_QUERY } from "@/hooks/queries";
import { DELETE_DEPARTMENT } from "@/hooks/mutations";
import { Fragment } from "react";
import { useRouter } from "next/navigation";
import { InformationCircleIcon } from "@heroicons/react/20/solid";

export default function page() {
  const router = useRouter();

  const { loading, error, data } = useQuery(DEPARTMENTS_QUERY);

  const [deleteDepartment] = useMutation(DELETE_DEPARTMENT, {
    onCompleted: (data) => {
      router.refresh();
    },
  });

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;

  const tags = [
    {
      id: 1,
      name: "هندسة الإكترونيات وإتصالات",
      description: "Elecronic and Communication Engg",
    },
    {
      id: 2,
      name: "هندسة كهرباء",
      description: "Electricity Engineering",
    },
    {
      id: 3,
      name: "هندسة مدني",
      description: "Civil Engineering",
    },
    {
      id: 4,
      name: "هندسة ميكانيك",
      description: "Mechanical Engineering",
    },
    {
      id: 5,
      name: "هندسة معمارية",
      description: "Architectural Engineering",
    },
    {
      id: 6,
      name: "هندسة بحرية",
      description: "Marine engineering",
    },
    {
      id: 7,
      name: "هندسة تقنية معلومات",
      description: "Information Technology Engg",
    },
    {
      id: 8,
      name: "هندسة مهارات كمبيوتر",
      description: "Computer Skills Engineering",
    },
    {
      id: 9,
      name: "هندسة صناعة وإنتاج",
      description: "Industry and production engineering",
    },
  ];

  return (
    <div className="m-auto p-2 sm:p-4 flex flex-col items-center w-screen justify-center">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 selection:bg-blue-700 selection:text-white">
          {data?.departments?.map(({ id, name, description }) => (
            <Category key={id} id={id} name={name} description={description} deleteDepartment={deleteDepartment}/>
          ))}
        </div>
      </div>
      <Info data={data} />
    </div>
  );
}

function Info({ data }) {
  return (
    <Fragment>
      {/*  when the no student display */}
      {data.departments.length == 0 && (
        <div className="rounded-md bg-blue-50 p-4 w-full">
          <div className="flex">
            <div className="flex-shrink-0">
              <InformationCircleIcon
                className="h-5 w-5 text-blue-700"
                aria-hidden="true"
              />
            </div>
            <div className="mr-3 flex-1 md:flex md:justify-between">
              <p className="text-sm text-blue-700 font-bolder">
                لا يوجد إي تصنيف مضاف مسبقاً في قاعدة البيانات
              </p>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
