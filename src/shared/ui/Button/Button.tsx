import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "ghost" | "card" | "icon" | "banner" | "glass";
type ButtonSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function cn(...inputs: Array<string | undefined | false>) {
  return twMerge(clsx(inputs));
}

const baseClass =
  "inline-flex cursor-pointer items-center hover:bg-primary text-accent justify-center rounded-md font-medium transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none select-none";

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-[14px] gap-2",
  md: "h-10 px-4 text-[16px] gap-2",
  lg: "h-12 px-5 text-[18px] gap-3",
  xl: "h-14 px-6 text-[20px] gap-4",
  "2xl": "h-16 px-7 text-[22px] gap-5",
  "3xl": "h-18 px-8 text-[24px] gap-6",
  "4xl": "h-20 px-9 text-[26px] gap-7",
  "5xl": "h-22 px-10 text-[28px] gap-8",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-accent hover:opacity-90 shadow-sm rounded-xl",
  ghost: "bg-transparent text-foreground hover:bg-[rgba(255,255,255,0.06)]",
  card: "bg-background-card text-foreground hover:bg-background-card-hover border border-[var(--secondary)]",
  icon: "rounded-full card group p-0 text-foreground hover:bg-primary hover:text-accent",
  banner:
    "text-accent font-medium shadow-lg hover:shadow-2xl hover:scale-105 hover:brightness-110 transition-all duration-300 group relative overflow-hidden",
  glass: "card glass-hover  text-accent  transition-all duration-200 ",
};

const iconSizeBySize: Record<ButtonSize, string> = {
  sm: "w-9 h-9 text-[16px]",
  md: "w-10 h-10 text-[18px]",
  lg: "w-12 h-12 text-s",
  xl: "w-14 h-14 text-s",
  "2xl": "w-16 h-16 text-s",
  "3xl": "w-18 h-18 text-s",
  "4xl": "w-20 h-20 text-s",
  "5xl": "w-22 h-22 text-s",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    baseClass,
    variantClasses[variant],
    variant === "icon" ? iconSizeBySize[size] : sizeClasses[size],
    className
  );

  return (
    <button className={classes} {...props}>
      <span>{children}</span>
    </button>
  );
}
