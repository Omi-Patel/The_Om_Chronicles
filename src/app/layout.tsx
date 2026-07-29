import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Om Patel — Software Developer",
  description:
    "Full-stack developer building clean, scalable web experiences.",
  openGraph: {
    title: "Om Patel — Software Developer",
    description:
      "Full-stack developer building clean, scalable web experiences.",
    url: "https://the-om-chronicles.vercel.app/",
    images: [
      {
        url: "https://res.cloudinary.com/omicloud07/image/upload/v1753013438/ogimage_q1p6gt.png",
        width: 1200,
        height: 630,
        alt: "OM PATEL OG Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
