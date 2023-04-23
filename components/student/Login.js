"use client";
import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

const mailingLists = [
  {
    id: 1,
    title: "الامامية",
    description: "user",
  },
  {
    id: 2,
    title: "الخلفية",
    description: "environment",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Attedance() {
  const [data, setData] = useState("No result");
  const [facingMode, setFacingMode] = useState("environment");
  const [selectedMailingLists, setSelectedMailingLists] = useState(
    mailingLists[1]
  );

  const handleCameraSwitch = () => {
    setFacingMode(facingMode === "environment" ? "user" : "environment");
  };

  const qrReaderProps = {
    constraints: { facingMode },
  };

  return (
    <>
      <RadioGroup
        value={selectedMailingLists}
        onChange={setSelectedMailingLists}
      >
        <div className="my-4 grid grid-cols-2 gap-y-6 sm:grid-cols-2 sm:gap-x-4 gap-x-2 select-none">
          {mailingLists.map((mailingList) => (
            <RadioGroup.Option
              key={mailingList.id}
              value={mailingList}
              onClick={handleCameraSwitch}
              className={({ checked, active }) =>
                classNames(
                  checked ? "border-transparent" : "border-gray-300",
                  active ? "border-blue-700 ring-2 ring-blue-700" : "",
                  "relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none"
                )
              }
            >
              {({ checked, active }) => (
                <>
                  <span className="flex flex-1">
                    <span className="flex flex-col">
                      <RadioGroup.Label
                        as="span"
                        className={clsx(
                          "block text-sm font-medium font-bolder",
                          checked ? "text-blue-700" : "text-gray-900"
                        )}
                      >
                        {mailingList.title}
                      </RadioGroup.Label>
                    </span>
                  </span>
                  <CheckCircleIcon
                    className={classNames(
                      !checked ? "invisible" : "",
                      "h-5 w-5 text-blue-700"
                    )}
                    aria-hidden="true"
                  />
                  <span
                    className={classNames(
                      active ? "border" : "border-2",
                      checked ? "border-blue-700" : "border-transparent",
                      "pointer-events-none absolute -inset-px rounded-lg"
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
      <QrReader
        {...qrReaderProps}
        videoContainerStyle={{
          margin: 0,
          position: "relative",
          paddingTop: "77%",
          // width: "150%",
        }}
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        // style={{ width: "100%" }}
      />
      <p>{data}</p>
    </>
  );
}
