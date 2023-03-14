"use client";
import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_STUDENT } from "@/hooks/mutations";
import { CreateStudent } from "@/components";
import { LEVEL } from "@/hooks/queries";

export default function page() {
    const [data, setData] = useState()
    const { loading, error, data: level } = useQuery(LEVEL);
    const [createStudent] = useMutation(CREATE_STUDENT);

    if (loading) return <p> Loading...</p>;
    if (error) return <p>Error :</p>;

    return (
        <div className="m-auto p-2 sm:p-4 flex flex-col items-center w-screen justify-center">
            <div className="flex w-full flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 selection:bg-blue-700 selection:text-white">
                    <div className="bg-white rounded shadow p-4 md:p-8 md:col-start-1 md:col-end-13 order-2 md:order-1">
                        <CreateStudent data={setData} levels={level.levels} />
                        <button onClick={() => createStudent({
                            variables: {
                                levelId: 1,
                                name: "محمد بن محمد علي",
                                password: "121",
                                register: 11,
                                gender: "MALE",
                                date: "12",
                                classifiction: "B5EC"
                            },
                        })}>on</button>
                    </div>
                </div>
            </div>
        </div>
    )
}