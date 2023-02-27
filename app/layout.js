"use client";
import local from "@next/font/local";
import clsx from "clsx";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getCookie } from 'cookies-next';
import "./globals.css";

// inculde the fonts in app by @next/font
const fontBold = local({ src: './fonts/NotoSansArabicBold.woff', variable: '--font-noto-bold' });
const fontRegular = local({ src: './fonts/NotoSansArabicMedium.woff', variable: '--font-noto-regular' });

export default function RootLayout({ children }) {
  
  const httpLink = createHttpLink({
    uri: "/api/graphql",
    credentials: "same-origin",
  }); 

  const authLink = setContext((_, { headers }) => {
    const token = getCookie("token")
    return {
      headers: {
        ...headers,
        authorization: token ? `${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <html dir="rtl">
      <body
        className={clsx(
          fontBold.variable,
          fontRegular.variable,
          'bg-gray-100'
        )}
      >
        <ApolloProvider client={client}>
          {children}
        </ApolloProvider>
      </body>
    </html>
  )
}
