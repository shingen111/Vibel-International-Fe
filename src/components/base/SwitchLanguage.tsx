"use client";
import { TLocale, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { startTransition, useEffect, useState } from "react";

export default function SwitchLanguage() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [locale, setLocale] = useState<TLocale>("en");

  useEffect(() => {
    const pathSegments = window.location.pathname.split("/");
    const currentLocale = pathSegments[1];
    setLocale(currentLocale as TLocale);
  }, [router]);

  const onChangeLocale = (locale: TLocale) => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: locale}
      );
    });
  };

  return (
    <div className="flex flex-row justify-between items-center space-x-1">
      <div
        className={`cursor-pointer text-white hover-grow text-sm sm:text-base ${
          locale === "vi" ? "font-bold" : ""
        }`}
        onClick={() => onChangeLocale("vi")}
      >
        Vietnam
      </div>
      <span className="text-white">|</span>
      <div
        className={`cursor-pointer text-white hover-grow text-sm sm:text-base ${
          locale === "en" ? "font-bold" : ""
        }`}
        onClick={() => onChangeLocale("en")}
      >
        English
      </div>
    </div>
  );
}
