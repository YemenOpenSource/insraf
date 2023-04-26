"use client";
import tw from "tailwind-styled-components";
import clsx from "clsx";
import { useState, useContext } from "react";
import { XCircleIcon } from "@heroicons/react/20/solid";
import { Slider, Login, Attedance, Logout } from "@/components/student";
import {
  LOGIN_STUDENT,
  SIGN_IN_ATTENDANCE,
  SIGN_OUT_ATTENDANCE,
} from "@/hooks/mutations";
import { useMutation } from "@apollo/client";
import { AuthContext } from "@/contexts";

const Container = tw.div`max-w-7xl mx-auto p-2 sm:p-4`;
const Card = tw.div`max-w-3xl mx-auto sm:p-3`;
const Page = tw.div`bg-white overflow-hidden shadow divide-gray-200 rounded-sm`;
const Button = tw.button`
${(p) =>
  p.$color == "yellow"
    ? "text-[#614c19] bg-[#fec63d]  hover:bg-[#fec63d] focus:ring-[#614c19]"
    : "text-white bg-blue-700  hover:bg-blue-600 focus:ring-blue-500"}
  w-full mb-8 flex justify-center py-2 px-4 border border-transparent mx-2
  rounded-md shadow-sm text-sm font-medium font-bolder disabled:bg-slate-400
  focus:outline-none focus:ring-2 focus:ring-offset-2 select-none mt-4
`;

export default function page() {
  const [step, setStep] = useState(0);
  const [token, setToken] = useState();
  const [disabled, setDisabled] = useState(false);
  const [alert, setAlert] = useState({ error: false, message: "" });
  const [attedance, setAttedance] = useState(false);
  const [signOutTime, setSignOutTime] = useState('-');
  const { id, setId, idAttedance, setIdAttedance } = useContext(AuthContext);

  const group = [
    <Slider />,
    <Login token={setToken} />,
    <Attedance attedance={setAttedance} />,
    <Logout idAttedance={idAttedance} signOutTime={signOutTime}/>,
  ];

  const [login] = useMutation(LOGIN_STUDENT, {
    onCompleted: (data) => {
      setId(data.loginStudent.id);
      setStep(step + 1);
      setDisabled(false);
    },
    onError: (error) => {
      setDisabled(true);
      setAlert({ ...alert, error: true, message: error.message });
    },
  });

  const [attedances] = useMutation(SIGN_IN_ATTENDANCE, {
    onCompleted: (data) => {
      setIdAttedance(data.signInAttendance.id);
      setStep(step + 1);
      setDisabled(false);
    },
    onError: (error) => {
      setDisabled(true);
      setAlert({ ...alert, error: true, message: error.message });
    },
  });

  const [signOut] = useMutation(SIGN_OUT_ATTENDANCE, {
    onCompleted: (data) => setSignOutTime(data.signOutAttendance.signOutTime),
    onError: (error) => console.log(error),
  });

  function renderMarkers() {
    let markers = [];
    for (let i = 0; i < group.length - 1; i++) {
      markers.push(
        <span
          key={i}
          className={clsx(
            step > i ? "bg-green-500" : "bg-blue-700",
            "w-10 h-10 text-center leading-[40px] rounded-full text-white font-bolder m-4 sm:m-2 select-none"
          )}
        >
          {i + 1}
        </span>
      );
    }
    return markers;
  }

  return (
    <Container>
      <div className="flex justify-center">{renderMarkers()}</div>
      <Card>
        {alert.error && (
          <div className="bg-red-500 p-4 mt-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <XCircleIcon
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3">
                <h3 className="text-sm text-white font-bolder mr-2">خطأ</h3>
                <div className="mt-2 text-sm text-white font-bolder">
                  <ul
                    role="list"
                    className="list-disc space-y-1 pl-5 font-regular"
                  >
                    <li>{alert.message}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        <Page>
          <div className="sm:mx-auto sm:w-full sm:max-w-md p-3 sm:p-0 selection:bg-blue-700 selection:text-white">
            <div>
              {group[step]}
              <div>
                <div className="sm:mx-auto sm:w-full sm:max-w-md p-3 sm:p-0 flex">
                  {step > 0 && (
                    <Button $color="yellow" onClick={() => setStep(step - 1)}>
                      الخلف
                    </Button>
                  )}
                  {step === group.length - 1 && (
                    <Button
                      $color="blue"
                      onClick={() => {
                        signOut({
                          variables: {
                            signOutAttendanceId: idAttedance,
                          },
                        });
                      }}
                    >
                      خروج
                    </Button>
                  )}
                  {step < group.length - 1 && step != 1 && step != 2 && (
                    <Button $color="blue" onClick={() => setStep(step + 1)}>
                      التالي
                    </Button>
                  )}
                  {step == 1 && (
                    <Button
                      disabled={disabled}
                      $color="blue"
                      onClick={() => {
                        login({
                          variables: {
                            token: token,
                          },
                        });
                      }}
                    >
                      دخول
                    </Button>
                  )}
                  {step == 2 && (
                    <Button
                      disabled={id == "no auth" || disabled}
                      $color="blue"
                      onClick={() => {
                        attedances({
                          variables: {
                            subject: attedance[0],
                            date: attedance[1],
                            studentId: Number(id),
                          },
                        });
                      }}
                    >
                      تحضير
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Page>
      </Card>
    </Container>
  );
}
