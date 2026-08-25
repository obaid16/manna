import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TAMANNA ANSARI — Creative Developer & UI/UX Designer",
  description: "Bespoke creative developer portfolio of Tamanna Ansari: Creative Developer, UI/UX Designer, and AI & ML Student. Interactive 3D project sculpture, editorial typography, and digital experiences.",
  keywords: ["Tamanna Ansari", "Creative Developer", "UI/UX Designer", "Frontend Developer", "3D Interactive Portfolio", "AI/ML Student", "Three.js", "GSAP"],
  authors: [{ name: "Tamanna Ansari" }],
  openGraph: {
    title: "TAMANNA ANSARI — Creative Developer & UI/UX Designer",
    description: "Bespoke creative developer portfolio showcasing interactive 3D tree project sculpture, editorial typography, and handcrafted web experiences.",
    url: "https://tamanna-portfolio-wheat.vercel.app/",
    siteName: "Tamanna Ansari Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${cormorant.variable} bg-[#FBF7F4] text-[#3B2F2A] font-sans antialiased selection:bg-[#B98F88] selection:text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

