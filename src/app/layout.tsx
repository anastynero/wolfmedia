import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import './global.css'

export const metadata: Metadata = {
  title: "Wolfmedia",
  description: "«Wolfmedia» – это редакция, где ежедневно авторы, иллюстраторы, дизайнеры, видеографы, создают уникальный контент и доносят его до огромной аудитории с помощью социальных сетей.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
    <html lang="ru">
      <body>
        <Header/>
        <main className="container">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
