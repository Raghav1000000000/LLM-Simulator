import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LLM Simulator",
  description: "An interactive educational visualization of how an LLM processes a prompt."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}