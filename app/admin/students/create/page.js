"use client";
import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_STUDENT } from "@/hooks/mutations";
import { Alert, CreateStudent } from "@/components";
import { LEVEL } from "@/hooks/queries";

export default function page() {
  const [data, setData] = useState();
  const [alert, setAlert] = useState({
    onCompleted: false,
    onError: false,
    message: "",
  });
  const { loading, error, data: level } = useQuery(LEVEL);
  const [createStudent] = useMutation(CREATE_STUDENT, {
    onCompleted: (data) => {
      setAlert({ ...alert, message: data.name, onCompleted: true });
    },
    onError: (error) =>
      setAlert({ ...alert, message: error.message, onError: true }),
  });

  useEffect(() => {
    if (alert) setAlert({ ...alert, onError: false, onCompleted: false });
  }, [data]);

  if (loading) return <p> Loading...</p>;
  if (error) return <p>Error :</p>;

  const handlerStudent = () => {
    return createStudent({
      variables: data
    })
  }

  return (
    <div className="m-auto p-2 sm:p-4 flex flex-col items-center w-screen justify-center">
      <div className="flex w-full flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 selection:bg-blue-700 selection:text-white">
          <div className="bg-white rounded shadow p-4 md:p-8 md:col-start-1 md:col-end-13 order-2 md:order-1">
            <CreateStudent data={setData} levels={level.levels} handlerStudent={handlerStudent}>
              {alert.onCompleted && (
                <Alert
                  title="تمت العملية بنجاح"
                  textColor="text-green-50"
                  bgColor="bg-green-500"
                  body={alert.message}
                />
              )}
              {alert.onError && (
                <Alert
                  title="خطأ"
                  textColor="text-red-50"
                  bgColor="bg-red-500"
                  body={alert.message}
                />
              )}
            </CreateStudent>
          </div>
        </div>
      </div>
    </div>
  );
}
