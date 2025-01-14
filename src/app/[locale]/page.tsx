import Home from "@/modules/home/Home";
import { setRequestLocale } from "next-intl/server";

interface IProps {
  params: Record<string, any>;
}
export default async function page({ params }: IProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Home />;
}
