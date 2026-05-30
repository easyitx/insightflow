import type { ReactNode } from "react";
import type { Metadata } from "next";
import { offerMetadata } from "@/shared/config/seo";

export const metadata: Metadata = offerMetadata;

export default function OfferLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
