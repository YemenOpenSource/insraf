import tw from "tailwind-styled-components"

const AppBar = tw.div`flex flex-col items-center bg-white shadow-sm`;
const Container = tw.header`container sticky top-0 z-40 bg-white`;
const Title = tw.span`mr-4 sm:mr-0 select-none`;
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

export default function Home() {

  return (
    <AppBar>

      <Container>
        <Head $border={true} $between={true}>
          <Title>المشتركين</Title>
        </Head>
        <Head $border={false} $between={false}>
          <button className="mb-[-20px] inline-flex h-11 items-center border-b-[4px] text-blue-700 border-blue-700 bg-transparent px-8 py-2 font-bolder hover:bg-brand-400 focus:outline-none focus:ring-0 focus:ring-brand-0 focus:ring-offset-0 text-[17px]">الإحصائيات</button>
          <button className="mb-[-20px] inline-flex h-11 items-center border-b-[4px] text-blue-700 border-blue-700 bg-transparent px-8 py-2 font-bolder hover:bg-brand-400 focus:outline-none focus:ring-0 focus:ring-brand-0 focus:ring-offset-0 text-[17px]">الإحصائيات</button>
        </Head>
      </Container>
    </AppBar>
  )
}
