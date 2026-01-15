import type { Metadata, Viewport } from "next";
import "./globals.css";
import React from "react";
import Header from "@/widgets/Header/Header";
import { cn } from "@/shared/lib/utils";
import { interTight } from "@/shared/lib/fonts";
import Footer from "@/widgets/Footer/Footer";
import { Spacing } from "@/shared/ui/Spacing";
import { AppProvider } from "./providers";
import BgFilter from "@/widgets/BgFilter/BgFilter";

const keywords = [
    "разработка ПО",
    "разработка веб-сайтов",
    "настройка ПК",
    "консультирование по разработке",
    "веб-разработка",
    "программирование",
    "создание сайтов",
    "техническая поддержка",
    "IT консультации",
    "разработка программного обеспечения",
    "настройка компьютера",
    "техническое обслуживание ПК"
];

const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "InsightFlow - Разработка ПО и веб-сайтов",
    "description": "Профессиональные услуги по разработке программного обеспечения, созданию веб-сайтов, настройке ПК и техническому консультированию.",
    "url": "https://insightflow.ru",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://insightflow.ru/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
    }
};

const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "InsightFlow - Разработчик ПО и веб-сайтов",
    "description": "Профессиональные услуги по разработке программного обеспечения, созданию веб-сайтов, настройке ПК и техническому консультированию",
    "url": "https://insightflow.ru",
    "jobTitle": "Разработчик ПО и веб-разработчик",
    "sameAs": []
};

export const metadata: Metadata = {
    metadataBase: new URL(
        process.env.NEXT_PUBLIC_SITE_URL ?? "https://insightflow.ru"
    ),
    title: {
        default: "InsightFlow — Разработка ПО и веб-сайтов | Настройка ПК | IT Консультирование",
        template: "%s | InsightFlow",
    },
    description: "InsightFlow — профессиональные услуги по разработке программного обеспечения, созданию веб-сайтов, настройке ПК и техническому консультированию. Индивидуальный подход к каждому проекту.",
    keywords: keywords.join(", "),
    alternates: {
        canonical: "/",
        languages: {
            'ru': '/',
        }
    },
    openGraph: {
        type: "website",
        locale: "ru_RU",
        siteName: "InsightFlow",
        title: "InsightFlow — Разработка ПО и веб-сайтов | Настройка ПК | IT Консультирование",
        description: "Профессиональные услуги по разработке программного обеспечения, созданию веб-сайтов, настройке ПК и техническому консультированию.",
        url: "https://insightflow.ru",
        images: [
            {
                url: "https://insightflow.ru/og.png",
                width: 1200,
                height: 630,
                alt: "InsightFlow - Профессиональные IT услуги",
                type: "image/png"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "InsightFlow — Разработка ПО и веб-сайтов | Настройка ПК",
        description: "Профессиональные услуги по разработке программного обеспечения, созданию веб-сайтов, настройке ПК и техническому консультированию.",
        images: ["https://insightflow.ru/og.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        }
    },
    verification: {
        // yandex: "",
        // google: "",
    },
    category: "technology",
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
        <html lang="ru" dir="ltr" itemScope itemType="https://schema.org/WebPage">
        <head>

            <link type="image/x-icon" rel="shortcut icon" href="./favicon.ico"/>

            <link type="image/png" sizes="16x16" rel="icon" href="/icons/favicon-16x16.png"/>
            <link type="image/png" sizes="32x32" rel="icon" href="/icons/favicon-32x32.png"/>
            <link type="image/png" sizes="96x96" rel="icon" href="/icons/favicon-96x96.png"/>
            <link type="image/png" sizes="120x120" rel="icon" href="/icons/favicon-120x120.png"/>

            <link type="image/png" sizes="72x72" rel="icon" href="/icons/android-icon-72x72.png"/>
            <link type="image/png" sizes="96x96" rel="icon" href="/icons/android-icon-96x96.png"/>
            <link type="image/png" sizes="144x144" rel="icon" href="/icons/android-icon-144x144.png"/>
            <link type="image/png" sizes="192x192" rel="icon" href="/icons/android-icon-192x192.png"/>
            <link type="image/png" sizes="512x512" rel="icon" href="/icons/android-icon-512x512.png"/>
            <link rel="manifest" href="/manifest.json"/>

            <link sizes="57x57" rel="apple-touch-icon" href="/icons/apple-touch-icon-57x57.png"/>
            <link sizes="60x60" rel="apple-touch-icon" href="/icons/apple-touch-icon-60x60.png"/>
            <link sizes="72x72" rel="apple-touch-icon" href="/icons/apple-touch-icon-72x72.png"/>
            <link sizes="76x76" rel="apple-touch-icon" href="/icons/apple-touch-icon-76x76.png"/>
            <link sizes="114x114" rel="apple-touch-icon" href="/icons/apple-touch-icon-114x114.png"/>
            <link sizes="120x120" rel="apple-touch-icon" href="/icons/apple-touch-icon-120x120.png"/>
            <link sizes="144x144" rel="apple-touch-icon" href="/icons/apple-touch-icon-144x144.png"/>
            <link sizes="152x152" rel="apple-touch-icon" href="/icons/apple-touch-icon-152x152.png"/>
            <link sizes="180x180" rel="apple-touch-icon" href="/icons/apple-touch-icon-180x180.png"/>

            <meta name="msapplication-TileColor" content="#2b5797"/>
            <meta name="msapplication-TileImage" content="./mstile-144x144.png"/>
            <meta name="msapplication-square70x70logo" content="./mstile-70x70.png"/>
            <meta name="msapplication-square150x150logo" content="./mstile-150x150.png"/>
            <meta name="msapplication-wide310x150logo" content="./mstile-310x310.png"/>
            <meta name="msapplication-square310x310logo" content="./mstile-310x150.png"/>
            <meta name="application-name" content="InsightFlow"/>
            <meta name="msapplication-config" content="./browserconfig.xml"/>

        </head>

        <body className={cn("pt-6 m-0", interTight.variable)}>

        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(websiteStructuredData)}}
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(organizationStructuredData)}}
        />

        <BgFilter />

        <AppProvider>
            <Header className="app-container h-15"/>
            <Spacing size="4xl" direction="vertical"/>

            <main id="main-content" role="main">
                {children}
            </main>

            <Spacing size="4xl" direction="vertical"/>
            <Footer/>
        </AppProvider>
        </body>
        </html>
    );
}