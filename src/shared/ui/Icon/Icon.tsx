import { cn } from "@/shared/lib/utils";
import { type IconName } from "./model/types";

import {
  DiscountCircleIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  FlashIcon,
  TelegramIcon,
  VkIcon,
  CopyIcon,
  PlusIcon,
  TicketCircleIcon,
  CloseIcon,
  MenuIcon,
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
  menu: MenuIcon,
  "arrow-down": ArrowDownIcon,
  "arrow-up": ArrowUpIcon,
  trade: TradeIcon,
  flash: FlashIcon,
  headphone: HeadphoneIcon,
  telegram: TelegramIcon,

  "vk-icon": VkIcon,
  copy: CopyIcon,
  plus: PlusIcon,
  "ticket-circle": TicketCircleIcon,
  close: CloseIcon,
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
