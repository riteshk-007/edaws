import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./Footer";
import DonateBtn from "./components/DonateBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "edaws - Educational development And Agriculture Welfare Society",
  },
  description:
    "edaws - Educational development And Agriculture Welfare Society is a non-profit organization that works for the welfare of the society.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white text-black">
      <body className={inter.className}>
        <Navbar />
        <DonateBtn />
        {children}
        <Footer />
      </body>
    </html>
  );
}
