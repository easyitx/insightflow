"use client";
import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Button from "@/shared/ui/Button/Button";
import { Icon } from "@/shared/ui/Icon/Icon";
import { cn } from "@/shared/lib/utils";
import { Typography } from "@/shared/ui/Typography/Typography";
import { TELEGRAM_URL } from "@/shared/config/seo";

const Header = ({ className }: { className?: string }) => {
  return (
    <header
      className={cn("flex  relative items-center justify-between", className)}
    >
      <div className="h-full p-2 w-[140px]">
        <Logo />
      </div>
      <div className=" not-md:hidden absolute left-1/2 -translate-x-1/2">
        <Navigation />
      </div>

      <Button 
        variant="glass" 
        size="lg" 
        className="rounded-full"
        onClick={() => {
          window.open(TELEGRAM_URL, "_blank");
        }}
      >
        <span className=" flex items-center gap-5">
          <Icon name="telegram" />
          <Typography variant="body" color="accent">
            Связаться
          </Typography>
        </span>
      </Button>
    </header>
  );
};

export default Header;
