import { Inter } from "next/font/google";
import Nav from '../components/navbar';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import React from 'react';
import Navbar from "./components/navbar";
import Footer from "./components/footer";

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