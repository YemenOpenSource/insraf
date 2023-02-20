"use client"
import local from "@next/font/local";
import clsx from "clsx";
import { SessionProvider as AuthProvider } from 'next-auth/react';
import "./globals.css";

// inculde the fonts in app by @next/font
const fontBold = local({ src: './fonts/NotoSansArabicBold.woff', variable: '--font-noto-bold' });
const fontRegular = local({ src: './fonts/NotoSansArabicMedium.woff', variable: '--font-noto-regular' });

export default function RootLayout({ children, session }) {
  return (
    <html dir="rtl">
      <body
        className={clsx(
          fontBold.variable,
          fontRegular.variable,
          'bg-gray-100'
        )}
      >
        <AuthProvider session={session}>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
