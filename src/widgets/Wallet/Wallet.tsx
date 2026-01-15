import { cn } from "@/shared/lib/utils";
import { Typography } from "@/shared/ui/Typography";
import React from "react";
import WalletList from "./WalletList";
import wallet1 from "@/shared/assets/images/wallet/wallet-1.svg";
import wallet2 from "@/shared/assets/images/wallet/wallet-2.svg";
import wallet3 from "@/shared/assets/images/wallet/wallet-3.svg";
import wallet4 from "@/shared/assets/images/wallet/wallet-4.svg";
import wallet5 from "@/shared/assets/images/wallet/wallet-5.svg";
import wallet6 from "@/shared/assets/images/wallet/wallet-6.svg";
import wallet7 from "@/shared/assets/images/wallet/wallet-7.svg";

const Wallet = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex gap-4  h-full flex-col", className)}>
      <div className="flex items-center gap-4">
        <div className="card  text-accent text-lg  w-15 h-15  flex items-center justify-center rounded-full">
          3
        </div>
        <Typography variant="body" className="text-foreground text-lg">
          Получить энергию за 5 сек
        </Typography>
      </div>
      <div className=" card p-6  grow  flex flex-col gap-6">
        <Typography variant="h2" className="text-accent text-lg text-center">
          Доступно для любых кошельков
        </Typography>
        <WalletList
          items={[
            { src: wallet1.src, alt: "MetaMask" },
            { src: wallet2.src, alt: "Trust" },
            { src: wallet3.src, alt: "XDEFI" },
            { src: wallet4.src, alt: "GridPlus" },
            { src: wallet5.src, alt: "Trezor" },
            { src: wallet6.src, alt: "Coinbase" },
            { src: wallet7.src, alt: "Zengo" },
          ]}
          className="mt-2 "
        />
      </div>
    </div>
  );
};

export default Wallet;
