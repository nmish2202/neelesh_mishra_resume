import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpotlightLayer from "@/components/SpotlightLayer";
import StarfieldCanvas from "@/components/StarfieldCanvas";
import CardTilt from "@/components/CardTilt";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata = {
  title: "Neelesh Mishra - Full Stack Developer & Portfolio Analyzer",
  description:
    "Portfolio of Neelesh Mishra, Full Stack Developer specializing in Next.js, React, Node.js, PHP, and AWS. Includes interactive resume, job description fit analyzer, and Ask AI assistant.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <body>
        <StarfieldCanvas />
        <SpotlightLayer />
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
        <CardTilt />
      </body>
    </html>
  );
}
