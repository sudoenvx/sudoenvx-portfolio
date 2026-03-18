import type { Metadata, Viewport } from "next";
import "./globals.css";
import AppLayout from "@/components/layout/app-layout";

export const metadata: Metadata = {
  title: {
    default: "Ali Tarek - Fullstack Engineer | System Architect",
    template: "%s | Ali Tarek",
  },
  description:
    "Fullstack engineer building scalable SaaS platforms and backend systems using Go, Node.js, React, and Next.js.",

  metadataBase: new URL("https://portenvx.vercel.app"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Ali Tarek - Fullstack Engineer",
    description: "Building scalable SaaS platforms and backend systems.",
    url: "https://portenvx.vercel.app",
    siteName: "Ali Tarek Portfolio",
    images: ["https://portenvx.vercel.app/og?v=4"],
    locale: "en_US",
    type: "website",
  },
  

  twitter: {
    card: "summary_large_image",
    title: "Ali Tarek - Fullstack Engineer",
    description: "Building scalable SaaS platforms and backend systems.",
    images: ["https://portenvx.vercel.app/og?v=4"]
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
  },

  icons: {
    icon: [
      { url: "/icons/port-me.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/port-me.png", sizes: "100x100", type: "image/png" },
    ],
    apple: [{ url: "/icons/port-me.png" }],
  },

  keywords: [
    "Fullstack Engineer",
    "Go Developer",
    "Next.js Developer",
    "Backend Engineer",
    "SaaS Architect",
    "Node.js Developer",
    "React Developer",
    "System Architecture",
  ],

  authors: [{ name: "Ali Tarek" }],
  creator: "Ali Tarek",
  applicationName: "Ali Tarek Portfolio",
  category: "technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AppLayout>{children}</AppLayout>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ali Tarek",
              url: "https://portenvx.vercel.app",
              jobTitle: "Fullstack Engineer",
              description:
                "Fullstack engineer building scalable SaaS platforms and backend systems.",
              image: "https://portenvx.vercel.app/icons/port-me.png",
            }),
          }}
        />
      </body>
    </html>
  );
}
