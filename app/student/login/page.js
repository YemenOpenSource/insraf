"use client";
import tw from "tailwind-styled-components";
import { User } from "react-iconly";

// tailwind-styled-components
const Container = tw.div`max-w-7xl mx-auto p-2 sm:p-4`;
const Card = tw.div`max-w-3xl mx-auto sm:p-3`;
const Page = tw.div`bg-white overflow-hidden shadow divide-gray-200 rounded-sm`;
const Button = tw.button`
  w-full mb-5 flex justify-center py-2 px-4 border border-transparent 
  rounded-md shadow-sm text-sm font-medium font-bolder text-white bg-blue-700 hover:bg-blue-600 
  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
`;

export default function SigIn() {
  return (
    <Container>
      <Card>
        <Page>
          <div className="px-4 py-5 sm:px-6">
            <div className="w-[100%] h-[100px] leading-[100px] text-center mx-auto flex justify-center items-center">
              <div className="bg-blue-700 w-[100px] h-[100px] rounded-full leading-[100px] text-center mx-auto flex justify-center items-center">
                <User primaryColor="white" stroke="regular" size="xlarge" />
              </div>
            </div>
          </div>
          <div className="px-4 mb-4 sm:px-6">
            <div className="bg-gray-100 w-[100%] h-[200px] leading-[100px] text-center mx-auto flex justify-center items-center"></div>
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-md p-3 sm:p-0">
            <Button
              onClick={() =>
                login({
                  variables: {
                    email: email,
                    password: password,
                  },
                })
              }
            >
              تسجيل الدخول
            </Button>
          </div>
        </Page>
      </Card>
    </Container>
  );
}
