import "./globals.css";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import ScrollProgress from "@/components/ScrollProgress";
import { profile } from "@/lib/portfolio-data";

const displayFont = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const monoFont = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-mono", display: "swap" });

const themeScript = `
  try {
    const saved = localStorage.getItem('portfolio-theme');
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.dataset.theme = saved || preferred;
  } catch (_) {}
`;

export const metadata = {
  metadataBase: new URL(`https://${profile.website}`),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description: "Senior Full Stack Developer in Dubai with 8+ years building secure government, financial, and enterprise platforms using Next.js, TypeScript, Node.js, PHP, and AWS.",
  keywords: ["Senior Full Stack Developer", "Next.js Developer Dubai", "React Developer UAE", "TypeScript", "Node.js", "Laravel", "AWS"],
  authors: [{ name: profile.name, url: `https://${profile.website}` }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: `https://${profile.website}`,
    siteName: profile.name,
    title: `${profile.name} — ${profile.role}`,
    description: "Secure digital platforms for UAE government, finance, and enterprise organizations.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: "Secure digital platforms for UAE government, finance, and enterprise organizations.",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: `https://${profile.website}`,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
    sameAs: [profile.linkedin, profile.github],
  };

  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning className={`${displayFont.variable} ${monoFont.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <MotionProvider>
          <ScrollProgress />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
