"use client";
import { Typography } from "@/shared/ui/Typography";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="w-full h-full flex items-center justify-center gap-2">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 text-primary"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M5 22.5h22v2.5H5v-2.5z"
        />
        <path
          fill="currentColor"
          d="M6.5 22.5 8.2 13.5 11.5 17 16 9.5 20.5 17 23.8 13.5 25.5 22.5H6.5z"
        />
        <circle cx="8.2" cy="12.8" r="1.4" fill="currentColor" />
        <circle cx="16" cy="8.5" r="1.6" fill="currentColor" />
        <circle cx="23.8" cy="12.8" r="1.4" fill="currentColor" />
      </svg>
      <Typography variant="h1" className="text-accent text-lg md:text-xl font-bold">
        it<span className="text-primary">vh</span>
        <span className="text-sm md:text-base">.dev</span>
      </Typography>
    </Link>
  );
}
