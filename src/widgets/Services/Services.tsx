"use client";
import React from "react";
import Title from "../Title/Title";
import { Typography } from "@/shared/ui/Typography";
import { Spacing } from "@/shared/ui/Spacing";
import { Icon } from "@/shared/ui/Icon/Icon";
import { cn } from "@/shared/lib/utils";
import Button from "@/shared/ui/Button/Button";

const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "InsightFlow - Разработка ПО и веб-сайтов",
    "description": "Профессиональные услуги по разработке программного обеспечения, созданию веб-сайтов и техническому консультированию",
    "provider": {
        "@type": "Person",
        "name": "InsightFlow"
    },
    "areaServed": "Россия и СНГ",
    "serviceType": "IT услуги",
    "url": "https://insightflow.ru"
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
        description: "Создание программного обеспечения под ваши задачи. От настольных приложений до сложных систем управления.",
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
        description: "Создание современных веб-сайтов и веб-приложений. От лендингов до сложных интернет-магазинов и корпоративных порталов.",
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

            <div className="w-full flex justify-center">
                <Title>Мои услуги</Title>
            </div>

            <Spacing size="2xl" direction="vertical" />

            <div className="flex flex-col gap-4">
                <header className="flex flex-col gap-2 text-center">
                    <Typography
                        variant="h1"
                        className="text-accent text-2xl font-medium"
                    >
                        Профессиональные IT услуги
                    </Typography>
                    <Typography
                        variant="h2"
                        className="text-foreground text-lg font-normal"
                    >
                        Разработка ПО, создание веб-сайтов и техническое консультирование
                        <br />
                        <strong>Индивидуальный подход к каждому проекту</strong>
                    </Typography>
                </header>
            </div>

            <Spacing size="2xl" direction="vertical" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service) => (
                    <div
                        key={service.id}
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
                                    window.open("https://t.me/intflow", "_blank");
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
                ))}
            </div>
        </section>
    );
};

export default Services;

