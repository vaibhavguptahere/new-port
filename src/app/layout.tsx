import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Vaibhav Gupta",
  description: "Welcome to Vaibhav's Portfolio. Full-Stack Web Developer and Android App Developer",
  keywords: "vaibhav gupta, portfolio, vaibhav, full stack dev, personal portfolio, portfolio design, portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </head>
      <body className={`${inter.className} font-poppins`}>
        {children}
      </body>
    </html>
  );
}