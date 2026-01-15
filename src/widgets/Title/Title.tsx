import React from "react";
import { cn } from "@/shared/lib/utils";

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Title({ children, className }: TitleProps) {
  return (
    <div
      className={cn(
        "relative  inline-flex items-center justify-center",
        className
      )}
    >
      <span
        className="pointer-events-none absolute right-full mr-3 top-1/2 hidden md:block h-[2px] w-[220px] -translate-y-1/2"
        style={{
          background:
            "linear-gradient(to left, rgba(255,94,24,0.6), rgba(255,94,24,0.2), rgba(255,94,24,0))",
        }}
      />

      <span
        className="pointer-events-none absolute left-full ml-3 top-1/2 hidden md:block h-[2px] w-[220px] -translate-y-1/2"
        style={{
          background:
            "linear-gradient(to right, rgba(255,94,24,0.6), rgba(255,94,24,0.2), rgba(255,94,24,0))",
        }}
      />

      <span
        className="pointer-events-none absolute right-full mr-1.5 top-1/2 hidden md:block w-4 h-4 -translate-y-1/2 rounded-full bg-[rgba(255,94,24,1)]"
        style={{
          boxShadow:
            "0 0 12px rgba(255,94,24,0.9), 0 0 36px rgba(255,94,24,0.5)",
        }}
      />

      <span
        className="pointer-events-none absolute left-full ml-1.5 top-1/2 hidden md:block w-4 h-4 -translate-y-1/2 rounded-full bg-[rgba(255,94,24,1)]"
        style={{
          boxShadow:
            "0 0 12px rgba(255,94,24,0.9), 0 0 36px rgba(255,94,24,0.5)",
        }}
      />

      <div
        className={cn(
          "card border text-primary w-fit rounded-full px-8 py-2 text-center font-medium text-sm"
        )}
      >
        {children}
      </div>
    </div>
  );
}
