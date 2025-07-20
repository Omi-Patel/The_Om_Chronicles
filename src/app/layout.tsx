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
  title: "| OM PATEL |",
  description: "Crafted by om-patel",
  openGraph: {
    title: "| OM PATEL |",
    description: "Crafted by om-patel",
    url: "https://the-om-chronicles.vercel.app/",
    images: [
      {
        url: "https://res.cloudinary.com/omicloud07/image/upload/v1753012010/Screenshot_2025-07-20_171237_t0wyqo.png",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="sm:px-4">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
