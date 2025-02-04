import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/ui/navbar";
import { Footer } from "./_components/ui/footer";

const geistSans = Oswald({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "BEST Crowd Management | Event Security Services",
  description: "BEST ensures a safe and successful guest experience with our event security services.",
  keywords: ["Crowd Management", "Event Security", "Event Staffing", "Event Consulting", "BEST Crowd Management"],
  authors: [{ name: "BEST Crowd Management", url: "https://crowd-man.netlify.app" }],
  openGraph: {
    title: "BEST Crowd Management | Event Security Services",
    description: "BEST ensures a safe and successful guest experience with our event security services.",
    url: "https://crowd-man.netlify.app",
    siteName: "BEST Crowd Management",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "BEST Crowd Management Event Security",
      },
    ],
    locale: "en_US",
    type: "website",
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
        className={`${geistSans.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
