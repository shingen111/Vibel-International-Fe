import TheBody from "@/components/layout/TheBody";
import { useTranslations } from "next-intl";
import React from "react";

export default function Home() {
  const t = useTranslations("home");
  return (
    <TheBody url="/header-bg/header-bg-1.png" title={t("title")}>
      main
    </TheBody>
  );
}
