import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Metadata } from "next";
import "@/app/globals.css";
import TheLayout from "@/components/layout/TheLayout";

export const metadata: Metadata = {
  title: "Vibel International",
  description: "Vibel international - OVER 35 YEARS OF HOSPITALITY MANAGEMENT",
  icons: "/logo.jpg",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Record<string, any>;
}) {
  const { locale } = await params;
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
            <TheLayout>{children}</TheLayout>
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
