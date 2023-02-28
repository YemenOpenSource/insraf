import tw from "tailwind-styled-components";

/* 
 styled-components
*/
const Container = tw.div`max-w-7xl mx-auto px-0 sm:px-6 lg:px-8`;
const Main = tw.div`bg-white max-w-3xl mx-auto shadow-sm flex flex-col justify-center items-center p-8 mt-4`;
const Button = tw.div`inline-flex font-bolder items-center px-3 py-2 border border-transparent 
shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 
focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-2 cursor-pointer
`;

export default function Success() {
    return (
        <Container>
            <Main>
                <h1 className="text-center font-regular text-lg">مرحباً بعودتك : <span className="font-bolder">منصور</span> 👋</h1>
                <Button>
                    إدارة الموقع
                </Button>
            </Main>
        </Container>
    )
}

