import Home from "@/modules/home/Home";
import { IParams } from "@/types/params.type";
import { setRequestLocale } from "next-intl/server";

interface IProps {
  params: IParams;
}

export default async function page({ params }: IProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Home />;
}
