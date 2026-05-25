import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Winning in Warfares | Prophetic & Deliverance Conference 2026",
  description:
    "Join us for a life-changing prophetic and deliverance conference with Pastor William F. Kumuyi. Discover the weapons God has given believers to overcome every battle and walk in victory!",
  keywords:
    "prophetic conference, deliverance, spiritual warfare, Pastor Kumuyi, Deeper Life Bible Church, Christian conference",
  openGraph: {
    title: "Winning in Warfares Conference 2026",
    description:
      "Come and discover the weapons God has given believers to overcome every battle and walk in victory!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gradient-to-br from-black  to-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
