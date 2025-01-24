import ImageHover from "@/components/base/ImageHover";
import Visibility from "@/components/base/Visibility";
import { Link } from "@/i18n/routing";
import displayDescription from "@/utils/display-description";
import { Stack } from "@mui/material";
import { useTranslations } from "next-intl";
import { SanityDocument } from "next-sanity";
import React from "react";

interface IProps {
  posts: SanityDocument[];
}

export default function InsightLanding({ posts }: IProps) {
  const t = useTranslations("");

  return (
    <Visibility visibility={posts.length}>
      <div className="flex flex-col justify-start items-center space-y-6 w-full bg-white !mt-24 sm:m-auto">
        <h3 className="text-4xl text-black font-normal uppercase">insights</h3>
        <div className="flex sm:flex-row flex-col justify-start items-start sm:space-x-[100px] space-x-0 sm:space-y-0 space-y-5">
          {posts.map((item, index) => (
            <div
              className="flex flex-col justify-start items-center w-[329px] min-h-[364px]"
              key={index}
            >
              <div className="w-full h-[184px]">
                <Link href={`insights/${item.slug.current}`} className="w-full">
                  <ImageHover src={item.imageURL} alt={item.mainImage.alt} />
                </Link>
              </div>
              <Visibility visibility={item.categories !== null}>
                <Stack
                  direction="row"
                  justifyContent="start"
                  alignItems="center"
                  sx={{ width: "100%" }}
                  spacing={1}
                  mt={1}
                >
                  {item.categories?.map((_item: any, index: number) => (
                    <span
                      key={index}
                      className="text-[#808284] text-xs font-normal"
                    >
                      {_item.name}
                    </span>
                  ))}
                </Stack>
              </Visibility>
              <Link
                href={`insights/${item.slug.current}`}
                className="w-full mt-[18px]"
              >
                <span className="text-start text-[20px] font-[700] w-full hover:text-[#2E6C92]">
                  {item.title}
                </span>
              </Link>
              <p className="mt-[16px] text-base text-[#808284] font-normal text-start w-full">
                {displayDescription(item.description)}
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
      </div>
    </Visibility>
  );
}
