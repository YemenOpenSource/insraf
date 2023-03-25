"use client";
import { Delete } from "react-iconly";

export default function HeadStudent({deleteStudent, id}) {
  return (
    <div className="flex w-full flex-col justify-center px-0 sm:px-4 mb-4">
      <div className="bg-white rounded-lg shadow-lg h-20 flex justify-center items-center select-none">
        <button
          onClick={() =>
            deleteStudent({
              variables: {
                id
              },
            })
          }
          className="bg-red-500 outline-none hover:bg-red-600 selection:bg-red-50 selection:text-red-900 text-sm p-3 rounded-sm text-white sm:ml-0 font-bolder flex justify-center items-center"
        >
          <Delete
            style={{ marginLeft: 6 }}
            primaryColor="white"
            stroke="bold"
            size="medium"
          />
          حذف
        </button>
      </div>
    </div>
  );
}
