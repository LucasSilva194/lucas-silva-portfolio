import type { Metadata } from "next";

import "./globals.css";
import "./theme-overrides.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lucas-silva-portfolio.vercel.app"),
  title: "Lucas Silva | Full Stack Software Developer",
  description:
    "Portfolio of Lucas Silva, a Full Stack Software Developer based in Vila Nova de Gaia, Portugal, focused on internal APIs, web applications, workflow automations, TypeScript, Vue 3, Java, and Spring.",
  keywords: [
    "Lucas Silva",
    "Full Stack Software Developer",
    "TypeScript Developer",
    "Vue Developer",
    "Java Developer",
    "Spring Boot Developer",
    "Portugal Developer",
  ],
  authors: [{ name: "Lucas Silva" }],
  creator: "Lucas Silva",
  openGraph: {
    title: "Lucas Silva | Full Stack Software Developer",
    description:
      "Modern portfolio for Lucas Silva, Full Stack Software Developer in Vila Nova de Gaia, Portugal.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/profile-placeholder.svg",
        width: 720,
        height: 720,
        alt: "Lucas Silva profile placeholder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Silva | Full Stack Software Developer",
    description:
      "Full Stack Software Developer focused on internal APIs, web applications, and workflow automations.",
    images: ["/images/profile-placeholder.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
