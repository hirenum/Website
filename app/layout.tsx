import type { Metadata } from "next";
import { Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hirenum — LinkedIn Personal Branding for Founders & Leaders",
  description: "We help founders, entrepreneurs, and C-suites build strategic LinkedIn personal brands that turn them into their industry's go-to thought leaders.",
  keywords: [
    "LinkedIn Personal Branding",
    "Founder Branding",
    "Executive Branding",
    "C-Suite Personal Brand",
    "Thought Leadership",
    "LinkedIn Marketing",
    "Personal Brand Strategy",
    "Entrepreneur Branding",
    "LinkedIn Growth",
    "Hirenum",
  ],
  authors: [{ name: "Hirenum" }],
  creator: "Hirenum",
  publisher: "Hirenum",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Hirenum — LinkedIn Personal Branding for Founders & Leaders",
    description: "We help founders, entrepreneurs, and C-suites build strategic LinkedIn personal brands that turn them into their industry's go-to thought leaders.",
    url: "https://hirenum.com",
    siteName: "Hirenum",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hirenum — LinkedIn Personal Branding for Founders & Leaders",
    description: "We help founders, entrepreneurs, and C-suites build strategic LinkedIn personal brands that turn them into their industry's go-to thought leaders.",
    creator: "@hirenum",
  },
  alternates: {
    canonical: "https://hirenum.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} ${montserrat.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
