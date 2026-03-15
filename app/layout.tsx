import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ali Tarek — Fullstack Engineer | System Architect",
  description: "Fullstack engineer building scalable SaaS platforms and backend systems using Go, Node.js, React and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link type="image/png" sizes="16x16" rel="icon" href="/icons/port.png" />
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
