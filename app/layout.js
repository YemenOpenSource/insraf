import local from "@next/font/local";
import clsx from "clsx";
import "./globals.css";

// inculde the fonts in app by @next/font
const fontBold = local({ src: './fonts/NotoSansArabicBold.woff', variable: '--font-noto-bold' });
const fontRegular = local({ src: './fonts/NotoSansArabicMedium.woff', variable: '--font-noto-regular' });

export default function RootLayout({ children }) {
  return (
    <html dir="rtl">
      <body
        className={clsx(
          fontBold.variable,
          fontRegular.variable,
          'bg-gray-50'
        )}
      >
        {children}
      </body>
    </html>
  )
}
