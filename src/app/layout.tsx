import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Piga Home - Call Africa from UK & USA for Less | AssisConnect",
  description:
    "Make affordable VoIP calls to Kenya, Uganda, Tanzania, Nigeria, South Africa, Ghana, Rwanda & South Sudan. Crystal-clear calls from $15/month unlimited.",
  keywords: [
    "call Africa",
    "VoIP",
    "cheap calls Africa",
    "call Kenya from UK",
    "call Nigeria from USA",
    "African diaspora calling",
    "Piga Home",
    "AssisConnect",
  ],
  openGraph: {
    title: "Piga Home - Call Africa for Less",
    description:
      "Crystal-clear VoIP calls to 8 African countries. Starting at $15/month unlimited.",
    url: "https://assisconnect.net",
    siteName: "AssisConnect",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piga Home - Call Africa for Less",
    description:
      "Crystal-clear VoIP calls to 8 African countries. Starting at $15/month unlimited.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
