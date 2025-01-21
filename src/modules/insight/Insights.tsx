"use client";
import BaseContactSection from "@/components/base/BaseContactSection";
import ImageHover from "@/components/base/ImageHover";
import Visibility from "@/components/base/Visibility";
import TheBody from "@/components/layout/TheBody";
import { DEFINE_ROUTERS } from "@/constants/routers";
import { Pagination, Stack } from "@mui/material";
import { useTranslations } from "next-intl";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface InsightProps {
  data: SanityDocument[];
  page: number;
  total: number;
  limit: number;
}

export default function Insights({ data, page, total, limit }: InsightProps) {
  const router = useRouter();

  const t = useTranslations();

  const totalPages = Math.ceil(total / limit);

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    router.replace(`${DEFINE_ROUTERS.insights}?page=${value}`);
  };

  return (
    <TheBody
      url="/header-bg/insight.png"
      title={t("insights.title")}
      description={t("insights.description")}
    >
      <div className="flex flex-col justify-start items-center w-full space-y-[78px]">
        <div className="sm:max-w-[1187px] grid sm:grid-cols-3 grid-cols-1 gap-x-[100px] gap-y-[60px]">
          {data.map((item, index) => (
            <div
              className="flex flex-col justify-start items-center w-[329px] min-h-[364px]"
              key={index}
            >
              <div className="w-full h-[184px]">
                <ImageHover src={item.imageURL} alt={item.mainImage.alt} />
              </div>
              <span className="text-start text-[20px] font-[700] mt-[18px] w-full">
                {item.title}
              </span>
              <p className="mt-[16px] text-base text-[#808284] font-normal text-start w-full">
                {item.description}
              </p>
              <Link
                href={`insights/${item.slug.current}`}
                className="text-start text-[#2E6C92] text-base font-normal w-full first-letter:uppercase"
              >
                {t("read_more")}
              </Link>
            </div>
          ))}
        </div>
        <Visibility visibility={total}>
          <Stack
            className="sm:max-w-[1187] max-w-screen-sm"
            direction="row"
            justifyContent="end"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <Pagination
              page={page}
              count={totalPages}
              color="primary"
              onChange={handleChangePage}
            />
          </Stack>
        </Visibility>
        <BaseContactSection />
      </div>
    </TheBody>
  );
}
