import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import CartNavbar from "./CartNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keranjang",
  description: "Keranjang",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-[#E7D5D7] text-[#872D37]">
          <CartNavbar />
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
