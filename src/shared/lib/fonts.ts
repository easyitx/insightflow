import { Golos_Text } from "next/font/google";

export const golosText = Golos_Text({
  subsets: ["latin", "cyrillic"],
  variable: "--font-golos",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
