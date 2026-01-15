"use client";
import { cn } from "@/shared/lib/utils";
import { Checkbox } from "@/shared/ui/Checkbox";
import { Slider } from "@/shared/ui/Slider";
import { Typography } from "@/shared/ui/Typography";

const Calculator = ({
  className,
  totalPrice,
  totalDiscount,
  isConfirmed,
  transationsCount,
  setTransationsCount,
  setIsConfirmed,
}: {
  className?: string;
  totalPrice: number;
  totalDiscount: number;
  isConfirmed: boolean;
  transationsCount: number;
  setTransationsCount: (value: number) => void;
  setIsConfirmed: (value: boolean) => void;
}) => {
  return (
    <div className={cn("flex gap-4  flex-col", className)}>
      <div className="flex items-center gap-4">
        <div className="card text-accent text-lg  w-15 h-15  flex items-center justify-center rounded-full">
          1
        </div>
        <Typography variant="body" className="text-foreground text-lg">
          Расчитать энергию
        </Typography>
      </div>
      <div className="glass card grow p-6 w-full  flex flex-col gap-4">
        <Typography variant="h2" className="text-accent text-lg text-center">
          Калькулятор энергии
        </Typography>
        <Typography
          variant="body"
          className="text-foreground text-md text-center"
        >
          Количество транзакций:
          <Typography
            as="span"
            variant="body"
            className="text-primary text-lg ml-2"
          >
            {transationsCount}
          </Typography>
        </Typography>

        <Slider
          min={1}
          max={10}
          value={[transationsCount]}
          onValueChange={(value) => setTransationsCount(value[0])}
        />
        <Checkbox
          className="text-foreground"
          checked={isConfirmed}
          onCheckedChange={setIsConfirmed}
        >
          <Typography variant="body" className="text-foreground text-sm">
            На адресе получателя нет USDT
          </Typography>
        </Checkbox>

        <div className="w-full flex justify-between items-center">
          <Typography variant="body" className="text-foreground text-base">
            Необходимо отправить:
          </Typography>
          <div className="flex items-center gap-2">
            <span className="line-through opacity-70">{totalDiscount} TRX</span>
            <Typography
              variant="body"
              className="text-primary font-bold text-base"
            >
              {totalPrice} TRX
            </Typography>
          </div>
        </div>

        <div className="w-full flex justify-between">
          <Typography variant="body" className="text-foreground text-base">
            Вы экономите:
          </Typography>
          <Typography
            variant="body"
            className="text-foreground  font-bold text-base"
          >
            {totalDiscount} TRX
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
