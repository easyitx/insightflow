"use client";
import React from "react";
import Title from "../Title/Title";
import { Typography } from "@/shared/ui/Typography";
import { Spacing } from "@/shared/ui/Spacing";
import { Icon } from "@/shared/ui/Icon/Icon";
import Button from "@/shared/ui/Button/Button";
import { FadeIn } from "@/shared/ui/FadeIn";
import { SITE_URL, TELEGRAM_URL, YEARS_OF_EXPERIENCE } from "@/shared/config/seo";

const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Разработка сайтов и ПО на заказ",
    "description": "Разработка веб-сайтов, веб-приложений и программного обеспечения на заказ. Работа напрямую с разработчиком без наценки IT-студии.",
    "provider": {
        "@type": "ProfessionalService",
        "name": "itvh.dev",
        "url": SITE_URL
    },
    "areaServed": "RU",
    "serviceType": "IT услуги",
    "url": SITE_URL
}

interface ServiceItem {
    id: string;
    title: string;
    description: string;
    features: string[];
    icon: Parameters<typeof Icon>[0]["name"];
}

const services: ServiceItem[] = [
    {
        id: "software-development",
        title: "Разработка ПО",
        description: "Разработка программного обеспечения на заказ: настольные приложения, автоматизация и бизнес-системы под ваши задачи.",
        features: [
            "Индивидуальный подход к каждому проекту",
            "Современные технологии и методологии",
            "Полный цикл разработки",
            "Техническая поддержка после запуска"
        ],
        icon: "trade"
    },
    {
        id: "web-development",
        title: "Разработка веб-сайтов",
        description: "Создание сайтов под ключ: лендинги, корпоративные сайты и интернет-магазины на React и Next.js с SEO и адаптивным дизайном.",
        features: [
            "Адаптивный дизайн",
            "Оптимизация производительности",
            "SEO оптимизация",
            "Интеграция с внешними сервисами"
        ],
        icon: "ticket-circle"
    },
    {
        id: "consulting",
        title: "Консультирование",
        description: "Техническое консультирование по вопросам разработки, выбора технологий, архитектуры решений и оптимизации процессов.",
        features: [
            "Консультации по выбору технологий",
            "Архитектурные решения",
            "Оптимизация процессов разработки",
            "Обучение и менторинг"
        ],
        icon: "headphone"
    },
    {
        id: "web-design",
        title: "Веб-дизайн",
        description: "Создание современного и функционального дизайна для веб-сайтов и веб-приложений. От концепции до готового макета.",
        features: [
            "UI/UX дизайн",
            "Адаптивный дизайн",
            "Создание макетов и прототипов",
            "Графический дизайн и брендинг"
        ],
        icon: "ticket-circle"
    }
];

interface ServicesProps {
    className?: string;
}

const Services = ({ className }: ServicesProps) => {
    return (
        <section
            className={className}
            itemScope
            itemType="https://schema.org/Service"
            id="services"
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesStructuredData) }}
            />

            <FadeIn>
                <div className="w-full flex justify-center">
                    <Title>Мои услуги</Title>
                </div>
            </FadeIn>

            <Spacing size="2xl" direction="vertical" />

            <FadeIn delay={200}>
                <div className="flex flex-col gap-4">
                    <header className="flex flex-col gap-3 text-center max-w-3xl mx-auto">
                        <span className="inline-flex self-center items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                            {YEARS_OF_EXPERIENCE}+ лет опыта в разработке
                        </span>
                        <Typography
                            variant="h1"
                            className="text-accent text-2xl md:text-4xl font-semibold leading-tight"
                        >
                            Разработка сайтов и ПО на заказ
                        </Typography>
                        <Typography
                            variant="body"
                            className="text-foreground text-base md:text-lg leading-relaxed"
                        >
                            Создаю сайты, веб-приложения и программное обеспечение
                            напрямую — без менеджеров и переплат IT-студии.
                            React, Next.js, TypeScript. Более {YEARS_OF_EXPERIENCE} лет в разработке.
                            Работаю с клиентами по всей России.
                        </Typography>
                        <Typography
                            variant="body"
                            className="text-foreground/80 text-sm md:text-base"
                        >
                            Портфолио с примерами работ — по запросу в{" "}
                            <a
                                href={TELEGRAM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                            >
                                Telegram
                            </a>
                            .
                        </Typography>
                    </header>
                </div>
            </FadeIn>

            <Spacing size="2xl" direction="vertical" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                    <FadeIn key={service.id} delay={400 + index * 150} direction="up">
                        <div
                            className="card w-full h-full rounded-4xl p-6 md:p-8 flex flex-col gap-4"
                            itemScope
                            itemType="https://schema.org/Service"
                        >
                        <div className="flex items-start gap-4">
                            <div className="w-16 card h-16 p-2 rounded-full relative border flex items-center justify-center flex-shrink-0">
                                <div className="absolute left-[-1.5rem] md:left-[-2rem] top-1/2 -translate-y-1/2 -ml-3 h-15 w-3 bg-primary shadow-[0_0_20px_rgba(255,94,24,0.8)] tag-trapezoid rotate-180" />
                                <Icon
                                    name={service.icon}
                                    className="text-primary h-full w-auto"
                                />
                            </div>
                            <div className="flex-1">
                                <Typography
                                    variant="h2"
                                    className="text-accent text-xl md:text-2xl font-medium mb-2"
                                >
                                    {service.title}
                                </Typography>
                                <Typography
                                    variant="body"
                                    className="text-foreground text-base mb-4"
                                >
                                    {service.description}
                                </Typography>
                            </div>
                        </div>

                        <ul className="flex flex-col gap-2 mt-2">
                            {service.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <span className="text-primary text-lg mt-1">•</span>
                                    <Typography
                                        variant="body"
                                        className="text-foreground/90 text-sm"
                                    >
                                        {feature}
                                    </Typography>
                                </li>
                            ))}
                        </ul>

                            <div className="mt-auto pt-4">
                                <Button
                                    variant="glass"
                                    size="lg"
                                    className="w-full rounded-full"
                                    onClick={() => {
                                        window.open(TELEGRAM_URL, "_blank");
                                    }}
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        <Icon name="telegram" />
                                        <Typography variant="body" color="accent">
                                            Связаться
                                        </Typography>
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
};

export default Services;

