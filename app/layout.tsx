import type { Metadata } from "next";
import { Geist, Geist_Mono, Smooch_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const smoochSans = Smooch_Sans({
  variable: "--font-smooch-sans",
  subsets: ["latin"],
});

const DESCRIPTION =
  "We build custom business software — ERP, LMS and logistics platforms — designed around how your company actually works.";

export const metadata: Metadata = {
  // Canonical host is www: Vercel 308-redirects the apex to it. metadataBase
  // is what makes the OG image resolve to an absolute URL for scrapers.
  metadataBase: new URL("https://www.bleumont.in"),
  title: {
    default: "Bleumont — Custom Software Built Around Your Business",
    template: "%s | Bleumont",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Bleumont — Custom Software Built Around Your Business",
    description: DESCRIPTION,
    url: "https://www.bleumont.in",
    siteName: "Bleumont",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bleumont — Custom Software Built Around Your Business",
    description: DESCRIPTION,
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
        className={`${geistSans.variable} ${geistMono.variable} ${smoochSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
