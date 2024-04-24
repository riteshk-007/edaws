import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./Footer";
import DonateBtn from "./components/DonateBtn";
import { ViewTransitions } from "next-view-transitions";
import { AuthProvider } from "./(pages)/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  manifest: "/manifest.json",
  title: {
    default: "EDAWS - Educational development And Agriculture Welfare Society",
  },
  description:
    "EDAWS - Educational development And Agriculture Welfare Society is a non-profit organization that works for the welfare of the society.",

  twitter: {
    card: "summary_large_image",
    image: "/opengraph-image.png",
  },
  facebook: {
    card: "summary_large_image",
    image: "/opengraph-image.png",
  },
  metadataBase: process.env.NEXT_PUBLIC_BASE_URL,
};
export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en" className="bg-white text-black">
        <body className={inter.className}>
          <AuthProvider>
            <Navbar />
            <DonateBtn />
            {children}
            <Footer />
          </AuthProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
