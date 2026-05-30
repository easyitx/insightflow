import { cn } from "@/shared/lib/utils";
import { type IconName } from "./model/types";

import {
  DiscountCircleIcon,
  ArrowDownIcon,
  FlashIcon,
  TelegramIcon,
  TicketCircleIcon,
  TradeIcon,
  HeadphoneIcon,
} from "./model/Icons";

interface IconProps
  extends Omit<React.SVGProps<SVGSVGElement>, "width" | "height"> {
  name: IconName;
  size?: number;
}

type IconComponentType = React.FC<React.SVGProps<SVGSVGElement>>;
const iconComponents: Record<IconName, IconComponentType> = {
  "discount-circle": DiscountCircleIcon,
  "arrow-down": ArrowDownIcon,
  trade: TradeIcon,
  flash: FlashIcon,
  headphone: HeadphoneIcon,
  telegram: TelegramIcon,
  "ticket-circle": TicketCircleIcon,
};

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className,
  ...props
}) => {
  const IconComponent = iconComponents[name as keyof typeof iconComponents];

  if (!IconComponent) {
    return <span>Icon not found: {name}</span>;
  }

  return (
    <IconComponent
      width={size}
      height={size}
      className={cn("inline-flex shrink-0 ", className)}
      {...props}
    />
  );
};
