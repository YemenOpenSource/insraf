"use client";
import Image from "next/image";
import Link from "next/link";
import { useQuery, useMutation } from "@apollo/client";
import { SEARCH_QUERY } from "@/hooks/queries";
import { DELETE_STUDENT } from "@/hooks/mutations";
import { Loading } from "@/components";
import { useSearchParams } from "next/navigation";
import { Show, Delete } from "react-iconly";
import { useRouter } from "next/navigation";
import { InformationCircleIcon } from "@heroicons/react/20/solid";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const search = searchParams.get("contains");

  const router = useRouter();

  const { loading, error, data } = useQuery(SEARCH_QUERY, {
    variables: { contains: search },
  });

  const [deleteStudent] = useMutation(DELETE_STUDENT, {
    onCompleted: (data) => {
      router.push(`/admin/students/search?contains=${search}`);
    },
  });

  if (loading) return <Loading />;
  if (error) return <p>Error</p>;

  return (
    <div className="px-2 sm:px-4 w-screen">
      {data.search.map(({ id, name, register, classification }) => (
        <div
          key={id}
          className="bg-white shadow sm:rounded-lg w-full selection:bg-blue-700 selection:text-white mb-4"
        >
          <div className="px-4 py-5 sm:p-6">
            <div className="sm:flex sm:items-center sm:justify-start">
              <div className="mt-5 sm:ml-6 sm:mt-0 px-4 sm:flex sm:flex-shrink-0 justify-center sm:items-center border-gray-100 md:border-l">
                <Image
                  src={require(`@/public/qr/${register}.png`)}
                  className="md:w-[80px] md:h-[80px] w-[100px] h-[100px] select-none m-auto md:m-0"
                  alt="qr"
                  priority
                />
              </div>
              <div className="text-center mt-2 md:mt-0 md:text-right">
                <h3 className="text-lg font-semibold leading-6 text-blue-700 font-bolder">
                  {name}
                </h3>
                <div className="mt-1 max-w-xl text-sm text-gray-500 font-regular">
                  <p>
                    {classification} -{" "}
                    <span className="text-blue-700 font-bolder">
                      {register}
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-5 sm:mr-6 sm:mt-0 sm:flex sm:flex-shrink-0 sm:items-center grow justify-end text-center">
                <button
                  onClick={() =>
                    deleteStudent({
                      variables: {
                        id,
                      },
                    })
                  }
                  type="button"
                  className="inline-flex mx-4 items-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  <Delete primaryColor="white" stroke="bold" size="medium" />
                </button>
                <Link href={`/admin/students/${id}`}>
                  <button
                    type="button"
                    className="inline-flex items-center ml-4 rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    <Show primaryColor="white" stroke="bold" size="medium" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      {data.search.length == 0 && <Info search={search} />}
    </div>
  );
}

function Info({ search }) {
  return (
    <>
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
              لا يوجد طالب مضاف مسبقاً في قاعدة البيانات بهذا الاسم : {search} !
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
