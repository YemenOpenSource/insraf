"use client";
import tw from "tailwind-styled-components";

// tailwind-styled-components
const Container = tw.div`max-w-7xl mx-auto p-2 sm:p-4`;
const Card = tw.div`max-w-3xl mx-auto sm:p-3`;
const Page = tw.div`bg-white overflow-hidden shadow divide-gray-200 rounded-sm`;
const Qr = tw.div`
  w-full flex justify-center py-2 px-4 border border-transparent 
  shadow-sm text-sm font-medium font-bolder text-white bg-gray-50 select-none
  h-[200px] my-4 mt-8
`;
const Button = tw.button`
  w-full mb-8 flex justify-center py-2 px-4 border border-transparent 
  rounded-md shadow-sm text-sm font-medium font-bolder text-white bg-blue-700 hover:bg-blue-600 
  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 select-none
`;

export default function Attedance() {
  return (
    <Container>
      <Card>
        <Page>
          <div className="sm:mx-auto sm:w-full sm:max-w-md p-3 sm:p-0 selection:bg-blue-700 selection:text-white">
            <Qr></Qr>
            <div>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full font-regular rounded-md outline-none my-4 text-center border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="اسم المادة"
                  disabled
                />
              </div>
              <p className="font-regular sm:my-4 text-sm text-red-500">* يتم إضافة اسم المادة تلقائياً عند مسح الكيو آر </p>
            </div>
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-md p-3 sm:p-0">
            <Button>تحضير</Button>
          </div>
        </Page>
      </Card>
    </Container>
  );
}
