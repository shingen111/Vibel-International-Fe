import TheBody from "@/components/layout/TheBody";
import { useTranslations } from "next-intl";
import Form from "./Form";

export default function BookMeeting() {
  const t = useTranslations("book_a_meeting");

  return (
    <TheBody
      url="/header-bg/insight.png"
      title={t("title")}
      description={t("description")}
    >
      <div
        className="flex flex-col justify-start items-center w-full p-[29px] bg-no-repeat object-cover min-h-[1088px] relative"
        style={{
          backgroundImage: "url('/booking/booking-bg.png')",
        }}
      >
        <div className="absolute sm:top-[120px] sm:left-[218px] top-[58px] left-0">
          <Form />
        </div>
      </div>
    </TheBody>
  );
}
