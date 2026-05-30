import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://itvh.dev";

export const SITE_NAME = "itvh.dev";

export const TELEGRAM_URL = "https://t.me/intflow";

export const YEARS_OF_EXPERIENCE = 10;

export const SEO_KEYWORDS = [
  "разработка сайтов на заказ",
  "заказать сайт",
  "разработка веб-сайтов",
  "создание сайта под ключ",
  "разработчик сайтов",
  "разработка ПО на заказ",
  "веб-разработка на заказ",
  "разработка веб-приложений",
  "заказать интернет-магазин",
  "разработка landing page",
  "Next.js разработчик",
  "React разработчик",
  "фриланс разработчик",
  "IT услуги",
  "техническое консультирование",
  "разработка без IT студии",
  "создание корпоративного сайта",
  "разработка программного обеспечения",
];

export const DEFAULT_DESCRIPTION =
  "Закажите разработку сайта, веб-приложения или ПО напрямую у разработчика с опытом более 10 лет. Без менеджеров и наценки IT-студии. Бесплатная консультация, прозрачные сроки и цены. Напишите в Telegram.";

export const DEFAULT_TITLE =
  "Разработка сайтов и ПО на заказ — без переплат IT-студии";

const services = [
  {
    name: "Разработка веб-сайтов",
    description:
      "Создание лендингов, корпоративных сайтов и интернет-магазинов на React и Next.js с SEO и адаптивным дизайном.",
  },
  {
    name: "Разработка ПО",
    description:
      "Разработка программного обеспечения под задачи бизнеса: от MVP до готового продукта с поддержкой.",
  },
  {
    name: "Разработка веб-приложений",
    description:
      "Сложные веб-приложения, личные кабинеты, CRM и интеграции с внешними сервисами.",
  },
  {
    name: "IT-консультирование",
    description:
      "Выбор технологий, архитектура решений, аудит кода и сопровождение проектов.",
  },
  {
    name: "Веб-дизайн",
    description:
      "UI/UX дизайн, прототипы и макеты для сайтов и веб-приложений.",
  },
];

export function buildMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const pageTitle = title ?? DEFAULT_TITLE;
  const pageDescription = description ?? DEFAULT_DESCRIPTION;
  const url = `${SITE_URL}${path === "/" ? "" : path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: SEO_KEYWORDS.join(", "),
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "ru_RU",
      siteName: SITE_NAME,
      title: `${pageTitle} | ${SITE_NAME}`,
      description: pageDescription,
      url,
      images: [
        {
          url: `${SITE_URL}/og.png`,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — разработка сайтов и ПО на заказ`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageTitle} | ${SITE_NAME}`,
      description: pageDescription,
      images: [`${SITE_URL}/og.png`],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

export const homeMetadata = buildMetadata();

export const offerMetadata = buildMetadata({
  title: "Публичная оферта",
  description:
    "Публичная оферта самозанятого разработчика itvh.dev на оказание IT-услуг: разработка сайтов, ПО и веб-приложений.",
  path: "/offer",
});

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    description: `${DEFAULT_DESCRIPTION} Опыт разработки — более ${YEARS_OF_EXPERIENCE} лет.`,
    image: `${SITE_URL}/og.png`,
    priceRange: "$$",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 55.7558,
        longitude: 37.6173,
      },
      geoRadius: "5000000",
    },
    serviceType: [
      "Разработка веб-сайтов",
      "Разработка программного обеспечения",
      "Веб-разработка",
      "IT-консультирование",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Веб-разработка",
      "Разработка ПО",
    ],
    sameAs: [TELEGRAM_URL],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: ["Russian"],
      url: TELEGRAM_URL,
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "ru-RU",
  };
}

export function getWebPageSchema({
  path = "/",
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
}: {
  path?: string;
  title?: string;
  description?: string;
} = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    name: title,
    description,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "ru-RU",
  };
}

export function getServicesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "IT-услуги itvh.dev",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
          "@id": `${SITE_URL}/#organization`,
        },
        areaServed: "RU",
        url: SITE_URL,
      },
    })),
  };
}

export function getHomeStructuredData() {
  return [getWebPageSchema(), getServicesSchema()];
}
