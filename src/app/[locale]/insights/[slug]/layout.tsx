import TheHeaderInsightDetail from "./_components/TheHeaderInsightDetail";
import TheLayout from "@/components/layout/TheLayout";

interface IProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({ children }: IProps) {
  return (
    <TheLayout theHeader={<TheHeaderInsightDetail />}>{children}</TheLayout>
  );
}
