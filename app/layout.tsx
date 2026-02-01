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

// Base URL for the site
const siteUrl = "https://hirenum.com";

export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: "Hirenum — LinkedIn Personal Branding for Founders & Leaders",
    template: "%s | Hirenum",
  },
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
    "LinkedIn Profile Optimization",
    "Personal Brand Consultant",
    "LinkedIn Content Strategy",
    "Executive LinkedIn",
    "Leadership Branding",
  ],
  authors: [{ name: "Hirenum", url: siteUrl }],
  creator: "Hirenum",
  publisher: "Hirenum",
  
  // Icons
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  
  // Manifest for PWA
  manifest: "/favicon/site.webmanifest",
  
  // Robots directives
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Open Graph metadata for social sharing
  openGraph: {
    title: "Hirenum — LinkedIn Personal Branding for Founders & Leaders",
    description: "We help founders, entrepreneurs, and C-suites build strategic LinkedIn personal brands that turn them into their industry's go-to thought leaders.",
    url: siteUrl,
    siteName: "Hirenum",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Hirenum - LinkedIn Personal Branding",
      },
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Hirenum — LinkedIn Personal Branding for Founders & Leaders",
    description: "We help founders, entrepreneurs, and C-suites build strategic LinkedIn personal brands that turn them into their industry's go-to thought leaders.",
    creator: "@hirenum",
    site: "@hirenum",
    images: [`${siteUrl}/og-image.png`],
  },
  
  // Canonical URL
  alternates: {
    canonical: siteUrl,
  },
  
  // Verification tokens (add your actual tokens when available)
  verification: {
    google: "your-google-verification-code", // Replace with actual code
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  
  // Category
  category: "Business Services",
  
  // Other metadata
  metadataBase: new URL(siteUrl),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization Schema
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Hirenum",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
        width: 512,
        height: 512,
      },
      description: "We help founders, entrepreneurs, and C-suites build strategic LinkedIn personal brands that turn them into their industry's go-to thought leaders.",
      sameAs: [
        "https://www.linkedin.com/company/hirenum/",
        "https://twitter.com/hirenum",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "info@hirenum.com",
      },
    },
    // Website Schema
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Hirenum",
      description: "LinkedIn Personal Branding for Founders & Leaders",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/?s={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    // WebPage Schema
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Hirenum — LinkedIn Personal Branding for Founders & Leaders",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#organization`,
      },
      description: "We help founders, entrepreneurs, and C-suites build strategic LinkedIn personal brands that turn them into their industry's go-to thought leaders.",
    },
    // Service Schema
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "LinkedIn Personal Branding Services",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      description: "Strategic LinkedIn personal branding services including profile optimization, content strategy, and thought leadership positioning.",
      serviceType: "Personal Branding",
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Personal Branding Packages",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Advisory Package",
              description: "Weekly 1:1 advisory sessions with guidance on personal brand positioning, LinkedIn profile optimization, and content strategy.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Foundation Package",
              description: "Full LinkedIn profile optimization, content calendar, co-created content, and weekly performance reviews.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Authority Package",
              description: "Complete personal branding service including outreach support, relationship building, and high-touch execution.",
            },
          },
        ],
      },
    },
    // FAQ Schema
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What exactly is personal branding on LinkedIn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Personal branding on LinkedIn is the intentional way you present your expertise, experience and perspective so that the right people can easily understand who you are, what you do, and why it matters. It's not about pretending to be someone else — it's about clearly communicating the value you already bring.",
          },
        },
        {
          "@type": "Question",
          name: "Do I really need a personal brand if my business is already doing fine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many of our clients are already doing well when they come to us. A strong personal brand helps you open new doors: better clients, better talent, better partnerships and better opportunities. It also protects you long-term — your name continues to carry weight, even if your role or company changes.",
          },
        },
        {
          "@type": "Question",
          name: "I don't have time to post every day. Can this still work for me?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We design a strategy that fits your schedule and energy. You don't need to post daily to see results. You need consistent, intentional content that speaks to the right people. We'll help you find the rhythm that works for you.",
          },
        },
        {
          "@type": "Question",
          name: "Do I have to be on video to build a personal brand?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Video can help, but it's not mandatory. There are many ways to show up: text posts, carousels, articles, commenting, interviews and more. We'll build a plan that matches your strengths and comfort level.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${roboto.variable} ${montserrat.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
