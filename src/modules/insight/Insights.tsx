import BaseContactSection from "@/components/base/BaseContactSection";
import ImageHover from "@/components/base/ImageHover";
import TheBody from "@/components/layout/TheBody";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Insights() {
  const t = useTranslations();

  const DEFINE_INSIGHTS = [
    {
      title: "A Different Kind of All-Inclusive",
      description: "Sophistication doesn’t need a wristband to impress.",
      image: "/landing/insight.png",
    },
    {
      title: "A Different Kind of All-Inclusive",
      description: "Sophistication doesn’t need a wristband to impress.",
      image: "/landing/insight.png",
    },
    {
      title: "A Different Kind of All-Inclusive",
      description: "Sophistication doesn’t need a wristband to impress.",
      image: "/landing/insight.png",
    },
    {
      title: "A Different Kind of All-Inclusive",
      description: "Sophistication doesn’t need a wristband to impress.",
      image: "/landing/insight.png",
    },
    {
      title: "A Different Kind of All-Inclusive",
      description: "Sophistication doesn’t need a wristband to impress.",
      image: "/landing/insight.png",
    },
    {
      title: "A Different Kind of All-Inclusive",
      description: "Sophistication doesn’t need a wristband to impress.",
      image: "/landing/insight.png",
    },
    {
      title: "A Different Kind of All-Inclusive",
      description: "Sophistication doesn’t need a wristband to impress.",
      image: "/landing/insight.png",
    },
    {
      title: "A Different Kind of All-Inclusive",
      description: "Sophistication doesn’t need a wristband to impress.",
      image: "/landing/insight.png",
    },
    {
      title: "A Different Kind of All-Inclusive",
      description: "Sophistication doesn’t need a wristband to impress.",
      image: "/landing/insight.png",
    },
  ];

  return (
    <TheBody
      url="/header-bg/insight.png"
      title={t("insights.title")}
      description={t("insights.description")}
    >
      <div className="flex flex-col justify-start items-center w-full space-y-[78px]">
        <div className="sm:max-w-[1187] max-w-screen-sm grid sm:grid-cols-3 grid-cols-1 gap-x-[100px] gap-y-[60px]">
          {DEFINE_INSIGHTS.map((item, index) => (
            <div className="flex flex-col items-center w-[329px]" key={index}>
              <ImageHover src={item.image} />
              <p className="text-[#808284] text-xs font-medium text-start w-full">
                WYNDHAM HOTEL
              </p>
              <span className="text-start text-[20px] font-[700] mt-[18px] w-full">
                {item.title}
              </span>
              <p className="mt-[16px] text-base text-[#808284] font-normal">
                {item.description}
              </p>
              <Link
                href={"#"}
                className="text-start text-[#2E6C92] text-base font-normal w-full first-letter:uppercase"
              >
                {t("read_more")}
              </Link>
            </div>
          ))}
        </div>
        <BaseContactSection />
      </div>
    </TheBody>
  );
}
