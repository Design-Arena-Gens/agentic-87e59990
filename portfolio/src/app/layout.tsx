import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Lucía Moreau — Computational Neuroscience Portfolio",
  description:
    "Computational neuroscience portfolio exploring temporal cognition, lucid consciousness, and synthetic neurobiology by Dr. Lucía Moreau.",
  openGraph: {
    title: "Dr. Lucía Moreau — Computational Neuroscience",
    description:
      "Hyper-minimal portfolio exploring neural time perception, consciousness manifolds, and living computation interfaces.",
    type: "website",
    url: "https://agentic-87e59990.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Lucía Moreau — Computational Neuroscience",
    description:
      "Temporal cognition research, lucid consciousness instruments, and organoid-synthetic dialogues.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
