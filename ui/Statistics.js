import tw from "tailwind-styled-components";

export const Card = tw.div`flow-root bg-white rounded shadow p-4 relative select-none`;

export const CardNumber = tw.p`text-3xl font-bold`;

export const CardTitle = tw.h4`text-sm text-gray-700`;

export const CardColor = tw.span`
    ${(p)=> `bg-${p.$color}-600`}
    absolute 
    top-0 
    left-0 
    m-4 
    block 
    h-4 
    w-4 
    rounded-full 
`;