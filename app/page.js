import tw from "tailwind-styled-components"
import Image from 'next/image';
import insarf from '@/public/insarf.svg';

const AppBar = tw.div`flex flex-col items-center bg-white shadow-sm`;
const Container = tw.header`container sticky top-0 z-40 bg-white`;
const Title = tw.span`mr-4 sm:mr-0 select-none`;
const Nav = tw.span`bg-blue-700 w-full h-16`;
const Head = tw.div`
  ${(p) => p.$border ? 'border-b border-b-slate-200' : 'border-none'}
  ${(p) => p.$between ? 'justify-between' : null}
  flex 
  h-16 
  items-center 
  py-4 
  text-2xl 
  font-bolder
`;
const Button = tw.button`
  ${(p) => p.$active ? 'text-blue-700 border-blue-700 font-bolder mr-4' : 'text-gray-500 border-transparent font-regular'}
  mb-[-20px] 
  select-none 
  inline-flex 
  h-11 
  items-center 
  border-b-[4px]  
  bg-transparent 
  px-8 
  py-2  
  hover:bg-brand-400 
  focus:outline-none 
  focus:ring-0 
  focus:ring-brand-0 
  focus:ring-offset-0 
  text-[17px]
`;

export default function Home() {
  return (
    <AppBar>
      <Nav>
        <Image src={insarf} className="w-[130px] select-none m-4" alt="insarf logo" priority />
      </Nav>
      <Container>
        <Head $border={true} $between={true}>
          <Title>المشتركين</Title>
        </Head>
        <Head $border={false} $between={false}>
          <Button $active={true}>الإحصائيات</Button>
          <Button>التصنيفات</Button>
        </Head>
      </Container>
    </AppBar>
  )
}
