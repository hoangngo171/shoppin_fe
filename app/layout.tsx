import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { CartProvider } from "./context/CartContext";

const inter = Inter({
  subsets: ["vietnamese"],
});

export const metadata: Metadata = {
  title: "Shop Pin Siêu Cấp - Màu Tím",
  description: "Hệ thống bán lẻ pin chất lượng cao",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${inter.className} bg-purple-50 text-gray-900 min-h-screen flex flex-col justify-between`}
      >
        <CartProvider>
          <div>
            <Navbar />
            {children}
          </div>

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}