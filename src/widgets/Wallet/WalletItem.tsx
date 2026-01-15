import Image, { type StaticImageData } from "next/image";
import React from "react";
import { cn } from "@/shared/lib/utils";

type WalletItemProps = {
  src: string | StaticImageData;
  alt?: string;
  className?: string;
};

export default function WalletItem({
  src,
  alt = "wallet",
  className,
}: WalletItemProps) {
  return (
    <div
      className={cn(
        "card rounded-3xl    flex items-center justify-center relative overflow-hidden",
        "transition-transform duration-200 hover:scale-[1.02] p-3",
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={34}
          height={34}
          className="object-contain h-full w-full "
        />
      ) : (
        <div className="h-full w-full  rounded-3xl"></div>
      )}
    </div>
  );
}
