import local from "@next/font/local";
import clsx from "clsx";
import "./globals.css";

// inculde the fonts in app by @next/font
const fontBold = local({ src: '/fonts/NotoSansArabicBold.woff', variable: '--font-noto-bold' });
const fontMedium = local({ src: '/fonts/NotoSansArabicMedium.woff', variable: '--font-noto-medium' });
const fontRegular = local({ src: '/fonts/NotoSansArabicRegular.woff', variable: '--font-noto-regular' });

export default function RootLayout({ children }) {
  return (
    <html dir="rtl">
      <head />
      <body
        className={clsx(
          fontBold.variable,
          fontMedium.variable,
          fontRegular.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
