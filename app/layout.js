import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

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
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
