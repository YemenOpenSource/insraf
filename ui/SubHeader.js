import tw from "tailwind-styled-components";

export const AppBar = tw.div`flex flex-col items-center bg-white shadow-sm`;

export const Container = tw.header`container sticky top-0 z-40 bg-white`;

export const Title = tw.span`mr-4 sm:mr-0 select-none`;

export const Nav = tw.span`bg-blue-700 w-full h-16`;

export const Head = tw.div`
  ${(p) => p.$border ? 'border-b border-b-slate-200' : 'border-none'}
  ${(p) => p.$between ? 'justify-between' : null}
  ${(p) => p.$overflow ? 'overflow-x-auto' : null}
  flex 
  h-16 
  items-center 
  py-4 
  text-2xl 
  font-bolder
`;

export const Button = tw.button`
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