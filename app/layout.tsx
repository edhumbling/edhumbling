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
  title: "Edhumbling Portfolio",
  description: "Personal portfolio and life log. Architecting the void. Digital Life Log. System Core.",
  keywords: ["portfolio", "web development", "software engineering", "life log", "Edhumbling"],
  authors: [{ name: "Edhumbling" }],
  openGraph: {
    title: "Edhumbling Portfolio",
    description: "Personal portfolio and life log. Architecting the void.",
    type: "website",
    url: "https://edhumbling.com",
  },
};

// Schema.org JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://edhumbling.com/#website",
      url: "https://edhumbling.com",
      name: "Edhumbling Portfolio",
      description: "Personal portfolio and life log. Architecting the void. Digital Life Log. System Core.",
      inLanguage: "en-US",
    },
    {
      "@type": "Person",
      "@id": "https://edhumbling.com/#person",
      name: "Edhumbling",
      url: "https://edhumbling.com",
      description: "Software engineer and web developer. Creator of the Edhumbling Portfolio.",
      sameAs: [],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={notoSans.variable}>
        <StyletronRegistry>{children}</StyletronRegistry>
      </body>
    </html>
  );
}

