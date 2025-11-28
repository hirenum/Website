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
  title: "Hirenum | Personal Branding for Founders & Leaders",
  description: "We help founders, entrepreneurs, and C-suites build powerful LinkedIn personal brands that turn visibility into authority.",
  keywords: ["Personal Branding", "LinkedIn", "Thought Leadership", "Executive Branding", "Hirenum", "Marketing Agency"],
  openGraph: {
    title: "Hirenum | Personal Branding for Founders & Leaders",
    description: "We help founders, entrepreneurs, and C-suites build powerful LinkedIn personal brands that turn visibility into authority.",
    url: "https://hirenum.com",
    siteName: "Hirenum",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hirenum | Personal Branding for Founders & Leaders",
    description: "We help founders, entrepreneurs, and C-suites build powerful LinkedIn personal brands that turn visibility into authority.",
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
