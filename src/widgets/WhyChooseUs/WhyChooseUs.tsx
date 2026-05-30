"use client";
import React from "react";
import { cn } from "@/shared/lib/utils";
import { Icon } from "@/shared/ui/Icon/Icon";
import { Typography } from "@/shared/ui/Typography";
import Title from "../Title/Title";
import { Spacing } from "@/shared/ui/Spacing";
import { FadeIn } from "@/shared/ui/FadeIn";
import { YEARS_OF_EXPERIENCE } from "@/shared/config/seo";

type WhyChooseUsItem = {
  title: string;
  subtitle: string;
  icon?: { name: Parameters<typeof Icon>[0]["name"]; bg?: string };
};

const defaultItems: WhyChooseUsItem[] = [
  {
    title: "Напрямую с разработчиком",
    subtitle:
      "В студии между вами и кодом — менеджер, аккаунт и несколько исполнителей. Здесь вы работаете со мной: я проектирую, пишу и принимаю технические решения сам.",
    icon: { name: "discount-circle" },
  },
  {
    title: "Без наценки студии",
    subtitle:
      "Нет офиса, штата из десятков людей и маркетингового бюджета. Стоимость — за реальную работу, а не за содержание агентства.",
    icon: { name: "flash" },
  },
  {
    title: "Быстрее, без бюрократии",
    subtitle:
      "Без согласований между отделами и внутренних процессов. Правки и новые идеи обсуждаем за день, а не через цепочку согласований.",
    icon: { name: "trade" },
  },
  {
    title: "Один ответственный за всё",
    subtitle:
      "От первого созвона до запуска — один человек. Контекст не теряется при передаче между командами, как это часто бывает в студиях.",
    icon: { name: "headphone" },
  },
];

export const WhyChooseUs = ({
  className,
  items = defaultItems,
}: {
  className?: string;
  items?: WhyChooseUsItem[];
}) => {
  return (
    <section className={cn("w-full", className)} id="advantages">
      <FadeIn>
        <div className="w-full flex justify-center">
          <Title>Преимущества</Title>
        </div>
      </FadeIn>
      <Spacing size="xl" direction="vertical" />
      <FadeIn delay={200}>
        <Typography color="accent" className="text-center text-2xl" variant="h2">
          Почему стоит выбрать меня?
        </Typography>
        <Spacing size="md" direction="vertical" />
        <Typography
          variant="body"
          className="text-foreground text-center max-w-2xl mx-auto leading-relaxed"
        >
          IT-студии продают процесс: менеджеры, отделы, накладные расходы.
          Здесь — прямая работа с разработчиком с опытом более {YEARS_OF_EXPERIENCE} лет:
          быстрее, прозрачнее и без лишних звеньев между вами и результатом.
        </Typography>
      </FadeIn>
      <Spacing size="xl" direction="vertical" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <FadeIn key={i} delay={400 + i * 100} direction="up">
            <div
              className="card w-full h-full rounded-4xl p-6 md:p-8 flex flex-col gap-3"
            >
            <div className="w-16 card h-16 p-2 rounded-full relative border flex items-center justify-center">
              <div className="absolute left-[-1.5rem] md:left-[-2rem] top-1/2 -translate-y-1/2 -ml-3 h-15 w-3  bg-primary shadow-[0_0_20px_rgba(255,94,24,0.8)] tag-trapezoid rotate-180" />
              <Icon
                name={
                  (item.icon?.name as Parameters<typeof Icon>[0]["name"]) ??
                  "discount-circle"
                }
                className="text-primary h-full w-auto"
              />
            </div>

            <Typography
              variant="h2"
              className="text-accent text-lg md:text-lg font-medium "
            >
              {item.title}
            </Typography>
              <Typography
                variant="body"
                className="text-foreground text-base md:text-base"
              >
                {item.subtitle}
              </Typography>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
