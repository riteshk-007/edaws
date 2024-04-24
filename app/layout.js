import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./Footer";
import DonateBtn from "./components/DonateBtn";
import { ViewTransitions } from "next-view-transitions";
import { AuthProvider } from "./(pages)/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "EDAWS - Educational development And Agriculture Welfare Society",
  },
  description:
    "EDAWS - Educational development And Agriculture Welfare Society is a non-profit organization that works for the welfare of the society.",
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
