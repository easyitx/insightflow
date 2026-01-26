"use client";
import Image from "next/image";
import React from "react";
import bgFilterSvg from "@/shared/assets/images/background-filter.svg";

const BgFilter = () => {
  return (
    <>
      <div
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[65vh]"
          aria-hidden="true"
          role="presentation"
      >
        <Image
            src={bgFilterSvg}
            alt="-"
            fill
            className="object-cover"
            priority
        />
      </div>
      {/* Декоративные круги поверх оранжевого пятна */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[65vh]" aria-hidden="true">
        <div className="absolute top-[15%] left-[15%] w-32 h-32 rounded-full border-2 border-primary/20 animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute top-[20%] left-[20%] w-24 h-24 rounded-full border border-primary/30 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-[10%] left-[25%] w-16 h-16 rounded-full border border-primary/15 animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute top-[12%] right-[20%] w-40 h-40 rounded-full border-2 border-primary/10 animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute top-[18%] right-[15%] w-20 h-20 rounded-full border border-primary/25 animate-pulse" style={{ animationDuration: '3.5s' }} />
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-28 h-28 rounded-full border border-primary/20 animate-pulse" style={{ animationDuration: '4.5s' }} />
      </div>
    </>
  );
};

export default BgFilter;
