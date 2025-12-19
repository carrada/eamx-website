import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
});

export const metadata: Metadata = {
  title: "EAMX Website",
  description: "EAMX - Innovación y excelencia",
  icons: {
    icon: '/favicon2eamx.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${leagueSpartan.variable} ${leagueSpartan.className}`}>{children}</body>
    </html>
  );
}
