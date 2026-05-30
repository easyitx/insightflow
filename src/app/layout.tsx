import type { Metadata, Viewport } from "next";
import "./globals.css";
import React from "react";
import Header from "@/widgets/Header/Header";
import { cn } from "@/shared/lib/utils";
import { golosText } from "@/shared/lib/fonts";
import Footer from "@/widgets/Footer/Footer";
import { Spacing } from "@/shared/ui/Spacing";
import { AppProvider } from "./providers";
import BgFilter from "@/widgets/BgFilter/BgFilter";
import {
  buildMetadata,
  getOrganizationSchema,
  getWebSiteSchema,
  SITE_NAME,
  SITE_URL,
} from "@/shared/config/seo";
import { JsonLd } from "@/shared/ui/JsonLd/JsonLd";
import { YandexMetrika } from "@/shared/ui/YandexMetrika/YandexMetrika";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildMetadata(),
  title: {
    default: buildMetadata().title as string,
    template: `%s | ${SITE_NAME}`,
  },
  alternates: {
    canonical: "/",
    languages: {
      ru: "/",
    },
  },
  category: "technology",
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0b0b0b",
  colorScheme: "dark",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru" dir="ltr">
      <head>
        <link type="image/svg+xml" rel="icon" href="/favicon.svg" />

        <link
          type="image/png"
          sizes="16x16"
          rel="icon"
          href="/icons/favicon-16x16.png"
        />
        <link
          type="image/png"
          sizes="32x32"
          rel="icon"
          href="/icons/favicon-32x32.png"
        />
        <link
          type="image/png"
          sizes="96x96"
          rel="icon"
          href="/icons/favicon-96x96.png"
        />
        <link
          type="image/png"
          sizes="120x120"
          rel="icon"
          href="/icons/favicon-120x120.png"
        />

        <link
          type="image/png"
          sizes="72x72"
          rel="icon"
          href="/icons/android-icon-72x72.png"
        />
        <link
          type="image/png"
          sizes="96x96"
          rel="icon"
          href="/icons/android-icon-96x96.png"
        />
        <link
          type="image/png"
          sizes="144x144"
          rel="icon"
          href="/icons/android-icon-144x144.png"
        />
        <link
          type="image/png"
          sizes="192x192"
          rel="icon"
          href="/icons/android-icon-192x192.png"
        />
        <link
          type="image/png"
          sizes="512x512"
          rel="icon"
          href="/icons/android-icon-512x512.png"
        />
        <link rel="manifest" href="/manifest.json" />

        <link
          sizes="57x57"
          rel="apple-touch-icon"
          href="/icons/apple-touch-icon-57x57.png"
        />
        <link
          sizes="60x60"
          rel="apple-touch-icon"
          href="/icons/apple-touch-icon-60x60.png"
        />
        <link
          sizes="72x72"
          rel="apple-touch-icon"
          href="/icons/apple-touch-icon-72x72.png"
        />
        <link
          sizes="76x76"
          rel="apple-touch-icon"
          href="/icons/apple-touch-icon-76x76.png"
        />
        <link
          sizes="114x114"
          rel="apple-touch-icon"
          href="/icons/apple-touch-icon-114x114.png"
        />
        <link
          sizes="120x120"
          rel="apple-touch-icon"
          href="/icons/apple-touch-icon-120x120.png"
        />
        <link
          sizes="144x144"
          rel="apple-touch-icon"
          href="/icons/apple-touch-icon-144x144.png"
        />
        <link
          sizes="152x152"
          rel="apple-touch-icon"
          href="/icons/apple-touch-icon-152x152.png"
        />
        <link
          sizes="180x180"
          rel="apple-touch-icon"
          href="/icons/apple-touch-icon-180x180.png"
        />

        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="application-name" content={SITE_NAME} />
      </head>

      <body className={cn("pt-6 m-0 font-sans antialiased", golosText.variable)}>
        <JsonLd data={[getWebSiteSchema(), getOrganizationSchema()]} />

        <BgFilter />

        <AppProvider>
          <Header className="app-container h-15" />
          <Spacing size="4xl" direction="vertical" />

          <main id="main-content" role="main">
            {children}
          </main>

          <Spacing size="4xl" direction="vertical" />
          <Footer />
        </AppProvider>
        <YandexMetrika />
      </body>
    </html>
  );
}
