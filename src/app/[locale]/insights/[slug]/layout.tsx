import TheFooter from "@/components/layout/TheFooter";
import TheHeaderInsightDetail from "./_components/TheHeaderInsightDetail";

interface IProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({ children }: IProps) {
  return (
    <div className="flex flex-col justify-between items-center min-h-[100vh] w-full">
      <TheHeaderInsightDetail />
      {children}
      <TheFooter />
    </div>
  );
}
