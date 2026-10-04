import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vedora Resort — Escape Into Something Extraordinary",
  description: "A cinematic luxury resort booking experience for Vedora.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}