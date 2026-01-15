"use client";
import React, { useEffect, useRef, useState } from "react";

import { Icon } from "@/shared/ui/Icon/Icon";
import { cn } from "@/shared/lib/utils";
import { Typography } from "../Typography";

type CopyProps = {
  value: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  onCopied?: () => void;
  shape?: "circle" | "square";
  iconSize?: number;
};

export default function Copy({
  value,
  className,

  onCopied,

  iconSize = 28,
}: CopyProps) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | null>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      onCopied?.();
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <button
      className={cn(
        "relative w-full cursor-pointer card glassflex rounded-md  glass-hover  px-2  h-15 items-center gap-2",
        className
      )}
      onClick={handleCopy}
    >
      <Typography
        variant="body"
        className={cn(
          "text-foreground text-left  font-medium text-base overflow-auto scrollbar-hide"
        )}
        style={{
          width: `calc(100% - ${iconSize}px - 2rem)`,
        }}
      >
        {value}
      </Typography>

      <div className="absolute bg-accent  rounded-md p-2 right-2 top-1/2 -translate-y-1/2">
        {
          <Icon
            name={copied ? "ticket-circle" : "copy"}
            size={iconSize}
            className={cn(
              "text-background transition-transform duration-200",
              copied && "scale-110"
            )}
          />
        }
      </div>
    </button>
  );
}
