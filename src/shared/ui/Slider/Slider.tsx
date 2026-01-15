import * as React from "react";
import * as RadixSlider from "@radix-ui/react-slider";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type SliderProps = {
  value?: number[];
  defaultValue?: number[];
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  className?: string;
  onValueChange?: (value: number[]) => void;
  showEdgeLabels?: boolean;
};

function cn(...inputs: Array<string | undefined | false>) {
  return twMerge(clsx(inputs));
}

export function Slider({
  value,
  defaultValue = [1],
  min = 1,
  max = 10,
  step = 1,
  disabled,
  className,
  onValueChange,
  showEdgeLabels = true,
}: SliderProps) {
  return (
    <div className={cn("w-full", className)}>
      <RadixSlider.Root
        value={value}
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onValueChange={onValueChange}
        className={"relative flex w-full touch-none select-none items-center"}
      >
        <RadixSlider.Track
          className={
            "relative h-4 w-full grow rounded-full bg-[rgba(255,255,255,0.06)]"
          }
        >
          <RadixSlider.Range className="absolute h-full rounded-full bg-[var(--primary)]" />
        </RadixSlider.Track>
        <RadixSlider.Thumb
          className={cn(
            "block h-7 w-7 rounded-full bg-[var(--primary)]",
            "",
            "border border-[rgba(255,255,255,0.08)]",
            "transition-transform duration-150 will-change-transform",
            "focus:outline-none focus:scale-105",
            disabled && "opacity-50"
          )}
          aria-label="Slider Thumb"
        />
      </RadixSlider.Root>
      {showEdgeLabels && (
        <div className="mt-4 flex w-full justify-between text-foreground-secondary text-base">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      )}
    </div>
  );
}

export default Slider;
