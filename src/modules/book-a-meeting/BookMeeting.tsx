import BaseContactSection from "@/components/base/BaseContactSection";
import TheBody from "@/components/layout/TheBody";
import { useTranslations } from "next-intl";

export default function BookMeeting() {
  const t = useTranslations("book_a_meeting");

  return (
    <TheBody
      url="/header-bg/insight.png"
      title={t("insights.title")}
      description={t("insights.description")}
    >
      <div className="flex flex-col justify-start items-center w-full space-y-[78px]">
        <div className="max-w-[1187] grid grid-cols-3 gap-x-[100px] gap-y-[60px]">
          booking
        </div>
        <BaseContactSection />
      </div>
    </TheBody>
  );
}
