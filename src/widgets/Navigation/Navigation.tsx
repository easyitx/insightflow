"use client";

import Button from "@/shared/ui/Button/Button";
import { Typography } from "@/shared/ui/Typography";
import { cn } from "@/shared/lib/utils";

export const navigationConfig = [
  { label: "Услуги", href: "#services" },
  { label: "Преимущества", href: "#advantages" },
  { label: "FAQ", href: "#faq" },
] as const;

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
};

interface NavigationProps {
  className?: string;
  isMobile?: boolean;
  onItemClick?: () => void;
}

export default function Navigation({
  onItemClick,
  className,
}: NavigationProps) {
  return (
    <nav aria-label="Main navigation">
      <ul className={cn("flex items-center gap-2", className)}>
        {navigationConfig.map((item) => (
          <li key={item.href}>
            <Button
              onClick={() => {
                onItemClick?.();
                setTimeout(() => scrollToSection(item.href), 0);
              }}
              className="text-accent hover:text-accent/80 transition-colors cursor-pointer"
              variant="ghost"
            >
              <Typography variant="body" color="accent">
                {item.label}
              </Typography>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
