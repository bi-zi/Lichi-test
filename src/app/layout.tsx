import "./reset.scss";
import "./global.scss";

import { Nunito } from "next/font/google";

import { Layout } from "@/components/layout/layout";

export const metadata = {
  title: "Lichi",
  description: "Тестовый проект для Lichi",
};

const nunito = Nunito({
  weight: "400",
  style: "normal",
  subsets: ["cyrillic"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={nunito.className}>
      <body>
        <Layout.Header />
        {children}
        <Layout.Footer />
      </body>
    </html>
  );
}
