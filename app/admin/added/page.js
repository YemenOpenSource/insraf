"use client";
import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { CREATE_DEPARTMENT, CREATE_LEVEL } from "@/hooks/mutations";
import { DEPARTMENTS_QUERY } from "@/hooks/queries";
import { Alert, Container, Department, Level, Loading } from "@/components";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

export default function page() {
  const [alert, setAlert] = useState({
    message: "",
    error: false,
    success: false,
    department: false,
    level: false,
  });

  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert({
        ...alert,
        department: false,
        level: false,
      });
    }, 1500);
    return () => clearTimeout(timeout);
  }, [alert]);

  const { loading, error, data } = useQuery(DEPARTMENTS_QUERY);

  const [department] = useMutation(CREATE_DEPARTMENT, {
    onCompleted: (data) => {
      setAlert({
        ...alert,
        message: data.createDepartment.name,
        success: true,
        error: false,
        department: true,
        level: false,
      });
      router.refresh();
    },
    onError: (error) => {
      setAlert({
        ...alert,
        message: error.message,
        success: false,
        error: true,
        department: true,
        level: false,
      });
    },
  });

  const [levelhandler] = useMutation(CREATE_LEVEL, {
    onCompleted: (data) => {
      setAlert({
        ...alert,
        message: data.createLevel.name,
        success: true,
        error: false,
        department: false,
        level: true,
      });
    },
    onError: (error) => {
      setAlert({
        ...alert,
        message: error.message,
        success: false,
        error: true,
        department: false,
        level: true,
      });
    },
  });

  if (loading) return <Loading />;
  if (error) return <p>Error :</p>;

  return (
    <Container sm={1} md={1} lg={1} gap={0}>
      <div className="rounded-md bg-[#fec63d] mb-4 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <ExclamationTriangleIcon
              className="h-5 w-5 text-[#614c19]"
              aria-hidden="true"
            />
          </div>
          <div className="mr-3">
            <h3 className="text-sm font-medium text-[#614c19] font-bolder">تحذير !</h3>
            <div className="mt-2 text-sm text-[#614c19] font-regular">
              <p>
                يرجى إتباع التعليمات عند إضافة القسم مع المستوى باشكل الصحيح
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* department section */}
      <Department department={department}>
        {alert.department && alert.success ? (
          <Alert
            title="تمت العملية بنجاح"
            textColor="text-green-50"
            bgColor="bg-green-500"
            body={`تم إضافة القسم (${alert.message}) في قاعدة البيانات`}
          />
        ) : (
          <div>
            {alert.department && alert.error ? (
              <Alert
                title="خطأ !"
                textColor="text-red-50"
                bgColor="bg-red-500"
                body={alert.message}
              />
            ) : (
              ""
            )}
          </div>
        )}
      </Department>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      {/* Level section */}
      <Level levelhandler={levelhandler} departments={data.departments}>
        {alert.level && alert.success ? (
          <Alert
            title="تمت العملية بنجاح"
            textColor="text-green-50"
            bgColor="bg-green-500"
            body={`تم إضافة المستوى (${alert.message}) في قاعدة البيانات`}
          />
        ) : (
          <div>
            {alert.level && alert.error ? (
              <Alert
                title="خطأ !"
                textColor="text-red-50"
                bgColor="bg-red-500"
                body={alert.message}
              />
            ) : (
              ""
            )}
          </div>
        )}
      </Level>
    </Container>
  );
}
