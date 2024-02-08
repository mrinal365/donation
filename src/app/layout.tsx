import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Donate for Pnina Basov",
  description: "Pnina Basov, 18 year old girl in Canada -from Haifa Israel,Playing professional hockey in Canada and wants continue education in USA but the thing is that she is running our of money and in the spring if she will not find it she will go to army in Israel. leading to of sport career",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
