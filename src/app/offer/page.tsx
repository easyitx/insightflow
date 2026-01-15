"use client";
import React from "react";
import { Typography } from "@/shared/ui/Typography";
import { Spacing } from "@/shared/ui/Spacing";
import { cn } from "@/shared/lib/utils";
import Title from "@/widgets/Title/Title";
import Button from "@/shared/ui/Button/Button";
import Link from "next/link";

export default function OfferPage() {
  return (
    <div className="app-container py-12">
      <div className="mb-6">
        <Link href="/">
          <Button variant="ghost" size="md">
            ← На главную
          </Button>
        </Link>
      </div>
      <div className="w-full flex justify-center mb-8">
        <Title>Публичная оферта</Title>
      </div>

      <Spacing size="xl" direction="vertical" />

      <div className="max-w-4xl mx-auto">
        <div className="card p-6 md:p-8 space-y-6">
          <section>
            <Typography variant="h2" className="text-accent text-xl md:text-2xl font-semibold mb-4">
              1. Общие положения
            </Typography>
            <Typography variant="body" className="text-foreground leading-relaxed">
              Настоящий документ является публичной офертой физического лица, применяющего специальный налоговый режим «Налог на профессиональный доход» (далее — Исполнитель). Исполнитель предлагает любому физическому или юридическому лицу (далее — Заказчик) заключить договор на оказание IT-услуг.
            </Typography>
          </section>

          <Spacing size="lg" direction="vertical" />

          <section>
            <Typography variant="h2" className="text-accent text-xl md:text-2xl font-semibold mb-4">
              2. Предмет договора
            </Typography>
            <div className="space-y-3">
              <Typography variant="body" className="text-foreground leading-relaxed">
                <strong className="text-accent">2.1.</strong> Исполнитель обязуется оказать услуги по разработке веб-сайтов, разработке программного обеспечения и его тестированию, работам и услугам по графическому дизайну, настройке ПК и консультированию, а Заказчик — принять и оплатить их.
              </Typography>
              <Typography variant="body" className="text-foreground leading-relaxed">
                <strong className="text-accent">2.2.</strong> Конкретный перечень услуг, сроки и стоимость согласовываются сторонами через электронную почту, мессенджеры или указываются в выставленном счете (инвойсе).
              </Typography>
            </div>
          </section>

          <Spacing size="lg" direction="vertical" />

          <section>
            <Typography variant="h2" className="text-accent text-xl md:text-2xl font-semibold mb-4">
              3. Акцепт оферты (Заключение договора)
            </Typography>
            <div className="space-y-3">
              <Typography variant="body" className="text-foreground leading-relaxed">
                <strong className="text-accent">3.1.</strong> Договор считается заключенным (акцептованным) с момента оплаты Заказчиком услуг Исполнителя на основании счета или через платежную форму на сайте.
              </Typography>
              <Typography variant="body" className="text-foreground leading-relaxed">
                <strong className="text-accent">3.2.</strong> Оплата означает полное согласие Заказчика с условиями данной оферты.
              </Typography>
            </div>
          </section>

          <Spacing size="lg" direction="vertical" />

          <section>
            <Typography variant="h2" className="text-accent text-xl md:text-2xl font-semibold mb-4">
              4. Порядок оказания услуг
            </Typography>
            <div className="space-y-3">
              <Typography variant="body" className="text-foreground leading-relaxed">
                <strong className="text-accent">4.1.</strong> Услуги оказываются дистанционно через интернет.
              </Typography>
              <Typography variant="body" className="text-foreground leading-relaxed">
                <strong className="text-accent">4.2.</strong> После завершения работ Исполнитель уведомляет Заказчика по электронной почте или в мессенджере.
              </Typography>
              <Typography variant="body" className="text-foreground leading-relaxed">
                <strong className="text-accent">4.3.</strong> Услуги считаются оказанными в полном объеме и принятыми Заказчиком, если в течение 3 (трех) рабочих дней после уведомления от Заказчика не поступило письменных претензий.
              </Typography>
            </div>
          </section>

          <Spacing size="lg" direction="vertical" />

          <section>
            <Typography variant="h2" className="text-accent text-xl md:text-2xl font-semibold mb-4">
              5. Стоимость и расчеты
            </Typography>
            <div className="space-y-3">
              <Typography variant="body" className="text-foreground leading-relaxed">
                <strong className="text-accent">5.1.</strong> Цена услуг фиксируется в инвойсе или чеке.
              </Typography>
              <Typography variant="body" className="text-foreground leading-relaxed">
                <strong className="text-accent">5.2.</strong> Исполнитель обязан сформировать чек в приложении МНС «Налог на профессиональный доход» и направить его Заказчику в электронном виде.
              </Typography>
            </div>
          </section>

          <Spacing size="lg" direction="vertical" />

          <section>
            <Typography variant="h2" className="text-accent text-xl md:text-2xl font-semibold mb-4">
              6. Ответственность
            </Typography>
            <Typography variant="body" className="text-foreground leading-relaxed">
              <strong className="text-accent">6.1.</strong> Исполнитель не несет ответственности за перебои в работе интернета или сторонних сервисов, необходимых для работы ПО.
            </Typography>
          </section>

          <Spacing size="lg" direction="vertical" />

          <section>
            <Typography variant="h2" className="text-accent text-xl md:text-2xl font-semibold mb-4">
              7. Реквизиты
            </Typography>
            <div className="card bg-background-card-hover p-4 space-y-3">
              <Typography variant="body" className="text-foreground">
                <strong className="text-accent">Исполнитель:</strong> Физическое лицо, применяющее специальный налоговый режим «Налог на профессиональный доход»
              </Typography>
              <Typography variant="body" className="text-foreground">
                <strong className="text-accent">УНП:</strong> СЕ6637580
              </Typography>
              <Typography variant="body" className="text-foreground">
                <strong className="text-accent">Виды деятельности:</strong>
              </Typography>
              <ul className="list-disc list-inside space-y-1 ml-4 text-foreground">
                <li>Разработка веб-сайтов (код 6201)</li>
                <li>Разработка программного обеспечения, его тестирование (код 63119)</li>
                <li>Работы и услуги по графическому дизайну (код 741)</li>
              </ul>
              <Typography variant="body" className="text-foreground">
                <strong className="text-accent">Контакты:</strong> Для связи используйте Telegram: <a href="https://t.me/intflow" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@intflow</a>
              </Typography>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

