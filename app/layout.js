"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./Footer";
import DonateBtn from "./components/DonateBtn";
import { ViewTransitions } from "next-view-transitions";
import { AuthProvider } from "./(pages)/Provider";
import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   manifest: "/manifest.json",
//   title: {
//     default: "EDAWS - Educational development And Agriculture Welfare Society",
//   },
//   description:
//     "EDAWS - Educational development And Agriculture Welfare Society is a non-profit organization that works for the welfare of the society.",

//   twitter: {
//     card: "summary_large_image",
//     image: "/opengraph-image.png",
//   },
//   facebook: {
//     card: "summary_large_image",
//     image: "/opengraph-image.png",
//   },
//   metadataBase: process.env.NEXT_PUBLIC_BASE_URL,
// };
export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  const [show] = useState(false);
  return (
    <ViewTransitions>
      <html lang="en" className="bg-white text-black">
        <body className={inter.className}>
          {show ? (
            <AuthProvider>
              <Navbar />
              <DonateBtn />
              {children}
              <Analytics />
              <Footer />
            </AuthProvider>
          ) : (
            <div className="flex justify-center items-center h-screen">
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong className="font-bold">Server Shutdown!</strong>
                <span className="block sm:inline">
                  {" "}
                  Your server has been shut down because payment was not made on
                  time.
                </span>
              </div>
            </div>
          )}
        </body>
      </html>
    </ViewTransitions>
  );
}
