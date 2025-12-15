import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EAMX Website",
  description: "EAMX - Innovación y excelencia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
