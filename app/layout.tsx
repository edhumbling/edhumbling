import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { StyletronRegistry } from "./styletron";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio and life log",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSans.variable}>
        <StyletronRegistry>{children}</StyletronRegistry>
      </body>
    </html>
  );
}
