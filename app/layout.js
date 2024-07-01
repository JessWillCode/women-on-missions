import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import React from 'react';
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="bumblebee">
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}