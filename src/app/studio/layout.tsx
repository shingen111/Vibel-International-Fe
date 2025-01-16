import "@/app/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface IProps {
  children: React.ReactNode;
}

export default  function RootLayout({ children }: IProps) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
