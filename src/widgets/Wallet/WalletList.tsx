import React from "react";
import { cn } from "@/shared/lib/utils";
import WalletItem from "./WalletItem";

type WalletListProps = {
  items: Array<{ src: string; alt?: string }>;
  className?: string;
};

export default function WalletList({ items, className }: WalletListProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap gap-4",
        "[&>*]:basis-[calc((100%-(3-1)*1rem)/3)]",
        "md:[&>*]:basis-[calc((100%-(4-1)*1rem)/4)]",
        className
      )}
    >
      {items.map((it, idx) => (
        <WalletItem
          className="w-20 h-20 "
          key={`${it.alt ?? "wallet"}-${idx}`}
          src={it.src}
          alt={it.alt}
        />
      ))}
    </div>
  );
}
