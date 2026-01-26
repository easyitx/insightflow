"use client";
import { cn } from "@/shared/lib/utils";
import React from "react";
import { Icon } from "@/shared/ui/Icon/Icon";
import Logo from "@/widgets/Logo/Logo";

import Button from "@/shared/ui/Button/Button";
import { Typography } from "@/shared/ui/Typography";

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn("w-full py-12 bg-background", className)} id="contact" role="contentinfo">
      <div className="app-container">
        <div className="flex flex-col items-center gap-8">
          <div className="w-[140px]">
            <Logo />
          </div>

          <Typography variant="body" className="text-center">
            Профессиональные IT услуги: разработка ПО, создание веб-сайтов и консультирование.
            <br /> Индивидуальный подход к каждому проекту.
            <br /> Свяжитесь со мной, и мы обсудим ваши задачи.
          </Typography>

          <Typography variant="body" className="text-center text-foreground/70 text-sm">
            <a href="/offer" className="text-primary hover:underline">
              Публичная оферта
            </a>
          </Typography>

          <div className="flex flex-col items-center gap-4">
            <Typography variant="h2" className="text-accent text-lg">
              Контакты
            </Typography>
            <div className="flex gap-4">
              <Button 
                variant="icon" 
                size="lg"
                onClick={() => {
                  window.open("https://t.me/intflow", "_blank");
                }}
                aria-label="Telegram"
              >
                <Icon name="telegram" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
