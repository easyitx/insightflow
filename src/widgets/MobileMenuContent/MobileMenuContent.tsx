import Button from "@/shared/ui/Button/Button";
import Navigation from "../Navigation/Navigation";
import { Icon } from "@/shared/ui/Icon/Icon";
import { Typography } from "@/shared/ui/Typography";

export const MobileMenuContent: React.FC<{ onClose: () => void }> = ({
  onClose,
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Меню</h2>
        <Navigation onItemClick={onClose} className="flex-col space-y-4" />
      </div>

      <Button variant="glass" size="lg" className="rounded-full">
        <span className=" flex items-center gap-5">
          <Icon name="plus" />
          <Typography variant="body" color="accent">
            Telegram Bot
          </Typography>
        </span>
      </Button>
    </div>
  );
};
