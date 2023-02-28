import tw from "tailwind-styled-components";
import Image from "next/image";
import verified from "@/public/verified.svg";
/* 
 styled-components
*/
const Container = tw.div`max-w-7xl mx-auto p-2 sm:p-4`;
const Main = tw.div`bg-white max-w-3xl mx-auto shadow-sm flex flex-col justify-center items-center p-8`;
const Button = tw.div`inline-flex font-bolder items-center px-3 py-2 border border-transparent 
shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 
focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-2 cursor-pointer
`;

export default function Success({ name }) {
    return (
        <Container>
            <Main>
            <Image src={verified} className="w-[200px] select-none mx-auto mb-4" alt="insarf logo" priority />
                <h1 className="text-center font-regular text-lg">مرحباً بعودتك : <span className="font-bolder">{name}</span> 👋</h1>
                <Button>
                    إدارة الموقع
                </Button>
            </Main>
        </Container>
    )
}

