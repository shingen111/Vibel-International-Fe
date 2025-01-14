import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "@/app/globals.css";
import TheLayout from "@/components/layout/TheLayout";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IProps {
  children: React.ReactNode;
  params: Record<string, any>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Omit<IProps, "children">) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespaces: ["home", "layout", "footer"],
  });
  return {
    title: "Vibel International",
    description: `Vibel international - ${t("home.title")}`,
    icons: {
      icon: "/favicon/logo.jpg",
      shortcut: "/favicon/logo.jpg",
      apple: "/favicon/logo.jpg",
    },
  };
}

export default async function DashboardLayout({ children, params }: IProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <AppRouterCacheProvider>
            <ToastContainer />
            <TheLayout>{children}</TheLayout>
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
