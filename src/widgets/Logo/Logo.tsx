"use client";
import { Typography } from "@/shared/ui/Typography";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="w-full h-full flex items-center justify-center gap-2">
      <svg 
        width="32" 
        height="30" 
        viewBox="0 0 440 406" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path d="M219.954 401.998L219.952 31.6352L219.95 31.635C219.952 31.6352 143.95 195.877 143.95 195.877L0.000372094 188.698L219.954 401.998Z" fill="#FF5E18"/>
        <path d="M219.181 401.808L219.183 31.4448L219.185 31.4445C219.183 31.4448 295.185 195.687 295.185 195.687L439.134 188.507L219.181 401.808Z" fill="#FF5E18"/>
      </svg>
      <Typography variant="h1" className="text-accent text-lg md:text-xl font-bold">
        InsightFlow
      </Typography>
    </Link>
  );
}
