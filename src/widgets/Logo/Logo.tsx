"use client";
import { Typography } from "@/shared/ui/Typography";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="w-full h-full flex items-center justify-center">
      <Typography variant="h1" className="text-accent text-lg md:text-xl font-bold">
        InsightFlow
      </Typography>
    </Link>
  );
}
