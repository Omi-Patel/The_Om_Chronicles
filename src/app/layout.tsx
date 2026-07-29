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

const siteUrl = "https://the-om-chronicles.vercel.app";
const siteDescription =
  "Om Patel is a full-stack developer building clean, scalable web experiences with React, Next.js, Spring Boot and Node.js.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Om Patel — Software Developer",
    template: "%s — Om Patel",
  },
  description: siteDescription,
  keywords: [
    "Om Patel",
    "Software Developer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Spring Boot",
    "Web Developer India",
    "Portfolio",
  ],
  authors: [{ name: "Om Patel", url: siteUrl }],
  creator: "Om Patel",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Om Patel — Portfolio",
    title: "Om Patel — Software Developer",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    site: "@om_patel07",
    creator: "@om_patel07",
    title: "Om Patel — Software Developer",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Om Patel",
  url: siteUrl,
  jobTitle: "Software Developer",
  worksFor: {
    "@type": "Organization",
    name: "Liquify Solutions",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bilimora",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  email: "mailto:omipatel7113@gmail.com",
  sameAs: [
    "https://github.com/Omi-Patel",
    "https://linkedin.com/in/ompatel7113",
    "https://x.com/om_patel07",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
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
