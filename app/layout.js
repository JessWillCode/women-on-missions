import { Inter } from "next/font/google";
import Nav from '../components/navbar';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import React from 'react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        </body>
    </html>
  );
}