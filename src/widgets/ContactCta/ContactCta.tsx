"use client";

import { Typography } from "@/shared/ui/Typography";
import { Spacing } from "@/shared/ui/Spacing";
import Button from "@/shared/ui/Button/Button";
import { Icon } from "@/shared/ui/Icon/Icon";
import { FadeIn } from "@/shared/ui/FadeIn";
import { cn } from "@/shared/lib/utils";
import { TELEGRAM_URL } from "@/shared/config/seo";

export function ContactCta({ className }: { className?: string }) {
  return (
    <section
      className={cn("w-full", className)}
      id="contact-cta"
      aria-label="Связаться для обсуждения проекта"
    >
      <FadeIn>
        <div className="card rounded-4xl p-8 md:p-12 text-center max-w-3xl mx-auto">
          <Typography
            variant="h2"
            className="text-accent text-2xl md:text-3xl font-semibold"
            as="h2"
          >
            Обсудим ваш проект?
          </Typography>
          <Spacing size="md" direction="vertical" />
          <Typography variant="body" className="text-foreground leading-relaxed">
            Опишите задачу в Telegram — отвечу в течение нескольких часов.
            Бесплатная консультация, оценка сроков и стоимости без обязательств.
          </Typography>
          <Spacing size="xl" direction="vertical" />
          <Button
            variant="glass"
            size="lg"
            className="rounded-full px-8"
            onClick={() => window.open(TELEGRAM_URL, "_blank")}
          >
            <span className="flex items-center gap-2">
              <Icon name="telegram" />
              <Typography variant="body" color="accent">
                Написать в Telegram
              </Typography>
            </span>
          </Button>
        </div>
      </FadeIn>
    </section>
  );
}
