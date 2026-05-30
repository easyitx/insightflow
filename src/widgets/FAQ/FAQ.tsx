"use client";
import React from "react";
import { Typography } from "@/shared/ui/Typography";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/shared/ui/Accordion/Accordion";
import { cn } from "@/shared/lib/utils";
import { Spacing } from "@/shared/ui/Spacing";
import Title from "../Title/Title";
import { FadeIn } from "@/shared/ui/FadeIn";
import { YEARS_OF_EXPERIENCE } from "@/shared/config/seo";

const faqData = [
    {
        id: "item-portfolio",
        question: "Где посмотреть примеры ваших работ?",
        answer: `Портфолио с кейсами отправляю по запросу в Telegram. Напишите — расскажу о похожих проектах и покажу релевантные примеры из моей практики.`,
    },
    {
        id: "item-price",
        question: "Сколько стоит разработка сайта?",
        answer: `Стоимость зависит от типа и сложности проекта:

• Лендинг — от 30 000 ₽
• Корпоративный сайт — от 50 000 ₽
• Интернет-магазин — от 100 000 ₽
• Веб-приложение — от 150 000 ₽

Точную цену называю после обсуждения задачи. Работа напрямую с разработчиком — без наценки IT-студии на менеджеров и офис. Первая консультация бесплатная.`,
    },
    {
        id: "item-studio",
        question: "Чем работа с вами лучше, чем с IT-студией?",
        answer: `В студии вы платите за процесс: менеджеров, офис, маркетинг и несколько исполнителей. Здесь — прямая работа с разработчиком с опытом более ${YEARS_OF_EXPERIENCE} лет, который сам пишет код и принимает решения. Это быстрее, прозрачнее по цене и без потери контекста при передаче между отделами.`,
    },
    {
        id: "item-1",
        question: "Какие услуги по разработке ПО вы предоставляете?",
        answer: "Я занимаюсь разработкой программного обеспечения различной сложности: от настольных приложений до сложных систем управления. Работаю с современными технологиями и методологиями разработки, обеспечиваю полный цикл от проектирования до внедрения и поддержки.",
    },
    {
        id: "item-2",
        question: "Какие технологии используются при разработке веб-сайтов?",
        answer: `При разработке веб-сайтов я использую современный стек технологий:

• Frontend: React, Next.js, TypeScript, Tailwind CSS
• Backend: Node.js, Python, базы данных
• Интеграции: API, платежные системы, CRM
• Оптимизация: SEO, производительность, безопасность

Все сайты создаются с адаптивным дизайном, оптимизированы для поисковых систем и имеют высокую скорость загрузки.`,
    },
    {
        id: "item-3",
        question: "Сколько времени занимает разработка проекта?",
        answer: `Сроки разработки зависят от сложности проекта:

• Лендинг: 1-2 недели
• Корпоративный сайт: 2-4 недели
• Интернет-магазин: 4-8 недель
• Веб-приложение: от 6 недель
• Настольное ПО: от 4 недель

Точные сроки определяются после обсуждения требований и составления технического задания. Всегда стараюсь соблюдать оговоренные сроки и информирую о прогрессе.`,
    },
    {
        id: "item-4",
        question: "Предоставляете ли вы техническую поддержку после завершения проекта?",
        answer: `Да, я предоставляю техническую поддержку после завершения проекта:

• Гарантийное обслуживание (срок оговаривается индивидуально)
• Исправление ошибок и багов
• Обновление контента
• Добавление нового функционала
• Консультации по использованию

Условия поддержки обсуждаются отдельно и могут быть включены в договор.`,
    },
    {
        id: "item-remote",
        question: "Работаете ли вы с клиентами из других городов?",
        answer: "Да, работаю удалённо с клиентами по всей России и СНГ. Все этапы — обсуждение, демонстрация промежуточных результатов и сдача проекта — проходят онлайн через Telegram, видеозвонки и общий доступ к репозиторию.",
    },
    {
        id: "item-6",
        question: "Как происходит процесс работы над проектом?",
        answer: `Процесс работы включает следующие этапы:

1. Обсуждение требований и целей проекта
2. Составление технического задания и оценка сроков
3. Согласование условий и подписание договора
4. Разработка дизайна и прототипов (для веб-проектов)
5. Разработка и тестирование
6. Внедрение и запуск
7. Техническая поддержка

На каждом этапе вы получаете промежуточные результаты и можете вносить корректировки.`,
    },
    {
        id: "item-7",
        question: "Как можно с вами связаться для обсуждения проекта?",
        answer: `Связаться со мной можно несколькими способами:

📱 Telegram — самый быстрый способ связи
📧 Email — для официальных запросов
💬 Социальные сети — для неформального общения

Обычно отвечаю в течение нескольких часов в рабочее время. Для срочных вопросов лучше использовать Telegram. Контакты указаны в футере сайта.`,
    }
];

const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim()
        }
    }))
};

interface FAQProps {
    className?: string;
}

export const FAQ: React.FC<FAQProps> = ({ className }) => {
    return (
        <section
            className={cn("w-full", className)}
            itemScope
            itemType="https://schema.org/FAQPage"
            id="faq"
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
            />

            <FadeIn>
                <div className="w-full flex justify-center">
                    <Title>Частые вопросы</Title>
                </div>
            </FadeIn>

            <Spacing size="xl" direction="vertical" />

            <FadeIn delay={200}>
                <Typography
                    color="accent"
                    className="text-center text-2xl"
                    variant="h2"
                >
                    Ответы на популярные вопросы
                </Typography>
            </FadeIn>

            <Spacing size="2xl" direction="vertical" />

            <FadeIn delay={400}>
                <div className="w-full mx-auto">
                    <Accordion type="multiple" className="w-full">
                    {faqData.map((item, index) => (
                        <AccordionItem
                            key={item.id}
                            value={item.id}
                            itemScope
                            itemProp="mainEntity"
                            itemType="https://schema.org/Question"
                        >
                            <AccordionTrigger
                                className="text-left data-[state=open]:text-primary text-lg font-semibold hover:text-accent transition-colors"
                                itemProp="name"
                            >
                                <span className="text-base md:text-lg">{item.question}</span>
                            </AccordionTrigger>
                            <AccordionContent
                                itemScope
                                itemProp="acceptedAnswer"
                                itemType="https://schema.org/Answer"
                            >
                                <Typography
                                    variant="body"
                                    className="whitespace-pre-line leading-relaxed text-foreground/90"
                                >
                                    {item.answer}
                                </Typography>
                            </AccordionContent>
                        </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </FadeIn>
        </section>
    );
};