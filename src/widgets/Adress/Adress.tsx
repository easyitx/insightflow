import { cn } from "@/shared/lib/utils";
import { Copy } from "@/shared/ui/Copy";
import { Typography } from "@/shared/ui/Typography";
import Image from "next/image";
import React from "react";
import image from "@/shared/assets/images/2.5trx.webp";
const Adress = ({
  className,
  totalPrice,
}: {
  className?: string;
  totalPrice: number;
}) => {
  return (
    <div className={cn("flex gap-4  h-full flex-col", className)}>
      <div className="flex items-center gap-4">
        <div className="card text-lg text-accent  w-15 h-15  flex items-center justify-center rounded-full">
          2
        </div>
        <Typography
          variant="body"
          className="text-foreground text-lg flex items-center gap-2"
        >
          Отправить
          <span className="text-foreground">{totalPrice} TRX</span>
        </Typography>
      </div>
      <div className=" card p-6  grow  flex flex-col gap-6">
        <Typography variant="h2" className="text-accent text-lg text-center">
          Адрес для отправки
        </Typography>
        <div className="flex w-full grow mx-auto max-w-fit h-54 md:w-full md:h-62 rounded-xl justify-center">
          <Image
            src={image}
            alt="QR"
            width={320}
            height={320}
            sizes="(max-width: 768px) 248px, 320px"
            className="h-full w-full rounded-2xl object-contain"
            priority
          />
        </div>

        <Copy value="TKgadbRi2mdzK9MyftSWGaWvZqrTYio3GS" size="lg" />
      </div>
    </div>
  );
};

export default Adress;
